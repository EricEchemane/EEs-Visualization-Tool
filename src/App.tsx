import { useState } from 'react';
import { Box } from '@material-ui/core';
import AppBar from './components/AppBar';

import SortingVisualizer from './components/visualizers/SortingVisualizer';
import SearchingVisualizer from './components/visualizers/searching/SearchingVisualizer';

import './sass/main.css';

function App() {

   const [currentOpenTab, set_currentOpenTab] = useState(0);

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

            <SortingVisualizer />
         </Box>
         <Box
            hidden={currentOpenTab !== 1}
            mt={3}
            className="f-color1" >

            <SearchingVisualizer />
         </Box>
      </Box>
   );
}
export default App;