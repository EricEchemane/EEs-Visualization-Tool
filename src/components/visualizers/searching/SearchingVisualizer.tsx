import { useState, useEffect, useRef, memo } from 'react'
import { Box } from '@material-ui/core';
import TextField from '../../inputs/TextField';
import ButtonAccent from '../../buttons/ButtonAccent';
import Button from '../../buttons/Button';
import getAnimations from './searchingAlgorithms';

function SearchingVisualizer()
{
   // ---> States
   const [searchSize, setSearchSize] = useState(200)
   const [searchItem, setsearchItem] = useState(-1);
   const [searchArray, setSearchArray] = useState(generateRandom(searchSize));
   const [searchSpeed, setSearchSpeed] = useState(300);
   const SortedsearchArray = useRef(sorted());

   const [linearSearchMessage, set_linearSearchMessage] = useState("Linear Search")
   const [binarySearchMessage, set_binarySearchMessage] = useState("Binary Search")
   const [linearMessageColor, setLinearMessageColor] = useState("white")
   const [binaryMessageColor, setBinaryMessageColor] = useState("white")
   const [timeouts, setTimeouts] = useState([] as any)
   const [lfound, setlfound] = useState(false)
   const [bfound, setbfound] = useState(false)

   // -----> UseEffect

   useEffect(() => {
      SortedsearchArray.current = sorted()
   }, [searchArray])


   // ---> Functions

   function animate(animationFrames: any[], CLASSNAME: string) {
      let CHANGE_COLOR = 0;
      let REVERT_COLOR = -1;
      const numberOfFrames = animationFrames.length;

      for (let x = 0; x < numberOfFrames; x++) {
         const frame = animationFrames[x];
         const state = frame.state
         const steps = frame.steps
         const index = frame.lookupIndex
         // const accent = '#0AFFEF';
         const red = '#dd6f74';
         if (state === CHANGE_COLOR) executeFrame(CLASSNAME, index, red, x)
         else if (state === REVERT_COLOR) executeFrame(CLASSNAME, index, red, x)
         else {
            executeFrame(CLASSNAME, index, 'yellowgreen', x)
            if (CLASSNAME === 'linear-bar') {
               changeMessage('linear-bar', index, steps, x);
            }
            else {
               changeMessage('binary-bar', index, steps, x);
            }
            return;
         }
      }
   }

   function changeMessage(CLASSNAME: string, index: number, steps: number, ms: number) {
      timeouts.push(setTimeout(() => {
         if (CLASSNAME === 'binary-bar') {
            setbfound(true);
            set_binarySearchMessage(`Found at index ${index} in ${steps} steps.`);
            setBinaryMessageColor('yellowgreen');
            return;
         }
         setlfound(true);
         set_linearSearchMessage(`Found at index ${index} in ${steps} steps.`);
         setLinearMessageColor('yellowgreen');
      }, ms * (301 - searchSpeed)))
   }

   function executeFrame(CLASSNAME: string, x: number, COLOR: string, ms: number) {
      timeouts.push(
         setTimeout(() => {
            changeColor(CLASSNAME, x, COLOR);
         }, ms * (301 - searchSpeed)))
   }

   function changeColor(CLASSNAME: string, index: number, COLOR: string) {
      const items = (document.getElementsByClassName(CLASSNAME) as HTMLCollectionOf<HTMLElement>)
      if (items[index]) {
         items[index].style.backgroundColor = COLOR;
      }
   }

   function searchNow() {
      setlfound(false)
      setbfound(false)
      if (searchItem < 0) {
         alert('Please input a positive integer.')
         return;
      }

      for (let x = 0; x < searchArray.length; x++) {
         changeColor('linear-bar', x, '#0AFFEF')
         changeColor('binary-bar', x, '#0AFFEF')
      }

      set_binarySearchMessage('Searching binary...')
      set_linearSearchMessage('Searching linearly...');
      setBinaryMessageColor('rgba(255,255,255,.7)')
      setLinearMessageColor('rgba(255,255,255,.7)')

      let ANIMATIONS = getAnimations(searchArray, searchItem)
      let LINEAR_ANIMATION = ANIMATIONS[0]
      let BINARY_ANIMATION = ANIMATIONS[1]

      animate(LINEAR_ANIMATION, 'linear-bar');

      if (LINEAR_ANIMATION.length === searchArray.length * 2) {
         timeouts.push(setTimeout(() => {
            set_linearSearchMessage(`Item ${searchItem} not found.`)
            setLinearMessageColor('red')
         }, (searchArray.length * 2) * (301 - searchSpeed)))
      }

      animate(BINARY_ANIMATION, 'binary-bar');
      let binarySearchWorstTime = (Math.floor(Math.log2(searchArray.length)) * 2);

      if (BINARY_ANIMATION.length === binarySearchWorstTime || BINARY_ANIMATION.length === binarySearchWorstTime+2) {
         timeouts.push(setTimeout(() => {
            setbfound(true);
            set_binarySearchMessage(`Item ${searchItem} not found.`)
            setBinaryMessageColor('red')
         }, (binarySearchWorstTime) * (301 - searchSpeed)))
      }
   }

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
      const array = [];
      for (let x = 0; x < size; x++) {
         const random = Math.floor(Math.random() * (110 - 1 + 1) + 1)
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
               <Box component="span" mr={1}>Search for :</Box>
               <TextField
                  handleInput={(n: number) => {
                     setsearchItem(n);
                  }}
                  type="number"
                  placeHolder="Any positive integer" />
            </Box>
         </Box>
         <Box
            className="linearSearch rgba2" >
            <h3 className="searchLabel" style={{ color: linearMessageColor }} > {linearSearchMessage} </h3>
            <div>
               {searchArray.map((each: number, idx: number) =>
                  <div
                     style={{ height: `${each}px` }}
                     key={idx}
                     className="linear-bar" >
                  </div>
               )}
            </div>
         </Box>
         <Box
            className="binarySearch rgba2" >
            <h3 className="searchLabel" style={{ color: binaryMessageColor }} > {binarySearchMessage} </h3>
            <div>
               {
                  SortedsearchArray.current.map((each: number, idx: number) =>
                     <div
                        style={{ height: `${each}px` }}
                        key={idx}
                        className="binary-bar">
                     </div>
                  )}
            </div>
         </Box>
         <Box
            className="searchingVisualizerPanel rgba2" >
            <div>
               <Box
                  ml={2} mr={2}>
                  <Button label="New Array" handleClick={() => {
                     setSearchArray(generateRandom(searchSize))
                     for (let x = 0; x < searchArray.length; x++) {
                        changeColor('linear-bar', x, '#0AFFEF')
                        changeColor('binary-bar', x, '#0AFFEF')
                     }
                     setLinearMessageColor("white")
                     setBinaryMessageColor("white")
                     set_binarySearchMessage("Binary Search")
                     set_linearSearchMessage("Linear Search")
                  }} />
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
                     onInput={(event: any) => { changeSize(event.target.value) }}
                     value={searchSize}
                     min={10}
                     max={300} />
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
                     value={searchSpeed}
                     onInput={(event: any) => { setSearchSpeed(event.target.value) }}
                     min={10}
                     max={200} />
               </Box>
               <Box
                  ml={2} mr={2}>
                  <ButtonAccent
                     type="accent"
                     label="Search"
                     handleClick={searchNow} />
               </Box>
               <Box
                  ml={2} mr={2}>
                  <ButtonAccent
                     type="error"
                     label="stop"
                     handleClick={() => {
                        for (const each of timeouts) {
                           clearTimeout(each);
                        }
                        if (!lfound) {
                           set_linearSearchMessage("Search stopped.")
                           setLinearMessageColor('yellow')
                        }
                        if (!bfound) {
                           set_binarySearchMessage("Search stopped.")
                           setBinaryMessageColor('yellow')
                        }
                     }} />
               </Box>
            </div>
         </Box>
      </Box>
   )
}
export default memo(SearchingVisualizer);