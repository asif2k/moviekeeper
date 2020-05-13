import React,{useContext} from 'react';
import { HashRouter, Route } from 'react-router-dom';

//components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Favorites from './components/Favorites';
import WatchList from './components/WatchList';
import AppContext from './AppContext'
import './App.css';

const App = () => {


  return (<>
    <Navbar />
    <AppContext.Provider value={useContext(AppContext)}>
    <HashRouter basename="index.html">         
    <Route path="/favorites" exact strict component={Favorites} />
      <Route path="/watchlist" exact strict component={WatchList} />
      <Route path="/search" exact   component={Home} />       
      <Route path="/" exact   component={Home} />       
      <Route path="/search:text" component={Home}  />

    </HashRouter>      
    </AppContext.Provider>

  </>
  )
}


export default App;
