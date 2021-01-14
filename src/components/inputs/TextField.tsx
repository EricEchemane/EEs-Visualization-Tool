
export default function TextInput (props: any)
{

    return (
        <input 
            type={props.type}
            className={"thin-inset textInput"}
            placeholder={props.placeHolder}
            autoFocus={props.autofocus}
            onInput={(event: any) => {
                const value = event.target.value;
                props.handleInput(value)
            }}
            id={props.id}
            style={{color: props.error ? '#FF555D' : 'white',
                    width: props.fullWidth ? '100%': 'auto'}}
            />
    )
}