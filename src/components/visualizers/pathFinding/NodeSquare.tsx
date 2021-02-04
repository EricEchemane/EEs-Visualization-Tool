import { memo, useState, useContext, useEffect } from 'react';
import { mouseDownContext } from './PathFindingVisualizer';
let first = true;

function NodeSquare(props: any) {
    const mouseIsDown = useContext(mouseDownContext);
    const [start, set_start] = useState(props.isStart);
    const [finish, set_finish] = useState(props.isFinish);
    const [obstacle, set_obstacle] = useState(props.isObstacle);
    const classname = start ? 'node start' : (finish ? 'node finish' : (obstacle ? 'node obstacle' : 'node'));

    let box = (document.getElementsByClassName('node') as HTMLCollectionOf<HTMLElement>);

    useEffect(() => {
        box = (document.getElementsByClassName('node') as HTMLCollectionOf<HTMLElement>);
        props.clearPath();
        props.onMouseEnter(mouseIsDown.s, props.id, true);
    }, [finish])
    useEffect(() => {
        box = (document.getElementsByClassName('node') as HTMLCollectionOf<HTMLElement>);
        props.clearPath();
        props.onMouseEnter(props.id, mouseIsDown.f, true);
    }, [start])
    useEffect(() => {
        if (first) {
            first = false;
        } else {
            props.clearPath();
            props.onMouseEnter(mouseIsDown.s, mouseIsDown.f, true);
        }
    }, [obstacle]);

    // @@@@@@@@@@@@@@@@ functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2
    function handleMouseDown(e: any) {
        if (start || finish) return;
        e.preventDefault();
        props.onMouseDown(true);
        set_obstacle((prev: any) => {
            return !prev;
        });

    }
    function handleMouseEnter() {
        if (start || finish) return;
        if (mouseIsDown.MouseDown) {
            if (!obstacle) {
                set_obstacle(true);
            } else {
                set_obstacle(false);
            }
        }
    }
    function handleMouseUp() {
        props.onMouseDown(false);
    }
    function handleDragStart(e: any) {
        box[props.id].setAttribute('draggable', 'false');
        box[props.id].addEventListener('ondrop', () => {
            set_start(false);
            set_finish(false);
        })
        props.changePrev(props.id);
    }
    function handleOnDrop(e: any) {
        e.preventDefault();
        if (box[mouseIsDown.prev].classList[1] === 'start') {
            box[props.id].classList.add('start');
            box[mouseIsDown.prev].classList.remove('start');
            props.changeStart(props.id);
            set_start(true);
        }
        else if (box[mouseIsDown.prev].classList[1] === 'finish') {
            box[props.id].classList.add('finish');
            box[mouseIsDown.prev].classList.remove('finish');
            props.changeFinish(props.id);
            set_finish(true);
        }
        box[props.id].setAttribute('draggable', 'true');

    }
    function handleDragOver(e: any) {
        e.preventDefault();
    }
    // @@@@@@@@@@@@@@@@@@@@ mark up @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    return (
        <div
            onDragOver={handleDragOver}
            onDrop={handleOnDrop}
            onDragStart={handleDragStart}
            onMouseEnter={handleMouseEnter}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            draggable={start || finish}
            className={classname}>
        </div>
    )
}
export default memo(NodeSquare);