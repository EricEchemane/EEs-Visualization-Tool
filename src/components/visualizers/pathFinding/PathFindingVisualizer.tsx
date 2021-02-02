import React, { createContext, useEffect } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NodeSquare from './NodeSquare';
import { Box } from '@material-ui/core';
import Button from '../../buttons/Button';
import ButtonAccent from '../../buttons/ButtonAccent';
import { useState, useRef, useMemo } from 'react';
import Algorithms, {bfs, node} from './Algorithms';

export const mouseDownContext = createContext({} as any);

function PathFindingVisualizer()
{
    const [algoOptionsDropdown, set_algoOptionsDropdown] = useState(false);
    const [activeAlgo, setActiveAlgo] = useState({ id: -1, name: 'Choose Algorithm' });
    const [speed, setSpeed] = useState(96);

    const algortihms = useRef([
        {id: 0, name: 'Breadth First Search'},
        {id: 1, name: 'Depth First Search'},
        {id: 2, name: 'Dijkstra\'s'},
        {id: 3, name: 'A*'}
    ])

    useEffect(()=>{
        addBorderWalls();
    }, []);

    const [nodes, setNodes] = useState([] as any);
    const [start, setStart] = useState(1370);
    const [finish, setFinish] = useState(1420);
    const [prevNode, setPrevNode] = useState(-1);

    const [isMouseDown, set_isMouseDown] = useState(false);

    useMemo(() => {
        const hey = [] as any;
        for(let x = 0; x < 90 * 30; x++){
            hey.push(<NodeSquare
                clearPath={clearPath}
                onMouseEnter={findThePath}
                changeStart={handleChangeStart}
                changeFinish={handleChangeFinish}
                changePrev={(id: number) => {setPrevNode(id)}}
                onMouseDown={(b:boolean) => {set_isMouseDown(b)}}
                isStart={x === start}
                isFinish={x === finish}
                id={x}
                key={x} />)
        }
        setNodes(hey);
    }, [start, finish]);

    // FUNCTIONS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    function findThePath(s: number, en: number, instant?: boolean) {
        if(instant) {
            let frames = Algorithms(finish, s, activeAlgo.id)[1];
            let boxes = (document.getElementsByClassName('node') as HTMLCollectionOf<HTMLElement>);
            for(let x = 0; x<frames.length; x++) {
                if(frames[x] === finish) break;
                if(boxes[frames[x]]) {
                    boxes[frames[x]].classList.add('path');
                }
            }
            return;
        }
       clearPath();
       clearVisited();
        // this will accept two array
       let animationFrames = Algorithms(finish, s, activeAlgo.id);
       animate(animationFrames[0], 'visited');
       setTimeout(()=>{
           animatePath(animationFrames[1]);
           setTimeout(() => {
                clearVisited();
           }, animationFrames[1].length * (120 - speed));
       }, animationFrames[0].length * (100 - speed))
    }
    function animate(frames: number[], classname: string) {
        for(let x = 0; x < frames.length; x++) {
            if(frames[x] === start) continue;
            changeColor(frames[x], x, classname);
        }
    }
    function animatePath(frames: number[]) {
        for(let x = 0; x < frames.length; x++) {
            if(frames[x] === finish) continue;
            changeColor(frames[x], x, 'path');
        }
    }
    function changeColor(id: number, ms: number, classname: string) {
        let boxes = (document.getElementsByClassName('node') as HTMLCollectionOf<HTMLElement>);
        setTimeout(() =>{
            if(classname === 'path') {
                boxes[id].classList.remove('visited');
                boxes[id].classList.add(classname);
            }
            else if (boxes[id]) boxes[id].classList.add(classname);
        }, ms * (100 - speed));
    }
    function addBorderWalls(){
        let boxes = (document.getElementsByClassName('node') as HTMLCollectionOf<HTMLElement>);
        for(let x = 0; x < 90; x++) {
            if(boxes[x])
                boxes[x].classList.add('obstacle');
        }
        for(let x = 90; x < (90 * 30); x+= 90) {
            if(boxes[x])
                boxes[x].classList.add('obstacle');
        }
        for(let x = 179; x < (90 * 30); x+= 90) {
            if(boxes[x])
                boxes[x].classList.add('obstacle');
        }
        for(let x = 90 * 29; x < (90 * 30); x++) {
            if(boxes[x])
                boxes[x].classList.add('obstacle');
        }
    }
    function handleChangeStart(n: number) {
        setStart(n);
    }
    function handleChangeFinish(n: number) {
        setFinish(n);
    }
    const ShowAlgoOptionsDropdown = () =>
    {
        set_algoOptionsDropdown((prev: boolean) => !prev);
    }
    const selectAlgo = (id: number) =>
    {
        setActiveAlgo(algortihms.current[id]);
        set_algoOptionsDropdown(false);
    }
    function changeSpeed(e: any) {
        const value = e.target.value;
        setSpeed(value);
    }
    function clearObstacles() {
        let boxes = document.querySelectorAll('.obstacle');
        for(let x = 0; x < boxes.length; x++) {
            boxes[x].classList.remove('obstacle');
        }
    }
    function clearPath() {
        let boxes = document.querySelectorAll('.path');
        for(let x = 0; x < boxes.length; x++) {
            boxes[x].classList.remove('path');
        }
    }
    function clearVisited() {
        let boxes = document.querySelectorAll('.visited');
        for(let x = 0; x < boxes.length; x++) {
            boxes[x].classList.remove('visited');
        }
    }
    function resetField(){
        clearObstacles();
        clearPath();
        clearVisited();
        addBorderWalls();
    }
    // OTHER VARIABLES @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    const algoOptions = algortihms.current.map((each: any) =>
        <div key={each.id} onClick={()=>{selectAlgo(each.id)}} > {each.name} </div>
    )

    // MARK UP @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    return (
        <Box
         p={4}
         className="flat"
         style={{
            width: '98vw', height: '80vh', position: 'relative',
            margin: 'auto', top: '1rem', overflow: 'hidden',
            borderRadius: '10px'
            }}>

            <div className={"pathfinding-algoOptions"}>
                <div className="pathfinding-algo-dropdown" onClick={ShowAlgoOptionsDropdown}>
                    <div> {activeAlgo.name} </div>
                    <ArrowDropDownIcon />
                </div>

                <Box hidden={!algoOptionsDropdown}>
                    <div className="pathAlgo-options">
                        {algoOptions}
                    </div>
                </Box>
            </div>

            <div className="search-field">
                <mouseDownContext.Provider value={{MouseDown: isMouseDown, prev: prevNode, s: start, f: finish}}>
                    <div id="draggable-field" >
                        {nodes}
                    </div>
                </mouseDownContext.Provider>
            </div>

            <div className="pathFinding-panel">
                <div>
                    <Box pl={2} pr={2} display="flex" flexDirection="column" alignItems="center">
                        <Box m={1}>Change Speed</Box>
                        <input aria-label="pathfinding-speed" type="range" min={0.1} max={98} value={speed} onChange={changeSpeed} />
                    </Box>
                    <Box pl={2} pr={2} display="flex" flexDirection="column" alignItems="center">
                        <Button label="Reset Field" handleClick={resetField} />
                    </Box>
                    <Box pl={2} pr={2} display="flex" flexDirection="column" alignItems="center">
                        <ButtonAccent handleClick={() => {findThePath(start, finish, false)}} type="accent" label="Find the path!" />
                    </Box>
                </div>
            </div>
         </Box>
    )
}

export default React.memo(PathFindingVisualizer);