import { useState } from 'react'
import { Box} from '@material-ui/core';
import TextField from '../../inputs/TextField';
import ButtonAccent from '../../buttons/ButtonAccent';
import Button from '../../buttons/Button';

export default function SearchingVisualizer() {
    // ---> States           


    // ---> Functions        



    // ---> MARK UP          
    return (
        <Box
            p={4}
            className="flat searchVisualizerContainer rgba2"
            style={{
                width: '98vw', height: '80vh', position: 'relative',
                margin: 'auto', top: '1rem', overflow: 'hidden',
                borderRadius: '10px'
            }}>
            <Box
                display="flex"
                className="searchItemInput rgba2 transparent" >
                <Box
                    margin="auto"
                    flex={1}
                    className="transparent">
                    Search for: <TextField type="text" placeHolder="Any integer" />
                </Box>
            </Box>
            <Box
                className="linearSearch rgba2" >

            </Box>
            <Box
                className="binarySearch rgba2" >

            </Box>
            <Box
                className="searchingVisualizerPanel rgba2" >
                <div>
                    <Button label="New Array" />
                    <Box
                        className="f-color2"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center">
                        <Box>Change Size</Box>
                        <input
                            id="searchArray-change-size-slider"
                            type="range"
                            min={10}
                            max={200} />
                    </Box>
                    <Box
                        className="f-color2"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center">
                        <Box>Change Speed</Box>
                        <input
                            id="searchArray-change-speed-slider"
                            type="range"
                            min={10}
                            max={200} />
                    </Box>
                    <ButtonAccent type="accent" label="Search" />
                </div>
            </Box>
        </Box>
    )
}