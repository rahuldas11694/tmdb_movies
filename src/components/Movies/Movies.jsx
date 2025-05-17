import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import "./Movies.css";
import Banner from "../Banner";
import Details from "../Details";
import Pagination from "../Pagination";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Movies(){
    console.log('Movies Component')

    const [movies, setMovies] = useState ([]);
    let [pageNo, setPageNo] = useState(1);

    const GET_MOVIES_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=c032ea4288a61c2d0ab394807d522c90&page=${pageNo}`;

    function handleNext(){
        console.info("Next page");
        if(pageNo > 500) return;
        setPageNo(pageNo+1);

    }

    function handlePrev(){
        console.info("Prev page");
        if(pageNo === 1) return;
        setPageNo(pageNo-1);
    }

    useEffect(function(){
        console.log("extra effect");
    }, [pageNo]);

    useEffect(() => {
        
        console.log("Movies effect called []");

        fetch(GET_MOVIES_URL).then((res) => {
            return res.json();
        }).then((res) => {
            setMovies(res.results);
        });

    }, [pageNo]);
      // empty array for 1 time call only i.e component mount and it causes the component re-render again
    // if empty array is not added then the component will be called on every mounting and unmounting
    // AND EVERY COMPONENT ATLEAST GETS CALLED ONCE IRRESPECTIVE OD DEP ARRAY
    // 1. first this component renders without data in movies
    // 2. then use effect is called and the setMovies is called and again after state change of movies the component re-renders with data and calling the moviescard 
    return (
        <>
            <h1>Trending Movies | <Link to="/watchlist">Watchlist</Link> </h1>
            <div className="card-parent">
                {
                   movies.map((movie) => {
                        return (<MovieCard movie={movie}/>);
                   })
                }
            </div>
            <Pagination 
            handleNext={handleNext}
            handlePrev={handlePrev}
            pageNo={pageNo}
            />
        </>
    );
}

export default Movies;