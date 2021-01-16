export default function RoundButton(props: any)
{

    return (
        <button 
            title={props.title} 
            id={props.id}
            className={"circle flat btn-round bg-accent " + props.color} 
            onClick={props.handleClick}
            style={{opacity: props.disabled ? '.4' : '1', 
                    pointerEvents: props.disabled ? 'none':'visible'}}>

                <props.icon 
                    fontSize="large" 
                    className={"center-abs"} 
                    style={{backgroundColor: 'transparent', fontSize: '3rem', 
                            color: props.color === 'error' ? 'white': 'inherit'}} />
        </button>
    )
}