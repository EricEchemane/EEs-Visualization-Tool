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
export default function ShellSort(
    nums: number[],
    speed: number,
    descending: boolean,
    callback: Function,
    returnFrames?: boolean )
{
    mainArray = new Array(nums.length)
    mainArray = Object.assign([], nums )

    ANIMATION_SPEED = 200 - speed;
    animations = [];

    // actual algo
    let gap = Math.floor(mainArray.length / 2);
    while ( gap >= 1) {
        for (let j = gap; j < mainArray.length; j++) {
            for (let i = j - gap; i >= 0; i -= gap) {

                animations.push([CHANGE, i+gap, i])
                animations.push([REVERT, i+gap, i])

                if (!descending) {
                    if (mainArray[i + gap] > mainArray[i]) break;    
                }else
                    if (mainArray[i + gap] < mainArray[i]) break;    
                
                animations.push([SWAP_CHANGE, i+gap, i])
                animations.push([SWAP_REVERT, i+gap, i])

                const temp = mainArray[i + gap]
                mainArray[i + gap] = mainArray[i]
                mainArray[i] = temp;
            }
        }
        gap = Math.floor(gap / 2)
    }

    if (returnFrames) return animations;
    animate();
    callback(animations.length);
}