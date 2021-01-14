import { useState, useEffect } from 'react'
import { Box } from '@material-ui/core';

import TextField from '../../inputs/TextField';
import ButtonAccent from '../../buttons/ButtonAccent';
import Button from '../../buttons/Button';

import generateRandom from '../SortingVisualizer';

export default function SearchingVisualizer() {

    // ---> States           

    const [searchSize, setSearchSize] = useState(300)
    const [searchArray, setSearchArray] = useState(generateRandom(searchSize));
    let SortedsearchArray = sorted()

    // -----> UseEffect      

    useEffect(() => {
        SortedsearchArray = sorted()
    })


    // ---> Functions        

    function changeSize(newSize: number) {
        setSearchSize(newSize);
        setSearchArray(generateRandom(searchSize));
    }

    function sorted() {
        let copy = new Array(searchArray.length)
        copy = Object.assign([], searchArray)
        copy = copy.sort((a: number, b: number) => a - b)
        return copy;
    }

    function generateRandom(size: number) {
        let bars = (document.getElementsByClassName('bars') as HTMLCollectionOf<HTMLElement>)
        for (let x = 0; x < bars.length; x++)
            if (bars[x]) {
                bars[x].style.backgroundColor = "#0AFFEF"
                bars[x].style.transition = '.2s ease';
            }
        const array = [];
        for (let x = 0; x < size; x++) {
            const random = Math.floor(Math.random() * (110 - 2 + 1) + 2)
            array.push(random);
        }
        return array;
    }



    // ---> MARK UP          
    return (
        <Box
            p={4}
            className="flat searchVisualizerContainer "
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
                    Search for: <TextField type="text" placeHolder="Any positive integer" />
                </Box>
            </Box>
            <Box
                className="linearSearch rgba2" >
                <h3 className="searchLabel" >Linear Search</h3>
                <div>
                    {searchArray.map((each: number, idx: number) =>
                        <div style={{ height: `${each}px` }} key={idx}>

                        </div>
                    )}
                </div>
            </Box>
            <Box
                className="binarySearch rgba2" >
                <h3 className="searchLabel" >Binary Search</h3>
                <div>
                    {
                    SortedsearchArray.map((each: number, idx: number) =>
                        <div style={{ height: `${each}px` }} key={idx}>

                        </div>
                    )}
                </div>
            </Box>
            <Box
                className="searchingVisualizerPanel rgba2" >
                <div>
                    <Box
                        ml={2} mr={2}>
                        <Button label="New Array" handleClick={()=>{setSearchArray(generateRandom(searchSize))}} />
                    </Box>
                    <Box
                        ml={2} mr={2}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center">
                        <Box p={1} >Change Size</Box>
                        <input
                            id="searchArray-change-size-slider"
                            type="range"
                            onInput={(e: any)=>{changeSize(e.target.value)}}
                            value={searchSize}
                            min={10}
                            max={200} />
                    </Box>
                    <Box
                        ml={2} mr={2}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center">
                        <Box p={1}>Change Speed</Box>
                        <input
                            id="searchArray-change-speed-slider"
                            type="range"
                            min={10}
                            max={200} />
                    </Box>
                    <Box
                        ml={2} mr={2}>
                        <ButtonAccent type="accent" label="Search" />
                    </Box>
                </div>
            </Box>
        </Box>
    )
}