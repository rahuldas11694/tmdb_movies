import MovieContext from "../../context/MovieContext";
import "./MovieCard.css";
import { useContext } from "react";

import { useDispatch, useSelector } from "react-redux";

function MovieCard({movie}){

    // let movieContext = useContext(MovieContext);
    let dispatch = useDispatch();
    let watchlist = useSelector(state => {
        console.log("MovieCard|useSelector|state", state);
        return state.watchlist;
    });
    // let {watchlist, handleAddToWatchList, handleRemoveFromWatchList} = useContext(MovieContext);
    console.log("Movie Card:");

    function handleAdd2WL(){
        console.log("dispatch|handleAdd2WL :: ", movie);
        // Context way
        // movieContext.handleAddToWatchList(movie); 
        // redux way
        dispatch({type:"ADD_TO_WATCHLIST", payload:movie});

    }
    function handleRmWL(){
        console.log("handleRmWL :: ");
        // movieContext.handleRemoveFromWatchList(movie);
        dispatch({type: "REMOVE_FROM_WATCHLIST", payload:movie});
    }

    function isInWl(movie){

        let filteredWl = watchlist.filter((wl) => {
            return wl.id === movie.id;
        })
        
        if(filteredWl.length === 1 ){
            return true;
        }
        return false;
    }

    return (
        
        <div className="movie-card">
            <div className="movie-card-img">
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="Movie Name" />
            </div>
            <div className="movie-card-title">{movie.title}</div>
            
            { 
                isInWl(movie) 
                ? (<button onClick={handleRmWL}>Remove Frm watchlist</button>) 
                : (<button onClick={handleAdd2WL}>Add to watchlist</button>)
            }

        </div>
        
    )
}

export default MovieCard;