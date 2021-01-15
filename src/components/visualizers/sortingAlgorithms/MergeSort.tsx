import { changeColor, changeHeight, PURPLE, ACC } from './template.functions';
let arr = [] as number[];
// this will be updated using the props
let ANIMATION_SPEED = 40;
let descend = false;
// containers of Animation Sequence
let animations = [] as any;
// The function below is where the animation happens
// the sequence divided for every triplet
// the first of the triplet is when the values are being compared thus changing its color
// the second of the tripled is when the values compared and revert its original color
// you can better notice that in smaller array
// finally, the third of the triplet is where the changing the height of a bar

// ======================== ANIMATE =======================
function animate() {
   for (let x = 0; x < animations.length; x++) {
      // change the color if the current iteration is not the third of the triplet
      // example 1: if x = 0 then x % 3 = 0 and not 2 then change the color.
      // example 2: if x = 1 then x % 3 = 0 and not 2 then revert the original color.
      // example 3: if x = 2 then x % 3 = 2 then change the size;
      const isColorChange = x % 3 !== 2;
      if (isColorChange) {
         const color = x % 3 === 0 ? PURPLE : ACC;
         setTimeout(() => {
            changeColor(animations[x][0], color);
            changeColor(animations[x][1], color);

         }, x * ANIMATION_SPEED);
      }
      // else change the height
      else {
         setTimeout(() => {
            changeHeight(animations[x][0], animations[x][1]);
         }, (x) * (ANIMATION_SPEED));
      }
   }
}
// ======================== entry point =======================
export default function MergeSort(nums: number[], speed: number, descending: boolean, callback: Function, returnFrames?: boolean) {
   ANIMATION_SPEED = 200 - speed;
   descend = descending;
   animations = [];
   arr = Object.assign([], nums);
   // call the actual merge Sort to push all the animations
   divide(0, arr.length - 1);

   if (returnFrames) return animations;

   // actual animation
   animate();
   callback(animations.length)
}

// ====================== MERGE SORT DIVIDE ============================
function divide(left: number, right: number) {
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
function merge(left: number, mid: number, right: number) {
   const leftsize = mid - left + 1;
   const rightsize = right - mid;
   const leftsub = arr.slice(left, mid + 1);
   const rightsub = arr.slice(mid + 1);
   let i = 0;
   let j = 0;
   let k = left;
   while (i < leftsize && j < rightsize) {
      // push two animations for color changes
      animations.push([k, (left + leftsize) + j]);
      // push the second time to revert the color
      animations.push([k, (left + leftsize) + j]);
      if (descend) {
         if (leftsub[i] > rightsub[j]) {
            // push the Height changes
            animations.push([k, leftsub[i]]);
            arr[k] = leftsub[i];
            i++; k++;
         }
         else {
            // push the Height changes
            animations.push([k, rightsub[j]]);
            arr[k] = rightsub[j];
            j++; k++;
         }
         continue;
      }
      if (leftsub[i] < rightsub[j]) {
         // push the Height changes
         animations.push([k, leftsub[i]]);
         arr[k] = leftsub[i];
         i++; k++;
      }
      else {
         // push the Height changes
         animations.push([k, rightsub[j]]);
         arr[k] = rightsub[j];
         j++; k++;
      }
   }
   while (i < leftsize) {
      // here we should push a TRIPLET to maintain the ratio of the animatino sequence
      animations.push([left + i, left + i]);
      animations.push([left + i, left + i]);
      animations.push([k, leftsub[i]]);

      arr[k] = leftsub[i];
      i++;
      k++;
   }

   while (j < rightsize) {
      animations.push([right + j, right + j]);
      animations.push([right + j, right + j]);
      animations.push([k, rightsub[j]]);

      arr[k] = rightsub[j];
      j++;
      k++;
   }
}
