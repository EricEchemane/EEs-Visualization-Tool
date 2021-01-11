import {useState} from 'react';
import {Box} from '@material-ui/core/';

export default function ButtonWithIcon(props: any)
{
    const [disabled, set_disabled] = useState(props.disable);

    return (
        <button 
            title={props.title} 
            className={"oval flat btn"} 
            onClick={props.handleClick}
            id={props.id}
            style={{opacity: disabled ? '.4' : '1', 
                    pointerEvents: disabled ? 'none':'visible',
                    padding: '.5rem 1.5rem'}}
            >
                <Box display="flex">
                    {props.label}
                    &nbsp;&nbsp;&nbsp;
                    <props.icon />
                </Box>
        </button>
    )
}