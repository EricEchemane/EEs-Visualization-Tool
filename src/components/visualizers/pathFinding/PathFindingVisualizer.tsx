
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Box } from '@material-ui/core';

import { useState } from 'react';

export default function PathFindingVisualizer()
{
    const [algoOptionsDropdown, set_algoOptionsDropdown] = useState(false);

    const ShowAlgoOptionsDropdown = () =>
    {
        set_algoOptionsDropdown((prev: boolean) => !prev);
    }

    return (
        <Box
         p={4}
         className="flat"
         style={{
            width: '98vw', height: '80vh', position: 'relative',
            margin: 'auto', top: '1rem', overflow: 'hidden',
            borderRadius: '10px'
            }}>
            
            <div id="pathFinding-panel-container">
                <div>
                    <div className={"pathfinding-algoOptions"}>
                        <div className="pathfinding-algo-dropdown" onClick={ShowAlgoOptionsDropdown}>
                            <div>Choose Algortihm</div>
                            <ArrowDropDownIcon />
                        </div>
                        
                        <Box hidden={!algoOptionsDropdown}>
                            <div className="pathAlgo-options">
                                <div> Breadth First Search </div>
                                <div> Depth First Search </div>
                                <div> Dijkstra's </div>
                                <div> A* </div>
                            </div>
                        </Box>
                    </div>
                </div>
            </div>
         </Box>
    )
}