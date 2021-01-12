
export default function IconButton(props: any)
{

    return (
        <button 
            title={props.title} 
            className={"rec flat " + props.color } 
            onClick={props.handleClick}
            id={props.id}
            style={{opacity: props.disabled ? '.4' : '1', 
                    pointerEvents: props.disabled ? 'none':'visible'}}>

                <props.icon 
                    fontSize="large" 
                    className="center-abs"
                    style={{fontSize: '2.7rem'}}
                    />
        </button>
    )
}