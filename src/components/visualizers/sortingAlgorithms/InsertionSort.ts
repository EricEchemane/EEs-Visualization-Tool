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
export default function InsertionSort(
    nums: number[],
    speed: number,
    descending: boolean,
    callback: Function,
    returnFrames?: boolean) 
{
    mainArray = new Array(nums.length)
    mainArray = Object.assign([], nums )

    ANIMATION_SPEED = 200 - speed;
    animations = [];

    // actual algo
    let size = mainArray.length;
    for (let x = 1; x < size; x++)
    {
        animations.push([CHANGE, x, x-1])
        animations.push([REVERT, x, x-1])

        if (!descending) {
            if (mainArray[x - 1] > mainArray[x])
            {
                for (let y = x; y > 0; y--)
                {
                    animations.push([CHANGE, y, y-1])
                    animations.push([REVERT, y, y-1])

                    if (mainArray[y] < mainArray[y - 1]) {

                        animations.push([SWAP_CHANGE, y, y-1])
                        animations.push([SWAP_REVERT, y, y-1])

                        const temp = mainArray[y];
                        mainArray[y] = mainArray[y - 1]
                        mainArray[y - 1] = temp
                    }
                }
            }            
        }
        else {
            if (mainArray[x - 1] < mainArray[x])
            {
                for (let y = x; y > 0; y--)
                {
                    animations.push([CHANGE, y, y-1])
                    animations.push([REVERT, y, y-1])

                    if (mainArray[y] > mainArray[y - 1]) {

                        animations.push([SWAP_CHANGE, y, y-1])
                        animations.push([SWAP_REVERT, y, y-1])

                        const temp = mainArray[y];
                        mainArray[y] = mainArray[y - 1]
                        mainArray[y - 1] = temp
                    }
                }
            }
        }
    }

    if (returnFrames) return animations;
    animate();
    callback(animations.length)
}
    