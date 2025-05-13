import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import MovieContext from './context/MovieContext';
import { useState } from 'react';



function App() {

  const [watchlist, setWatchlist] = useState([]);

  function handleAddToWatchList(movie){
    console.log("handleAddToWatchList", movie);
    setWatchlist([...watchlist, movie]);
    // console.log("setting watchlist", watchlist);
  }

  function handleRemoveFromWatchList(movie){
    console.log("handleRemoveFromWatchList", watchlist);
    let newWL = watchlist.filter((wl) => {
      return movie.id !== wl.id;
    });
    console.log("After Removing WL", watchlist);
    setWatchlist(newWL);
  }

  return (
    <div className='App'>
      <MovieContext.Provider value={{watchlist, handleAddToWatchList, handleRemoveFromWatchList}} >
        <BrowserRouter>
          <Switch>
            <Route
              path="/"
              exact={true}
              component={HomePage}  
            />

            <Route
              path="details/:id"
              exact={true}
              component={DetailsPage}
            />

            <Route component={NotFoundPage}></Route>
            
          </Switch>

        </BrowserRouter>
      </MovieContext.Provider>
    </div>
  );
}

export default App;
