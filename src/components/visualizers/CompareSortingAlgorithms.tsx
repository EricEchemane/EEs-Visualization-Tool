import { Box, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '../buttons/IconButton';
import Button from '../buttons/Button';
import Slider from '../inputs/slider';

import { useState } from 'react';



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
    const [sortingSpeed, set_sortingSpeed] = useState(149);
    const [options, hide_options] = useState(true);
    

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

                            <Box className="window-label"> {algo} </Box>

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
                        <Box className="f-color2"> {options ? 'Add':'Close'} </Box>
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
                        <Box className="f-color2" pb={2}>Change Speed</Box>
                        <input
                            style={{cursor: 'pointer'}}
                            type="range"
                            min={10}
                            max={70}
                            onInput={(e: any) => {
                            let value = e.target.value
                                set_sortingSpeed(value);
                        }} />
                    </Box>
                </Box>
            </Box>

            <Box
                className="add-options" hidden={options} >
                    <Box component="h3" pb={2} > Choose Algorithm </Box>

                    {availableAlgo.map((algo: string, index: number) => 
                        <Box
                            p={1}
                            className="compare-options"
                            onClick={() => {
                                
                            }}>
                            {algo}    
                        </Box>
                    )}
            </Box>
        </Grid>
    )
}