import { useEffect, useState } from "react";
import Cast from "../Cast";
import DetailsBanner from "../DetailsBanner";

function Details(){

    let [details, setDetails] = useState([]);

    const GET_DETAILS_URL = "https://api.themoviedb.org/3/movie/1151039?api_key=c032ea4288a61c2d0ab394807d522c90&append_to_response=videos,credits";
    console.log("Details called");


    useEffect(() => {
        
        console.log("Movies effect called []");

        fetch(GET_DETAILS_URL).then((res) => {
            return res.json();
        }).then((res) => {
            setDetails(res);
        });

    }, []);


    return (
        <div>
            <DetailsBanner details={details}/>
            <h1>Cast</h1>
            { details.credits && details.credits.cast ? <Cast cast={details.credits.cast.slice(0,8)}/> : null }
        </div>
    );
}

export default Details;