let FOUND = 1;
let CHANGE_COLOR = 0;
let REVERT_COLOR = -1;

interface Frame {
   state: number, // the options are the variables above
   lookupIndex: number, // the index in the array
   steps: number // steps it takes to find
}

let LINEAR_SEARCH_ANIMATIONS = [] as Frame[];
let BINARY_SEARCH_ANIMATIONS = [] as Frame[];

export default function getAnimations(array: number[], searchItem: number) {
   // call this first...
   resetAnimations();
   fill_LinearAnimationFrames(array, searchItem);
   fill_BinaryAnimationFrames(array, searchItem);

   return [
      LINEAR_SEARCH_ANIMATIONS,
      BINARY_SEARCH_ANIMATIONS
   ];
}

function resetAnimations() {
   LINEAR_SEARCH_ANIMATIONS = []
   BINARY_SEARCH_ANIMATIONS = []
}

// -----> fill linear animation frams
function fill_LinearAnimationFrames(array: number[], searchItem: number) {
   for (let x = 0; x < array.length; x++) {
      let newFrame: Frame;
      if (array[x] == searchItem) {
         newFrame = {
            state: FOUND,
            lookupIndex: x, // the index where the saerchItem were found
            steps: x + 1 // the steps it takes two find the searchItem
         }
         LINEAR_SEARCH_ANIMATIONS.push(newFrame);
         // FOR DEBUGGING PURPOSES
         // alert(`${searchItem} has been found at index ${x}`)
         return;
      }
      else {
         // push a frame where that indicates to change color
         newFrame = {
            state: CHANGE_COLOR,
            lookupIndex: x, // current index where we look at
            steps: x + 1
         }
         LINEAR_SEARCH_ANIMATIONS.push(newFrame);
         // here we need to push another one to change the color back to normal
         newFrame = {
            state: REVERT_COLOR,
            lookupIndex: x, // current index where we look at
            steps: x + 1
         }
         LINEAR_SEARCH_ANIMATIONS.push(newFrame);
      }
   }
}

// -----> BINARY SEARCH
function fill_BinaryAnimationFrames(array: number[], searchItem: number) {
   let sortedArray = new Array(array.length);
   sortedArray = Object.assign([], array);
   sortedArray = sortedArray.sort((a: number, b: number) => a - b);
   // console.log(searchItem)
   // console.log(sortedArray)
   binSearch(
      sortedArray,
      searchItem,
      0,
      sortedArray.length - 1,
      0
   )
}

function binSearch(
   sortedArray: number[],
   searchItem: number,
   lowerBound: number,
   upperBound: number,
   NoOfSteps: number): number {

   if (lowerBound > upperBound) return -1;

   NoOfSteps += 1;
   let midIndex = (upperBound + lowerBound + 1) / 2;
   midIndex = Math.floor(midIndex);
   let midElement = sortedArray[midIndex];

   let newFrame: Frame;

   if (midElement == searchItem) {
      newFrame = {
         state: FOUND,
         lookupIndex: midIndex,
         steps: NoOfSteps
      }
      BINARY_SEARCH_ANIMATIONS.push(newFrame);
      // FOR DEBUGGING PURPOSES
      // alert(`found at index ${midIndex}`)
      return midIndex;
   }
   // if not the middle check the lower bound
   // if the searchItem is less than mid Element
   newFrame = {
      state: CHANGE_COLOR,
      lookupIndex: midIndex,
      steps: NoOfSteps
   }
   BINARY_SEARCH_ANIMATIONS.push(newFrame);
   newFrame = {
      state: REVERT_COLOR,
      lookupIndex: midIndex,
      steps: NoOfSteps
   }
   BINARY_SEARCH_ANIMATIONS.push(newFrame);

   if (searchItem < midElement) {
      return binSearch(
         sortedArray,
         searchItem,
         lowerBound,
         midIndex - 1,
         NoOfSteps
      )
   }
   // otherwise
   return binSearch(
      sortedArray,
      searchItem,
      midIndex + 1,
      upperBound,
      NoOfSteps
   )
}