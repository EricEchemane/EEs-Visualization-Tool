import {dijkstra} from './dijkstra';

const min = 0;
const max = (50 * 15) - 1;
const BFS = 0;
const DFS = 1;
const DIJKSTRA = 2;

let animationFrames = [] as any;

export class node {
    data: number;
    parent?: node;
    constructor(value: number) {
        this.data = value;
        this.parent = undefined;
    }
}
export default function Algorithms(start: number, end: number, animationId: number) {

    animationFrames = [];
    let pathAnimation = [] as any;
    let pathStart;
    if (animationId === BFS) pathStart = bfs(start, end);
    else if (animationId === DFS) pathStart = bfs(start, end, true);
    else if (animationId === DIJKSTRA) {
        let frames = dijkstra(start, end);
        return frames;
    }

    pathStart = pathStart?.parent;

    while (pathStart != undefined) {
        pathAnimation.push(pathStart.data);
        pathStart = pathStart.parent;
    }
    return [animationFrames, pathAnimation];
}


export function bfs(start: number, end: number, depth?: boolean) {
    let boxes = (document.getElementsByClassName('node') as HTMLCollectionOf<HTMLElement>);
    let visited = new Set<number>();
    visited.add(start);
    let startNode = new node(start);
    let queue = [] as node[];
    queue.push(startNode);

    while (queue.length > 0) {
        let front;
        if (depth) front = queue.pop();
        else front = queue.shift();
        if (front?.data === end) {
            return front;
        }
        else if (front) {
            const data = front.data;
            const right = data + 1;
            const down = data + 50;
            const up = data - 50;
            const left = data - 1;
            if (left >= min && !visited.has(left) && !boxes[left].classList.contains('obstacle')) {
                visited.add(left);
                let newNode = new node(left);
                newNode.parent = front;
                queue.push(newNode);
                animationFrames.push(left);
            }
            if (right < max && !visited.has(right) && !boxes[right].classList.contains('obstacle')) {
                visited.add(right);
                let newNode = new node(right);
                newNode.parent = front;
                queue.push(newNode);
                animationFrames.push(right);
            }
            if (down < max && !visited.has(down) && !boxes[down].classList.contains('obstacle')) {
                visited.add(down);
                let newNode = new node(down);
                newNode.parent = front;
                queue.push(newNode);
                animationFrames.push(down);
            }
            if (up >= min && !visited.has(up) && !boxes[up].classList.contains('obstacle')) {
                visited.add(up);
                let newNode = new node(up);
                newNode.parent = front;
                queue.push(newNode);
                animationFrames.push(up);
            }
        }
    }
}