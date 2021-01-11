import {useState} from 'react';

export default function IconButton(props: any)
{
    const [disabled, set_disabled] = useState(props.disable);

    return (
        <button 
            title={props.title} 
            className={"rec flat " + props.color } 
            onClick={props.handleClick}
            id={props.id}
            style={{opacity: disabled ? '.4' : '1', 
                    pointerEvents: disabled ? 'none':'visible'}}>

                <props.icon 
                    fontSize="large" 
                    className="center-abs"
                    style={{fontSize: '2.7rem'}}
                    />
        </button>
    )
}