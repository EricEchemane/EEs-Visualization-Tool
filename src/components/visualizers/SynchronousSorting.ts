import QuickSort from './sortingAlgorithms/QuickSort';
import HeapSort from './sortingAlgorithms/HeapSort';
import ShellSort from './sortingAlgorithms/ShellSort';
import InsertionSort from './sortingAlgorithms/InsertionSort';
import SelectionSort from './sortingAlgorithms/SelectionSort';
import {BubbleSort} from './sortingAlgorithms/SelectionSort';
// this will be use for identifyig 
// animation sequences
const CHANGE = "change";
const REVERT = "revert";
const SWAP_CHANGE = "swap_change";
const SWAP_REVERT = "swap_revert";

// this will contain an array that will hold the animation frames
let animationsAll = [] as any;

let arr = [] as any;
let animations = [] as any;
let nums = [] as any;

export default function getAnimations(
    algoIdx: number,
    array: number[])
{
    nums = array;
    // generate all algorithms sequences
    generateAll();

    return animationsAll[algoIdx];
}
// -----> SORT ALGORITHMS 

function generateAll() {
    animationsAll.push(MergeSort())
    animationsAll.push(QuickSort(nums,150,false,()=>{},true))
    animationsAll.push(HeapSort(nums,150,false,()=>{},true))
    animationsAll.push(ShellSort(nums,150,false,()=>{},true))
    animationsAll.push(InsertionSort(nums,150,false,()=>{},true))
    animationsAll.push(SelectionSort(nums,150,false,()=>{},true))
    animationsAll.push(BubbleSort(nums,150,false,()=>{},true))
}

function MergeSort() {
    animations = [];
    arr = new Array(nums.length)
    arr = Object.assign([], nums)
    divide(0, arr.length - 1);
    return animations;
}


// ====================== MERGE SORT DIVIDE ============================
function divide(left: number, right: number)
{
    if (left >= right)
        return;
    const mid = Math.floor((right + left) / 2)
    // left half
    divide(left, mid)
    // right helf
    divide(mid + 1, right)
    // merge left and right
    merge(left, mid, right);
}
// ====================== MERGE SORT COMBINE ============================
function merge(left: number, mid: number, right: number)
{
    const leftsize = mid - left + 1;
    const rightsize = right - mid;
    const leftsub = arr.slice(left, mid + 1);
    const rightsub = arr.slice(mid + 1);
    let i = 0;
    let j = 0;
    let k = left;
    while (i < leftsize && j < rightsize)
    {   
        // push two animations for color changes
        animations.push([CHANGE, i + left, j + right]);
        animations.push([REVERT, i + left, j + right]);

        if (leftsub[i] < rightsub[j])
        {
            // push the Height changes
            animations.push(["change_height",k,leftsub[i]])
            arr[k] = leftsub[i];
            i++; k++;
        }
        else
        {   
            // push the Height changes
            animations.push(["change_height",k,rightsub[j]])
            arr[k] = rightsub[j];
            j++; k++;
        }
    }
    while (i < leftsize)
    {
        // here we should push a TRIPLET to maintain the ratio of the animatino sequence
        animations.push(["change_height",k,leftsub[i]])
        arr[k] = leftsub[i];
        i++;
        k++;
    }

    while (j < rightsize)
    {
        animations.push(["change_height",k,rightsub[j]])
        arr[k] = rightsub[j];
        j++;
        k++;
    }
}
