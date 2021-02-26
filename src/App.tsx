import {useState, useEffect} from 'react';
import {Box} from '@material-ui/core';
import AppBar from './components/AppBar';

import SortingVisualizer from './components/visualizers/SortingVisualizer';
import SearchingVisualizer from './components/visualizers/searching/SearchingVisualizer';
import PathFindingVisualizer from './components/visualizers/pathFinding/PathFindingVisualizer';
import UserGuideWindow from './components/user-tutorial/UserGuideWindow';

import './sass/main.css';

function App () {

   const [currentOpenTab, set_currentOpenTab] = useState(0);
   const [tutorialHidden, set_tutorialHidden] = useState(false);

   useEffect(() => {
      if (localStorage.getItem('tutorialHidden') !== null) set_tutorialHidden(true);
   }, []);

   function changeTab (n: number) {
      set_currentOpenTab(n);
   }

   return (
      <Box>
         <AppBar handleChangeTab={changeTab} />

         <Box hidden={tutorialHidden}>
            <UserGuideWindow handleSkip={() => {set_tutorialHidden(true);}} />
         </Box>

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
         <Box
            hidden={currentOpenTab !== 2}
            mt={3}
            className="f-color1" >

            <PathFindingVisualizer />
         </Box>
      </Box>
   );
}
export default App;