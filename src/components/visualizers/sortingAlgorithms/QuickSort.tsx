import { changeColor, changeHeight } from './template.functions';

//  ======================================== DEPENDENT  VARIABLES <<<
let mainArray = [] as number[];
// this will be updated using the props
let ANIMATION_SPEED = 40;
// containers of Animation Sequence
let animations = [] as any;
let isDescending = false;

// ===================================================== PARTITION DESCENDING
function partition_descending(left: number, right: number, PIVOT: number) {    
    while (left <= right) {
        // here we will push the animation comparision
        // example: animation.comparision.push([left, right])
        // because we are comparing left and right
        while (mainArray[left] > PIVOT)
            left++;
        while (mainArray[right] < PIVOT)
            right--;    
        if (left <= right) {
            // here I'm swapping left and aright
            let temporary = mainArray[left];
            mainArray[left] = mainArray[right];
            mainArray[right] = temporary;
            left++;
            right--;
        }
    }
    return left;
}

// ===================================================== PARTITION ASCENDING
function partition_ascending(left: number, right: number, PIVOT: number) {    
    while (left <= right) {
        // here we will push the animation comparision
        // example: animation.comparision.push([left, right])
        // because we are comparing left and right
        while (mainArray[left] < PIVOT)
            left++;
        while (mainArray[right] > PIVOT)
            right--;    
        if (left <= right) {
            // here I'm swapping left and aright
            let temporary = mainArray[left];
            mainArray[left] = mainArray[right];
            mainArray[right] = temporary;
            left++;
            right--;
        }
    }
    return left;
}

// ===================================================== SORT
function sort(left: number, right: number) {
    if (left >= right)
        return;
    // here I choose the middle element as a PIVOT
    let midIndex = (left + right) / 2;
    // console.log(midIndex);
    // make sure to always floor the mid to avoid infinite loop
    midIndex = Math.floor(midIndex);
    let PIVOT = mainArray[midIndex];
    // here, partition should return the index of the pivot 
    // or the element that is already in correct position
    let DIVIDING_POINT: number;
    if(isDescending)
        DIVIDING_POINT = partition_descending(left, right, PIVOT);
    else
        DIVIDING_POINT = partition_ascending(left, right, PIVOT);
    sort(left, DIVIDING_POINT - 1);
    sort(DIVIDING_POINT, right);
}

// ================================================== ENTRY POINT
export default function QuickSort(
    numbers: number[],
    speed: number,
    descending: boolean)
{
    ANIMATION_SPEED = 200 - speed;
    isDescending = descending;  
    let arrayCopy = new Array(numbers.length);
    // copy first the array, do not use 
    // the passed array from the parameter, otherwise
    // the bars will automatically be sorted because 
    // React reacts to changes of the original array in the memory.
    for (let x = 0; x < numbers.length; x++)
        arrayCopy[x] = numbers[x];
    // always clear the animations 
    animations = [];
    // the copy to the global array
    mainArray = arrayCopy;
    
    // ACTUAL QUICK SORT CALL

    sort(0, mainArray.length - 1);
    console.log(mainArray)
}