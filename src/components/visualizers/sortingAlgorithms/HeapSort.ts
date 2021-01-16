import {
    changeColor,
    changeHeight,
    ACC, RED, PURPLE, GREEN
}
    from './template.functions'

// ======================================= dependent Variables
let mainArray = [] as number[];
// this will be updated using the props
let ANIMATION_SPEED = 40;
// containers of Animation Sequence
let animations = [] as any;
let isDescending = false;

// ======================================= constants Variables
// this will be use for identifyig 
// animation sequences
const CHANGE = "change";
const REVERT = "revert";
const SWAP_CHANGE = "swap_change";
const SWAP_REVERT = "swap_revert";

// ======================================= ENTRY POINT
export default function HeapSort(
    numbers: number[],
    animation_speed: number,
    descending: boolean,
    callback: Function,
    returnFrames?: boolean
)
{
    ANIMATION_SPEED = 200 - animation_speed;
    isDescending = descending;
    mainArray = Object.assign([], numbers);
    animations = [];
    // actual call of heapsort algorithm
    sort();
    if (returnFrames) return animations;
    // animate
    animate();
    callback(animations.length)
}

// ======================================== animation 
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


// ======================================== Sort
function sort() {
    let halfSize = mainArray.length / 2;
    halfSize = Math.floor(halfSize);
    
    for (let x = halfSize; x >= 0; x--) {
        heapify(mainArray.length, x);
    }
    for (let x = mainArray.length - 1; x > 0; x--)
    {
        animations.push([SWAP_CHANGE, x, 0])
        animations.push([SWAP_REVERT, x, 0])
        const temp = mainArray[0];
        mainArray[0] = mainArray[x]
        mainArray[x] = temp;
        heapify(x, 0);
    }
}

function heapify(size: number, root: number) {
    if (root >= size)
        return;

    let left = (2 * root) + 1;
    let right = (2 * root) + 2;

    if (left < size) {
        // comparision
        animations.push([CHANGE, left, root])
        animations.push([REVERT, left, root])

        if (!isDescending) {
            if (mainArray[left] > mainArray[root]) {    

                animations.push([SWAP_CHANGE, left, root])
                animations.push([SWAP_REVERT, left, root])

                const temp = mainArray[left];
                mainArray[left] = mainArray[root];
                mainArray[root] = temp;
            }    
        }
        else {
            if (mainArray[left] < mainArray[root]) {

                animations.push([SWAP_CHANGE, left, root])
                animations.push([SWAP_REVERT, left, root])
               
                const temp = mainArray[left];
                mainArray[left] = mainArray[root];
                mainArray[root] = temp;
            }
        }
            
    }
    if (right < size) {
        // comparision
        animations.push([CHANGE, right, root])
        animations.push([REVERT, right, root])
        if (!isDescending) {
          
            if (mainArray[right] > mainArray[root]) {

                animations.push([SWAP_CHANGE, right, root])
                animations.push([SWAP_REVERT, right, root])
               
                const temp = mainArray[right];
                mainArray[right] = mainArray[root];
                mainArray[root] = temp;
            }
        }
        else {
            if (mainArray[right] < mainArray[root]) {

                animations.push([SWAP_CHANGE, right, root])
                animations.push([SWAP_REVERT, right, root])
                
                const temp = mainArray[right];
                mainArray[right] = mainArray[root];
                mainArray[root] = temp;
            }
        }
    }
    heapify(size, left);
    heapify(size, right);
}