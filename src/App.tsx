import {useState} from 'react';
import { Box } from '@material-ui/core';
import AppBar from './components/AppBar';

import SortingVisualizer from './components/visualizers/SortingVisualizer';
import CompareSortingAlgo from './components/visualizers/CompareSortingAlgorithms';

import './sass/main.css';

function App() {

    const [currentOpenTab,set_currentOpenTab] = useState(0);
    const [comparisonApp, hide_comparisonApp] = useState(true);

    function changeTab(n: number) {
        set_currentOpenTab(n);
    }

    return (
        <Box>
            <AppBar handleChangeTab={changeTab} />

           <Box
                hidden={currentOpenTab !== 0}
                mt={3}
                className="f-color1" >

                    <SortingVisualizer showComparisonApp={()=>{hide_comparisonApp(false)}} />
            </Box>
           <Box
                hidden={currentOpenTab !== 1}
                mt={3}
                className="f-color1" >

                    Searhcing
            </Box>
           <Box
                hidden={currentOpenTab !== 2}
                mt={3}
                className="f-color1" >

                Path Finder
            </Box>
            
            <Box hidden={comparisonApp} >
                <CompareSortingAlgo />s
            </Box>
        </Box>
    );  
}
export default App;