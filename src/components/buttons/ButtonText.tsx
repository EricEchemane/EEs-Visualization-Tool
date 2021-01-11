export default function ButtonText(props: any)
{
    return (
        <button 
            title={props.title} 
            id={props.id}
            className={"btn text-btn"} 
            onClick={props.handleClick}
            style={{opacity: props.disabled ? '.4' : '1', 
                    pointerEvents: props.disabled ? 'none':'visible',
                    color: (props.active ? '#0AFFEF': 'white')}}
            >
                
                {props.label}
        </button>
    )
}