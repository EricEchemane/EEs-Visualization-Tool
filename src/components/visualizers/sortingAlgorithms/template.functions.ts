let first = true;
export const GREEN = "yellowgreen";
export const PURPLE = "purple";
export const RED = "#dd6f74";
export const ACC = "#0AFFEF";
export const GREY = "rgba(255,255,255,.4)";
// actual array bars on the screen
let bars = (document.getElementsByClassName('bars') as HTMLCollectionOf<HTMLElement>)

export function changeColor(index: number, COLOR: string)
{    
    if (first) {
        first = false
        bars = (document.getElementsByClassName('bars') as HTMLCollectionOf<HTMLElement>)
    }
    if (bars[index]) {
        bars[index].style.transition = '0ms';
        bars[index].style.backgroundColor = COLOR;
    } 
}

export function changeHeight(index: number, HEIGHT: number)
{
    if (first) {
        first = false
        bars = (document.getElementsByClassName('bars') as HTMLCollectionOf<HTMLElement>)
    }
    if (bars[index]) bars[index].style.height = HEIGHT+"px";
}