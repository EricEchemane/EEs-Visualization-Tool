
const nodes = (document.getElementsByClassName('node') as HTMLCollectionOf<HTMLElement>);

function resetNodes () {
    for (let x = 0; x < (50 * 15); x++) {
        nodes[x].setAttribute('data-distance', '1000');
        nodes[x].setAttribute('data-parent', 'none');
    }
}
function setDistance (index: number, distance: number) {
    nodes[index].setAttribute('data-distance', distance.toString());
}
function getDistance (index: number): number {
    const distance = nodes[index].getAttribute('data-distance');
    if (distance) return parseInt(distance);
    return 1000;
}
function isObstacle (index: number) {
    return nodes[index].classList.contains('obstacle');
}
function isWeighted (index: number) {
    return nodes[index].classList.contains('weight');
}
function getNeighbors (index: number) {
    const up = index - 50;
    const down = index + 50;
    const right = index + 1;
    const left = index - 1;
    const neighbors = [] as any[];

    if (down < (50 * 14) && !isObstacle(down)) neighbors.push(nodes[down]);
    if (right < (50 * 14) && !isObstacle(right)) neighbors.push(nodes[right]);
    if (left >= 51 && !isObstacle(left)) neighbors.push(nodes[left]);
    if (up >= 51 && !isObstacle(up)) neighbors.push(nodes[up]);

    return neighbors;
}
function setParent (index: number, parent: string) {
    nodes[index].setAttribute('data-parent', parent);
}
function getParent (index: number) {
    let parentIndex;

    if (nodes[index]) {
        parentIndex = nodes[index].getAttribute('data-parent');
    }
    return parentIndex;
}

function backTrack (index: number) {
    let frames = [] as any[];
    let parentIndex = getParent(index);
    while (parentIndex !== 'none') {
        let x = 0;
        if (parentIndex)
            x = parseInt(parentIndex);
        frames.push(x);
        parentIndex = getParent(x);
    }
    return frames;
}

// ============================= ENTRY POINT ===============
export const dijkstra = (startIdx: number, goalIdx: number) => {
    resetNodes();
    setDistance(startIdx, 0);

    let visited: any = {};
    let queue = [nodes[startIdx]];
    let frames = [] as number[];

    while (queue.length > 0) {
        let curNode = queue.shift();
        if (curNode) {
            const curID = parseInt(curNode.id);

            let neighbors = getNeighbors(curID);

            for (let x = 0; x < neighbors.length; x++) {

                let curNode = neighbors[x];
                let curNodeID = parseInt(curNode.id);

                let curDistance = getDistance(curNodeID);
                let add = isWeighted(curNodeID) ? 2 : 1;
                let newDistance = getDistance(curID) + add;

                if (newDistance < curDistance) {
                    setDistance(curNodeID, newDistance);
                    setParent(curNodeID, curID.toString());
                }

                if (curNodeID === goalIdx) {
                    return [frames,
                        backTrack(curNodeID)];
                }
                if (visited[curNodeID]) continue;
                else {
                    queue.push(curNode);
                    visited[curNodeID] = true;
                    frames.push(curNodeID);
                }
            }
            visited[curID] = true;
        }
    }

    return [frames, []];
};
