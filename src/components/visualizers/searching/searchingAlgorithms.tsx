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

export default function getAnimations(array: number[], searchItem: number) 
{
    // call this first...
    resetAnimations();
    fill_LinearAnimationFrames(array, searchItem);
    console.log(LINEAR_SEARCH_ANIMATIONS)

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
    for(let x = 0; x < array.length; x++) {
        let newFrame: Frame;
        if(array[x] == searchItem) {
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
function fill_BinaryAnimationFrames(array: number, searchItem: number) {
    
}