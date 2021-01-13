import {
    changeColor,
    changeHeight,
    ACC, RED, PURPLE, GREEN
}
    from './template.functions'

// ======================================= dependent Variables
let ANIMATION_SPEED = 40;
let mainArray = [] as any;
// containers of Animation Sequence
let animations = [] as any;

// ======================================= constants 
// this will be use for identifyig 
// animation sequences
const CHANGE = "change";
const REVERT = "revert";
const SWAP_CHANGE = "swap_change";
const SWAP_REVERT = "swap_revert";

// =========================================== ANIMATE

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


// =========================================== ENTRY POINT
export default function SelectionSort(
    nums: number[],
    speed: number,
    descending: boolean,
    callback: Function,
    returnFrames?: boolean)
{
    mainArray = new Array(nums.length)
    mainArray = Object.assign([], nums)

    ANIMATION_SPEED = 200 - speed;
    animations = [];

    // act ual algo
    let size = mainArray.length
    var i: number, j: number, min_idx: number;

    for (i = 0; i < size - 1; i++)
    {
        min_idx = i;

        for (j = i + 1; j < size; j++) {
            
            animations.push([CHANGE, j, min_idx])
            animations.push([REVERT, j, min_idx])
            if (descending) {
                if (mainArray[j] > mainArray[min_idx]) min_idx = j;
            }
            else {
                if (mainArray[j] < mainArray[min_idx]) min_idx = j;
            }
        }
        animations.push([SWAP_CHANGE, i, min_idx])
        animations.push([SWAP_REVERT, i, min_idx])

        const temp = mainArray[min_idx]
        mainArray[min_idx] = mainArray[i]
        mainArray[i] = temp;
    }
    // animations start
    if (returnFrames) return animations;
    animate();
    callback(animations.length)    
}

export function BubbleSort(
    nums: number[],
    speed: number,
    descending: boolean,
    callback: Function,
    returnFrames?: boolean)
{
    mainArray = new Array(nums.length)
    mainArray = Object.assign([], nums)

    ANIMATION_SPEED = 200 - speed;
    animations = [];

    // act ual algo
    let size = mainArray.length

    for (let i = 0; i < size - 1; i++)
    {
        for (let j = i + 1; j < size; j++) {

            animations.push([CHANGE, i, j])
            animations.push([REVERT, i, j])

            if (!descending) {
                if (mainArray[i] > mainArray[j]) {
                    animations.push([SWAP_CHANGE, i, j])        
                    animations.push([SWAP_REVERT, i, j])  
                    const temp = mainArray[i]      
                    mainArray[i] = mainArray[j]
                    mainArray[j] = temp;
                }
            }
            else {
                if (mainArray[i] < mainArray[j]) {
                    animations.push([SWAP_CHANGE, i, j])        
                    animations.push([SWAP_REVERT, i, j])   
                    const temp = mainArray[i]     
                    mainArray[i] = mainArray[j]
                    mainArray[j] = temp;
                }
            }
        }
    }
    // animations start
    if (returnFrames) return animations;
    animate();
    callback(animations.length)    
}