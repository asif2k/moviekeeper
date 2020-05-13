import React,{useContext} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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
    <BrowserRouter>
      <Route path="/" exact component={Home} />      
      <Route path="/favorites" exact strict component={Favorites} />
      <Route path="/watchlist" exact strict component={WatchList} />
    </BrowserRouter>      
    </AppContext.Provider>

  </>
  )
}


export default App;
