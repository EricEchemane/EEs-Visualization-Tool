import {Box} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

let optionsOpen = false;

export default function Select(props: any)
{   

    function selectAlgo() {
        const icon = document.getElementById('select-algo-icon');
        const options = document.getElementById('options');
        if(icon && options) {
            if (!optionsOpen) {
                icon.style.transform = "rotate(180deg)"
                options.style.opacity = '1';
            }
            else {
                icon.style.transform = "rotate(0deg)"
                options.style.opacity = '0';
            } 
            optionsOpen = !optionsOpen;
        }
    }

    return (
        <div className="select" >

            <div className="options" id="options">
                <div>Merge Sort</div>
                <div>Quick Sort</div>
                <div>Heap Sort</div>
                <div>Bubble Sort</div>
                <div>Insertion Sort</div>
                <div>Selection Sort</div>
            </div>
            
            <Box 
                display="flex" mt={1}
                style={{backgroundColor: 'transparent'}}
                onClick={selectAlgo} >

                <Box flex="1" pl={2} style={{backgroundColor: 'transparent'}}> 
                    <div id="select-value" style={{backgroundColor: 'transparent'}} >
                        {props.label}
                    </div> 
                </Box>

                <Box 
                    pl={1} pr={1} id="select-algo-icon" display="flex"
                    justifyContent="center" alignItems="center"
                    style={{
                        backgroundColor: 'transparent',
                        transform: 'rotate(180deg)'
                    }}  > 
                    <ExpandMoreIcon
                            style={{
                                cursor: 'pointer',
                                backgroundColor: 'transparent'
                            }} />
                </Box>
            </Box>
        </div>
    )
}