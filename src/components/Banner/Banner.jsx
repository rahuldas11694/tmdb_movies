import { useEffect, useState } from "react";
import "./Banner.css";

function Banner(){

    // let [films, setFilms] = useState([]);
    let [film, setFilm] = useState([]);

    const GET_MOVIES_URL = "https://api.themoviedb.org/3/trending/movie/day?api_key=c032ea4288a61c2d0ab394807d522c90";
    console.log("Banner called");
    
    useEffect(() => {
        
        console.log("Banner effect called []");

        fetch(GET_MOVIES_URL).then((res) => {
            return res.json();
        }).then((res) => {
            // setFilms(res.results);
            console.log("Banner setFilms");
            // show the img randomly
            let random_id = Math.floor(Math.random() * 20);
            setFilm(res.results[random_id]);
            console.log("Banner setFilm", random_id);
        });

    }, []); // runs only once see Movies component for more details

    return(
        <div className="banner">
        <div className="banner-img">
            <img src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`} alt="Banner img" />
        </div>
        <div className="banner-title">{film.title}</div>
        </div>
    )

}

export default Banner;