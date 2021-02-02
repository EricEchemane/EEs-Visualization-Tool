
const min = 0;
const max = (90 * 30) - 1;
export class node {
    data: number;
    parent?: node;
    constructor(value: number) {
        this.data = value;
        this.parent = undefined;
    }
}
export default function Algorithms(props: any){

}

export function bfs(start: number, end: number) {
    let boxes = (document.getElementsByClassName('node') as HTMLCollectionOf<HTMLElement>);
    let visited = new Set<number>();
    visited.add(start);
    let startNode = new node(start);
    let queue = [] as node[];
    queue.push(startNode);

    while(queue.length > 0) {
        let front = queue.shift();
        if(front?.data === end) {
            return front;
        }
        else if(front) {
            const data = front.data;
            const right = data + 1;
            const down = data + 90;
            const up = data - 90;
            const left = data - 1;
            if(right < max && !visited.has(right) && !boxes[right].classList.contains('obstacle')) {
                visited.add(right);
                let newNode = new node(right);
                newNode.parent = front;
                queue.push(newNode);
            }
            if(down < max && !visited.has(down) && !boxes[down].classList.contains('obstacle')) {
                visited.add(down);
                let newNode = new node(down);
                newNode.parent = front;
                queue.push(newNode);
            }
            if(up >= min && !visited.has(up) && !boxes[up].classList.contains('obstacle')) {
                visited.add(up);
                let newNode = new node(up);
                newNode.parent = front;
                queue.push(newNode);
            }
            if(left >= min && !visited.has(left) && !boxes[left].classList.contains('obstacle')) {
                visited.add(left);
                let newNode = new node(left);
                newNode.parent = front;
                queue.push(newNode);
            }

        }
    }
}