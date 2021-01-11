

export default function SideMenu(props: any) {

    function handleClick() {
        props.handleClick("-100%");
    }

    return (
        <div
            className="dimmer" id="dimmer" onClick={handleClick} >
            <div className="sideMenu small concave f-color1" id="side-menu" >
                
                
            </div>
        </div>
    )
}