import DoneIcon from '@material-ui/icons/Done';

export default function CheckBox (props: any)
{
    return (
        <label 
            htmlFor={props.id} className="checkbox"
            style={{
                opacity: props.disabled ? '.4':'1',
                pointerEvents: props.disabled ? 'none':'visible'
            }} >
            <div className="checkbox-btn" >
                <input type="checkbox"
                    value={props.value}
                    id={props.id}
                    defaultChecked={props.checked} />
                <div className={"checkbox-mark " + (props.color?'accent':'error')}>
                    <DoneIcon style={{
                        backgroundBlendMode: 'difference',
                        background: 'none',
                        fontWeight: 'bolder',
                        textShadow: '1px 1px 4px black' }}
                        className="center-abs" />
                </div>
            </div>
            &nbsp;&nbsp;
            <div>
                {props.label}
            </div>
        </label>
    )
}