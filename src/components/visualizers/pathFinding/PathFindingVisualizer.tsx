import React, { createContext } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NodeSquare from './NodeSquare';
import { Box } from '@material-ui/core';
import Button from '../../buttons/Button';
import ButtonAccent from '../../buttons/ButtonAccent';
import { useState, useRef, useMemo } from 'react';

export const mouseDownContext = createContext({} as any);

function PathFindingVisualizer()
{
    const [algoOptionsDropdown, set_algoOptionsDropdown] = useState(false);
    const [activeAlgo, setActiveAlgo] = useState({ id: -1, name: 'Choose Algorithm' });
    
    const algortihms = useRef([
        {id: 0, name: 'Breadth First Search'},
        {id: 1, name: 'Depth First Search'},
        {id: 2, name: 'Dijkstra\'s'},
        {id: 3, name: 'A*'}
    ])

    const [nodes, setNodes] = useState([] as any);
    const [start, setStart] = useState(195);
    const [finish, setFinish] = useState(1798);
    const [prevNode, setPrevNode] = useState(-1);

    const [isMouseDown, set_isMouseDown] = useState(false);

    useMemo(() => {
        const hey = [] as any;
        for(let x = 0; x < 90 * 30; x++){
            hey.push(<NodeSquare 
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

    const ShowAlgoOptionsDropdown = () =>
    {
        set_algoOptionsDropdown((prev: boolean) => !prev);
    }
    const selectAlgo = (id: number) =>
    {
        setActiveAlgo(algortihms.current[id]);
        set_algoOptionsDropdown(false);
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
                        <input type="range"/>
                    </Box>
                    <Box pl={2} pr={2} display="flex" flexDirection="column" alignItems="center">
                        <Button label="Clear field" />
                    </Box>
                    <Box pl={2} pr={2} display="flex" flexDirection="column" alignItems="center">
                        <ButtonAccent type="accent" label="Find the path!" />
                    </Box>
                </div>
            </div>
         </Box>
    )
}

export default React.memo(PathFindingVisualizer);