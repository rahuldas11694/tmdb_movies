import MovieContext from "../../context/MovieContext";
import "./MovieCard.css";
import { useContext } from "react";

function MovieCard({movie}){

    let movieContext = useContext(MovieContext);
    // let {watchlist, handleAddToWatchList, handleRemoveFromWatchList} = useContext(MovieContext);
    console.log("Movie Card:");

    function handleAdd2WL(){
        console.log("handleAdd2WL :: ", movie);
        movieContext.handleAddToWatchList(movie);

    }
    function handleRmWL(){
        console.log("handleRmWL :: ");
        movieContext.handleRemoveFromWatchList(movie);
    }

    function isInWl(movie){

        let filteredWl = movieContext.watchlist.filter((wl) => {
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