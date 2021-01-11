
export default function Radio(props: any)
{
    return (
        <label 
            htmlFor={props.id} 
            className="radio-input"
            style={{
                opacity: props.disabled ? '.4':'1',
                pointerEvents: props.disabled ? 'none':'visible'
            }} >

            <div className={"radio-btn"} >
                <input 
                    type="radio"
                    value={props.value}
                    id={props.id}
                    name={props.name}
                    defaultChecked={props.checked}
                     />
                <div className={"checkmark " + (props.color == 'error' ? 'error':'accent')}  ></div>
            </div>
            &nbsp;&nbsp;
            <span> {props.label} </span>
        </label>
    )
}