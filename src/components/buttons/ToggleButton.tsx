import {useState} from 'react';

export default function ToggleButton(props: any)
{
    const [on, set_on] = useState(props.toggleOn);

    function handleClick(event: any) {
        set_on(!on);
        props.handleClick();
    }

    let classN;
    if(!on) classN = "oval thin-inset toggle-btn ";
    else classN = "oval thin-inset toggle-btn-on " + props.color;

    return(
        <div
            title={props.title}
            className={classN}
            id={props.id}
            onClick={(e) => handleClick(e)}
            style={{width: '50px', height: '16px',
                    opacity: props.disabled ? '.4' : '1',
                    pointerEvents: props.disabled ? 'none':'visible'}}
            >   
        </div>
    )
}