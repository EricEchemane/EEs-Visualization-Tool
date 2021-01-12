import { Box, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '../buttons/IconButton';
import Button from '../buttons/Button';
import Slider from '../inputs/slider';

import { useState } from 'react';



export default function CompareSortingAlgo(props: any) {

    const [numberWindows, set_numberWindows] = useState([
        "Merge Sort", "QuickSort", "Heap Sort", "Shell Sort"
    ]);
    const [arraySize, set_arraySize] = useState(75);
    const [array, set_array] = useState(generateRandom(arraySize));
    
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
                
                {numberWindows.map((algo: string, index: number) => 
                    <Grid
                        item xs={12} lg={4} 
                        key={index}
                        className={"windows"}>
                        <Box
                            className={"bars-comparison-container"}>

                            <Box className="window-label"> {algo} </Box>

                            {array.map((each: number, index: number) => 
                                    <div className="barsX" key={index} style={{height: each+"px"}} ></div>
                                )}
                        </Box>
                    </Grid>
                )}
            </Grid>

            
            <Box
                className={"comparison-panel"}
                display="flex"
                justifyContent="center"
                alignItems="center">
                
                <Box mx={2} display="flex" style={{width: '40%', backgroundColor: 'transparent'}} justifyContent="flex-end">
                    <Box
                        ml={2} mr={2}
                        style={{overflow: 'hidden', backgroundColor: 'transparent'}}
                        display="flex"
                        flexDirection="column"
                        alignItems="center" >
                        
                            <Box m={1} className="f-color2"> Generate New Array </Box>
                            <Button label="Generate" handleClick={() => {set_array(generateRandom(arraySize))}}  />
                    </Box>
                    <Box
                        ml={2} mr={2}
                        style={{overflow: 'hidden', backgroundColor: 'transparent'}}
                        display="flex"
                        flexDirection="column"
                        alignItems="center" >
                        
                        <Box m={1} className="f-color2"> Change Size </Box>
                        
                            <Slider 
                            label="change array size"
                            min={10}
                            max={150}
                            color="accent"
                            value={arraySize}
                            id="comparison-arraySize-slider"
                                onInput={(n: number) => {
                                    set_arraySize(n);
                                    set_array(generateRandom(arraySize));
                                }} />
                    </Box>
                </Box>
                
                <Box
                    style={{overflow: 'hidden', backgroundColor: 'transparent'}}
                    display="flex"
                    flexDirection="column"
                    alignItems="center" >
                        <Box m={1} className="f-color2" >Add window</Box>
                        <IconButton title="Add window" icon={AddIcon}  />
                </Box>

                <Box mx={2} display="flex" style={{width: '40%', backgroundColor: 'transparent'}} justifyContent="flex-start">
                    <Box
                        ml={2} mr={2}
                        style={{overflow: 'hidden', backgroundColor: 'transparent'}}
                        display="flex"
                        flexDirection="column"
                        alignItems="center" >
                            <Box m={1} className="f-color2" >Generate </Box>
                            <Button label="Generate"  />
                    </Box>
                </Box>

            </Box>
        </Grid>
    )
}
