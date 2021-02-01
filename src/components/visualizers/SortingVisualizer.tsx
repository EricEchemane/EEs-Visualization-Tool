import { useState, memo } from 'react';
import { Box } from '@material-ui/core';
import Button from '../../components/buttons/Button';
import ButtonAccent from '../../components/buttons/ButtonAccent';
import ToggleButton from '../../components/buttons/ToggleButton';
import Slider from '../../components/inputs/slider';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// Algorithms
import MergeSort from './sortingAlgorithms/MergeSort';
import QuickSort from './sortingAlgorithms/QuickSort';
import HeapSort from './sortingAlgorithms/HeapSort';
import ShellSort from './sortingAlgorithms/ShellSort';
import InsertionSort from './sortingAlgorithms/InsertionSort';
import SelectionSort from './sortingAlgorithms/SelectionSort';
import { BubbleSort } from './sortingAlgorithms/SelectionSort';

// this indicates that the page loads for the first time
let first = true;
function SortingVisualizer(props: any): JSX.Element {

   const [algoOptionsOpen, set_algoOptionsOpen] = useState(false);
   const [chosenAlgo, set_chosenAlgo] = useState("Choose an algorithm");
   const [sortingSpeed, set_sortingSpeed] = useState(180);
   const [sortDisabled, set_sortDisabled] = useState(true);
   const [generateBtn_disabled, set_generateBtn_disabled] = useState(false);
   const [arraySizeButton, set_arraySizeButton] = useState(false);
   const [sortSpeed, set_sortSpeed] = useState(false);
   const [descending, set_descending] = useState(false);
   const [disableDescending, set_disableDescending] = useState(false);
   const sortingAlgoList = [
      "Merge Sort", "Quick Sort", "Heap Sort", "Shell Sort", "Insertion Sort",
      "Selection Sort", "Bubble Sort"
   ];

   const [arraySize, set_arraySize] = useState(150)

   // random numbers generator range from 2 to 300
   function generateRandom(size: number) {
      let bars = (document.getElementsByClassName('bars') as HTMLCollectionOf<HTMLElement>)
      for (let x = 0; x < bars.length; x++) {
         if (bars[x]) {
            bars[x].style.backgroundColor = "#0AFFEF"
            bars[x].style.transition = '.2s ease';
         }
      }
      const array = [];
      for (let x = 0; x < size; x++) {
         const random = Math.floor(Math.random() * (300 - 2 + 1) + 2)
         array.push(random);
      }
      return array;
   }
   // THe State Randome Numbers Array
   const [randomNumbers, set_randomNumbers] = useState(generateRandom(150));

   function changeArraySize(n: any) {
      set_arraySize(n);
      set_randomNumbers(generateRandom(n));
      if (!first) {
         set_sortDisabled(false);
      }
   }

   function sort() {
      // check what algorithm to be use
      let bars = (document.getElementsByClassName('bars') as HTMLCollectionOf<HTMLElement>)
      for (let x = 0; x < bars.length; x++) {
         if (bars[x]) {
            bars[x].style.backgroundColor = "red"
         }
      }
      const index = sortingAlgoList.indexOf(chosenAlgo)
      first = false;
      set_sortDisabled(true);
      set_arraySizeButton(true);
      set_sortSpeed(true);
      set_generateBtn_disabled(true)
      set_disableDescending(true)

      if (index === 0) MergeSort(randomNumbers, sortingSpeed, descending, enablePanels);
      else if (index === 1) QuickSort(randomNumbers, sortingSpeed, descending, enablePanels)
      else if (index === 2) HeapSort(randomNumbers, sortingSpeed, descending, enablePanels);
      else if (index === 3) ShellSort(randomNumbers, sortingSpeed, descending, enablePanels);
      else if (index === 4) InsertionSort(randomNumbers, sortingSpeed, descending, enablePanels);
      else if (index === 5) SelectionSort(randomNumbers, sortingSpeed, descending, enablePanels);
      else if (index === 6) BubbleSort(randomNumbers, sortingSpeed, descending, enablePanels);
   }

   function enablePanels(t: number) {
      setTimeout(() => {
         set_generateBtn_disabled(false)
         set_arraySizeButton(false);
         set_sortSpeed(false);
         set_disableDescending(false);
      }, t * (200 - sortingSpeed))
   }

   function changeSpeed(n: number) {
      set_sortingSpeed(n);
   }

   return (
      <Box
         p={4}
         className="flat"
         style={{
            width: '98vw', height: '80vh', position: 'relative',
            margin: 'auto', top: '1rem', overflow: 'hidden',
            borderRadius: '10px'
         }}>


         <Box id="sorting-windows">
            <div className="bars-container">
               <div className="algo-options">
                  <Box className={"sorting-algorithms"} hidden={!algoOptionsOpen} >
                     <div style={{ pointerEvents: 'none' }} > <Box p={2} pl={1}>  </Box> </div>
                     {
                        sortingAlgoList.map((algo: any, index: number) =>
                           <div key={index}> <Box p={1} pl={2} onClick={() => {
                              set_chosenAlgo(algo);
                              set_algoOptionsOpen(false);
                              set_sortDisabled(false)
                           }} > {algo} </Box> </div>
                        )
                     }
                  </Box>
                  <Box flex={1} onClick={() => { set_algoOptionsOpen(!algoOptionsOpen) }} >
                     {chosenAlgo}
                  </Box>
                  <Box onClick={() => { set_algoOptionsOpen(!algoOptionsOpen) }} display="flex" justifyContent="center" alignItems="center" > <ArrowDropDownIcon /> </Box>
               </div>
               {
                  randomNumbers.map((num: number, index: number) =>
                     <div className="bars" style={{ height: num + 'px' }} key={index} > </div>
                  )
               }
            </div>

         </Box>

         <div id="scroll" >

            <Box className="sorting-panel">
               <Box m={1} display="flex" flexDirection="column" alignContent="center" justifyContent="center">
                  <Button disabled={generateBtn_disabled} label="Generate New Array" handleClick={() => {
                     set_randomNumbers(generateRandom(arraySize));
                     if (!first) {
                        set_sortDisabled(false);
                        first = false;
                     }
                  }} />
               </Box>

               <Box m={1} display="flex" flexDirection="column" alignContent="center" justifyContent="center">
                  <Box pb={1} textAlign="center" > Change Array Size </Box>
                  <Slider disabled={arraySizeButton} id="array_size" onInput={(n: any) => changeArraySize(n)} color="accent" min={5} max={300} value={arraySize} />
               </Box>
               <Box m={1} display="flex" flexDirection="column" alignContent="center" justifyContent="center">
                  <Box pb={1} textAlign="center" > Change Speed </Box>
                  <Slider disabled={sortSpeed} id="sorting-speed" onInput={(n: any) => changeSpeed(n)} color="error" min={5} max={198} value={sortingSpeed} />
               </Box>
               <Box m={2} style={{ position: 'relative', bottom: '2px' }} display="flex" flexDirection="column" alignContent="center" justifyContent="center">
                  <Box pb={1} textAlign="center" > Descending </Box>
                  <ToggleButton disabled={disableDescending} toggleOn={descending} color="accent" title="Descending" handleClick={() => {
                     set_descending(!descending);
                     if (!first) {
                        set_sortDisabled(false)
                        first = false;
                     }
                  }} />
               </Box>

               <Box m={1} display="flex" flexDirection="column" alignContent="center" justifyContent="center">
                  <ButtonAccent label="Sort !" disabled={sortDisabled} handleClick={sort} title="Start sorting" type="error" />
               </Box>
            </Box>
         </div>
      </Box>
   )
}
export default memo(SortingVisualizer);