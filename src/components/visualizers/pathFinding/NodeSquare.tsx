import { memo, useState, useContext, useEffect, useRef } from 'react';
import { mouseDownContext } from './PathFindingVisualizer';

function NodeSquare(props: any) {
    const mouseIsDown = useContext(mouseDownContext);
    const [start, set_start] = useState(props.isStart);
    const [finish, set_finish] = useState(props.isFinish);
    const classname = start ? 'node start' : (finish ? 'node finish' : 'node');

    let box = (document.getElementsByClassName('node') as HTMLCollectionOf<HTMLElement>);

    useEffect(() => {
        box = (document.getElementsByClassName('node') as HTMLCollectionOf<HTMLElement>);
        props.clearPath();
        props.onMouseEnter(mouseIsDown.s, props.id, true);
    }, [finish]);

    useEffect(() => {
        box = (document.getElementsByClassName('node') as HTMLCollectionOf<HTMLElement>);
        props.clearPath();
        props.onMouseEnter(props.id, mouseIsDown.f, true);
    }, [start]);

    // @@@@@@@@@@@@@@@@ functions @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2
    function handleMouseDown(e: any) {
        if (start || finish) return;
        e.preventDefault();
        box = (document.getElementsByClassName('node') as HTMLCollectionOf<HTMLElement>);
        let obs = box[props.id].classList.contains('obstacle');
        if (e.ctrlKey) {
            const weighted = box[props.id].classList.contains('weight');
            if (weighted) box[props.id].classList.remove('weight');
            else box[props.id].classList.add('weight');
        }
        else {
            if (obs) box[props.id].classList.remove('obstacle');
            else box[props.id].classList.add('obstacle');
        }

        props.clearPath();
        props.onMouseEnter(mouseIsDown.s, mouseIsDown.f, true);
        props.onMouseDown(true);
    }

    function handleMouseEnter(e: any) {
        e.preventDefault();
        if (start || finish) return;
        if (mouseIsDown.MouseDown) {
            box = (document.getElementsByClassName('node') as HTMLCollectionOf<HTMLElement>);
            let obs = box[props.id].classList.contains('obstacle');
            if (e.ctrlKey) {
                const weighted = box[props.id].classList.contains('weight');
                if (weighted) box[props.id].classList.remove('weight');
                else box[props.id].classList.add('weight');
            }
            else {
                if (obs) box[props.id].classList.remove('obstacle');
                else box[props.id].classList.add('obstacle');
            }
            props.clearPath();
            props.onMouseEnter(mouseIsDown.s, mouseIsDown.f, true);
        }
    }
    function handleMouseUp() {
        props.onMouseDown(false);
        if(mouseIsDown.prev === props.id) {
            console.log(box[props.id]);
            console.log(box[props.id + 1]);
        }
    }
    function handleDragStart(e: any) {
        box[props.id].setAttribute('draggable', 'false');
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
            className={classname}
            id={props.id}>
        </div>
    )
}
export default memo(NodeSquare);