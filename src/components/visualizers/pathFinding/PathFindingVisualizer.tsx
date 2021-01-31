
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Box } from '@material-ui/core';

import { useState, useRef } from 'react';

export default function PathFindingVisualizer()
{
    const [algoOptionsDropdown, set_algoOptionsDropdown] = useState(false);
    const [activeAlgo, setActiveAlgo] = useState({id:-1,name:'Choose Algorithm'});

    const algortihms = useRef([
        {id: 0, name: 'Breadth First Search'},
        {id: 1, name: 'Depth First Search'},
        {id: 2, name: 'Dijkstra\'s'},
        {id: 3, name: 'A*'}
    ])

    // FUNCTIONS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    const ShowAlgoOptionsDropdown = () =>
    {
        set_algoOptionsDropdown((prev: boolean) => !prev);
    }

    const selectAlgo = (id: number) =>
    {
        setActiveAlgo(algortihms.current[id]);
        set_algoOptionsDropdown(false);
    }

    // OTHER VARIABLES @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    const algoOptions = algortihms.current.map((each: any) => 
        <div key={each.id} onClick={()=>{selectAlgo(each.id)}} > {each.name} </div>
    )

    // MARK UP @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    return (
        <Box
         p={4}
         className="flat"
         style={{
            width: '98vw', height: '80vh', position: 'relative',
            margin: 'auto', top: '1rem', overflow: 'hidden',
            borderRadius: '10px'
            }}>
            
            <div className={"pathfinding-algoOptions"}>
                <div className="pathfinding-algo-dropdown" onClick={ShowAlgoOptionsDropdown}>
                    <div> {activeAlgo.name} </div>
                    <ArrowDropDownIcon />
                </div>
                
                <Box hidden={!algoOptionsDropdown}>
                    <div className="pathAlgo-options">
                        {algoOptions}
                    </div>
                </Box>
            </div>

            
            <div className="search-field">
                Hello
            </div>
            
         </Box>
    )
}