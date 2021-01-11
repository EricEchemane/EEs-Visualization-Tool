
export default function ButtonAccent(props: any)
{
    return (
        <button 
            title={props.title} 
            id={props.id}
            className={"oval flat btn " + props.type} 
            onClick={props.handleClick}
            style={{opacity: props.disabled ? '.4' : '1', 
                    pointerEvents: props.disabled ? 'none':'visible',
                    padding: '0 2rem',
                    borderRadius: '30px',
                color: props.type === "error" ? 'white' : '$b-prime',
                fontSize: '1.2rem'
            }}>

                {props.label}
        </button>
    )
}