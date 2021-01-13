import { Box, Grid, Hidden } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import IconButton from '../buttons/IconButton';
import Button from '../buttons/Button';
import RoundButton from '../buttons/RoundButton';

import { useState } from 'react';
import getAnimations from './SynchronousSorting';


export default function CompareSortingAlgo(props: any) {


    const [windows, set_windows] = useState([] as any);
    const [availableAlgo, set_availableAlgo] = useState([
        "Merge Sort", "Quick Sort", "Heap Sort", "Shell Sort", "Insertion Sort",
        "Selection Sort", "Bubble Sort"
    ])
    const [algos, set_algos] = useState([
        "Merge Sort", "Quick Sort", "Heap Sort", "Shell Sort", "Insertion Sort",
        "Selection Sort", "Bubble Sort"
    ])
    const [arraySize, set_arraySize] = useState(70);
    const [array, set_array] = useState(generateRandom(arraySize));
    const [options, hide_options] = useState(true);
    
    // ----> SYNCHRONOUS SORTING FUNCTION 
    function synchSort() {
        let ANIMATIONS = [] as any;
        for (const each of windows) {
            let index = algos.indexOf(each);
            let frames = getAnimations(index, array);
            ANIMATIONS.push(frames);
        }
        for(let x = 0; x < ANIMATIONS.length; x++) {
            animate(ANIMATIONS[x], x);
        }
    }

    function animate(FRAMES: any, idx: number) {
        let arraycopy = array.sort((a: any, b: any) => a - b);
        // console.log((document.getElementsByClassName(`bars${idx}`) as HTMLCollectionOf<HTMLElement>))
        // return
        for (let x = 0; x < FRAMES.length; x++) {
        const STATE = FRAMES[x][0];
        const VALUE_1 = FRAMES[x][1];
        const VALUE_2 = FRAMES[x][2];
        if (STATE === "change") {
            setTimeout(() => {
                changeColor(VALUE_1, "purple", idx);
                changeColor(VALUE_2, "purple", idx);
            }, x * 30);
        }
        else if (STATE === "revert") {
            setTimeout(() => {
                changeColor(VALUE_1, "#0AFFEF", idx);
                changeColor(VALUE_2, "#0AFFEF", idx);
            }, x * 30);
        }
        else if (STATE === "change_height") {
            let bars = (document.getElementsByClassName(`bars${idx}`) as HTMLCollectionOf<HTMLElement>)
            setTimeout(() => {
                if (bars[VALUE_1] != undefined) {
                    bars[VALUE_1].style.transition = '0ms';
                    bars[VALUE_1].style.height = VALUE_2 + "px";
                }
            }, x * 30);       
        }
        else if (STATE === "swap_change") {
            setTimeout(() => {
                changeColor(VALUE_1, "yellowgreen", idx);
                changeColor(VALUE_2, "yellowgreen", idx);
                changeHeight(VALUE_1, arraycopy[VALUE_1], idx);
                changeHeight(VALUE_2, arraycopy[VALUE_2], idx);
            }, x * 30);
        }
        else {
            setTimeout(() => {
                changeColor(VALUE_1, "#0AFFEF", idx);
                changeColor(VALUE_2, "#0AFFEF", idx);
            }, x * 30);
        }
    }
    }

    // -----> change color
    function changeColor(index: number, COLOR: string, classNumber: number) {
        let bars = (document.getElementsByClassName(`bars${classNumber}`) as HTMLCollectionOf<HTMLElement>)
        if (bars[index]) {
            bars[index].style.transition = '0ms';
            bars[index].style.backgroundColor = COLOR;
        } 
    }
    function changeHeight(index: number, HEIGHT: number, classNumber: number)
    {
        let bars = (document.getElementsByClassName(`bars${classNumber}`) as HTMLCollectionOf<HTMLElement>)
        if (bars[index]) bars[index].style.height = HEIGHT+"px";
    }

    function generateRandom(size: number) {
        let bars = (document.getElementsByClassName('barsX') as HTMLCollectionOf<HTMLElement>)
        for (let x = 0; x < bars.length; x++)
            if (bars[x]) {
                bars[x].style.backgroundColor = "#0AFFEF"
                bars[x].style.transition = '.2s ease';
            } 
        const array_ = [];
        for(let x = 0; x < size; x++) {
            const random = Math.floor(Math.random()*(130 - 2 + 1) + 2)
            array_.push(random);
        }   
        return array_;
    }

// render
    
    return (
        <Grid
            container
            id="comparison-window">

            <Grid container className={"window-container"} >    
                
                <Box
                    className="center f-color2"
                    hidden={windows.length !== 0}
                    style={{
                        backgroundColor: 'transparent',
                        
                    }}>
                    Add Algorithms to Compare
                </Box>
                
                {windows.map((algo: string, index: number) => 
                    <Grid
                        item xs={12} lg={4} 
                        key={index}
                        className={"windows"}>
                        <Box
                            className={"bars-comparison-container"}>

                            <Box className="window-label" display="flex">
                                <Box flex={1} >{algo}</Box>
                                <Box
                                    onClick={() => {
                                        let temp = [] as any;
                                        for (let each of windows) {
                                            if (each === algo) continue;
                                            temp.push(each)
                                        }
                                        set_windows(temp);
                                        set_availableAlgo([...availableAlgo, algo])
                                    }}
                                    style={{ cursor: 'pointer' }}> <CloseIcon /> </Box>
                            </Box>

                            {array.map((each: number, index2: number) => 
                                    <div className={`barsX bars${index  }`} key={index2} style={{height: each+"px"}} ></div>
                                )}
                        </Box>
                    </Grid>
                )}
            </Grid>

            
            <Box
                className={"comparison-panel"}> 
                
                <Box className="panel">

                    <Box p={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center" >
                        <Box className="f-color2"> {options ? 'Add':'Close options'} </Box>
                        <IconButton
                            handleClick={() => {
                                hide_options(!options);
                            }}
                            label="Add window"
                            icon={AddIcon} />
                    </Box>

                    <Box p={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center" textOverflow="" >
                        <Box className="f-color2">Generate New Array</Box>
                        <Button
                            label="Generate"
                            handleClick={() => {
                                set_array(generateRandom(arraySize));
                            }}/>
                    </Box>

                    <Box p={2} mb={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center" textOverflow="" >
                        <Box className="f-color2" pb={2}>Change Size</Box>
                        <input
                            style={{cursor: 'pointer'}}
                            type="range"
                            min={10}
                            max={70}
                            onInput={(e: any) => {
                            let value = e.target.value
                            set_arraySize(value)
                            set_array(generateRandom(arraySize))
                        }} />
                    </Box>
                    <Box p={2} mb={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center" textOverflow="" >
                        <Box className="f-color2">Sort</Box>
                        <RoundButton icon={PlayArrowIcon} color="accent" label="Sort" handleClick={()=>{synchSort()}} />
                    </Box>
                    <Box p={2} mb={3} display="flex" flexDirection="column" justifyContent="center" alignItems="center" textOverflow="" >
                        <Box className="f-color2">Close</Box>
                        <RoundButton icon={CloseIcon} color="error" label="Close" handleClick={()=>{props.close()}} />
                    </Box>
                </Box>
            </Box>
            {/* // -----> OPTIONS  */}
            <Box
                className="add-options" hidden={options} >
                    <Box component="h3" pb={2} > Choose Algorithm </Box>

                    {availableAlgo.map((algo: string, index: number) => 
                        <Box
                            p={1}
                            key={index}
                            className="compare-options"
                            onClick={() => {
                                set_windows([...windows, algo]);
                                let temp = [] as any;
                                for (let each of availableAlgo) {
                                    if (each === algo) continue;
                                    temp.push(each)
                                }
                                set_availableAlgo(temp);
                            }}>
                            {algo}    
                        </Box>
                    )}
            </Box>
        </Grid>
    )
}