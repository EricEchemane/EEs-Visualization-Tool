export default function Button(props: any)
{

    return (
        <button 
            title={props.title} 
            id={props.id}
            className={"oval flat btn b-accent "} 
            onClick={props.handleClick}
            style={{opacity: props.disabled ? '.4' : '1', 
                    pointerEvents: props.disabled ? 'none' : 'visible',
                    padding: '.2rem 1.7rem'}}
            >
                {props.label}
        </button>
    )
}