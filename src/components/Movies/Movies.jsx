import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import "./Movies.css";
import Banner from "../Banner";

function Movies(){

    const [movies, setMovies] = useState ([]);
    const GET_MOVIES_URL = "https://api.themoviedb.org/3/trending/movie/day?api_key=c032ea4288a61c2d0ab394807d522c90";
    console.log("Movies called");


    useEffect(() => {
        
        console.log("Movies effect called []");

        fetch(GET_MOVIES_URL).then((res) => {
            return res.json();
        }).then((res) => {
            setMovies(res.results);
        });

    }, []);  // empty array for 1 time call only i.e component mount and it causes the component re-render again
    // if empty array is not added then the component will be called on every mounting and unmounting

    // 1. first this component renders without data in movies
    // 2. then use effect is called and the setMovies is called and again after state change of movies the component re-renders with data and calling the moviescard 
    return (
        <>
            <Banner/>
            <h1>Trending Movies</h1>
            <div className="card-parent">
                {
                   movies.map((movie) => {
                        return (<MovieCard movie={movie}/>);
                   })
                }
            </div>
        </>
    );
}

export default Movies;