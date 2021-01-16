// `
// ANIMATION STRATEGY: 
//     Each iteraton in animations array is also an array
//     that has 3 elements. 
// Examples:
//      [CHANGE, index, pivot],
//      [REVERT, index, pivot],
//      [SWAP_CHANGE, index1, index2],
//      [SWAP_REVERT, index1, index2]
// Basically, this means that if we found a CHANGE,
// we will change the color of the bars[index],
// if we found a REVERT then change its color back to normal,
// if SWAP_CHANGE, change their colors and swap. 
// That means that the height of bars[inde1] will be the 
// height of bars[index2] and vice versa.
// Finally, if we found SWAP_REVERT we will just simply 
// change the color back to normal
// `

import {
    changeColor,
    changeHeight,
    PURPLE,
    RED,
    GREEN,
    ACC
} from './template.functions';

//  ======================================== DEPENDENT  VARIABLES <<<
let mainArray = [] as number[];
// this will be updated using the props
let ANIMATION_SPEED = 40;
// containers of Animation Sequence
let animations = [] as any;
let isDescending = false;

// ========================================= INDEPENDENT VARIABLES
// this will be use for identifyig 
// animation sequences
const CHANGE = "change";
const REVERT = "revert";
const SWAP_CHANGE = "swap_change";
const SWAP_REVERT = "swap_revert";

// ==================================================== ANIMATION animate()
function animate() {
    for (let x = 0; x < animations.length; x++) {
        const STATE = animations[x][0];
        const VALUE_1 = animations[x][1];
        const VALUE_2 = animations[x][2];
        if (STATE === CHANGE) {
            setTimeout(() => {
                changeColor(VALUE_1, PURPLE);
                changeColor(VALUE_2, RED);
            }, x * ANIMATION_SPEED);
        }
        else if (STATE === REVERT) {
            setTimeout(() => {
                changeColor(VALUE_1, ACC);
                changeColor(VALUE_2, ACC);
            }, x * ANIMATION_SPEED);
        }
        else if (STATE === SWAP_CHANGE) {
            setTimeout(() => {
                changeColor(VALUE_1, GREEN);
                changeColor(VALUE_2, GREEN);
                changeHeight(VALUE_1, mainArray[VALUE_1]);
                changeHeight(VALUE_2, mainArray[VALUE_2]);
            }, x * ANIMATION_SPEED);
        }
        else {
            setTimeout(() => {
                changeColor(VALUE_1, ACC);
                changeColor(VALUE_2, ACC);
            }, x * ANIMATION_SPEED);
        }
    }
}

// ===================================================== PARTITION DESCENDING
function partition_descending(left: number, right: number, PIVOT: number) {    
    while (left <= right) {
        // here we will push the animation comparision
        // example: animation.comparision.push([left, right])
        // because we are comparing left and right
        while (mainArray[left] > PIVOT){
            animations.push([
                CHANGE,
                left,
                PIVOT
            ])
            animations.push([
                REVERT,
                left,
                PIVOT
            ])
            left++;
        }
        while (mainArray[right] < PIVOT){
            animations.push([
                CHANGE,
                right,
                PIVOT
            ])
            animations.push([
                REVERT,
                right,
                PIVOT
            ])
            right--; 
        }
        if (left <= right) {
            animations.push([
                SWAP_CHANGE,
                left,
                right
            ])
            animations.push([
                SWAP_REVERT,
                left,
                right
            ])
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
        // example: animations.comparision.push([left, right])
        // because we are comparing left and right
        while (mainArray[left] < PIVOT) {
            animations.push([
                CHANGE,
                left,
                PIVOT
            ])
            animations.push([
                REVERT,
                left,
                PIVOT
            ])
            left++;
        }
            
        while (mainArray[right] > PIVOT) {
            animations.push([
                CHANGE,
                right,
                PIVOT
            ])
            animations.push([
                REVERT,
                right,
                PIVOT
            ])
            right--; 
        }
               
        if (left <= right) {
            animations.push([
                SWAP_CHANGE,
                left,
                right
            ])
            animations.push([
                SWAP_REVERT,
                left,
                right
            ])
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
    descending: boolean,
    callback: Function,
    returnFrames?: boolean)
{
    ANIMATION_SPEED = 200 - speed;
    isDescending = descending;  
    mainArray = Object.assign([], numbers);
    // always clear the animations 
    animations = [];
    // ACTUAL QUICK SORT CALL

    sort(0, mainArray.length - 1);
    if (returnFrames) return animations;
    animate();
    callback(animations.length);
}