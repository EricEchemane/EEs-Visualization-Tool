export default function Slider(props: any)
{   
    function handleInput(e: any) {
        const value = e.target.value;
        let prog = document.getElementById(props.id);        
        if(prog) {
            prog.style.width = (value/2) + "px";
        }
        props.onInput(value);
    }

    return(
        <div 
            className="d-inline relative slider"
            style={{
                opacity: props.disabled ? '.4' : '1',
                pointerEvents: props.disabled ? 'none' : 'visible',
                overflow: 'hidden',
                padding: '.5rem'
            }}
            >
                <input 
                    onInput={(e) => handleInput(e)}
                    className={"slider-" + props.color} 
                    type="range" 
                    min={props.min}
                    max={props.max} 
                    value={props.value}
                    title={props.title}
                    step='1'
                    style={{width: (props.max/2) + "px"}}
                    />
                <div className={"slider-progress-" + props.color} id={props.id}></div>
        </div>  
    )
}