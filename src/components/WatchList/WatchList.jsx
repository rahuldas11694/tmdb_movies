import WatchListCard from "../WatchListCard/WatchListCard";
import { useContext, useState } from "react";
import MovieContext from "../../context/MovieContext";
import "./WatchList.css";

function WatchList(){

    const movieContext = useContext(MovieContext);
    const watchlist = movieContext.watchlist;
    const[search, setSearch] = useState("");
    console.log("Watchlist");

    function handleSearch(e){
        setSearch(e.target.value);
    }

    function handleAscSort(){
        
        let sortAsc = watchlist.sort((movieObjA, movieObjB) => {
            return movieObjA.vote_average - movieObjB.vote_average
        });
        console.log("handleAscSort", sortAsc, movieContext)
        // everytime my watchlist is changed my APP shuold get re-rendered, 
        // but setting the watchlist doesnt cause App re-render
        
        // movieContext.setWatchlist(sortAsc);

        // because React does the function/object/array comparision based on the Reference
        // and wheen i assign an object to variable it is passed by reference e.g
        
        /* var obj = {
            a: 10, b:20, "asd": 45
        } 

        var obj2 = obj; */

        // so when we were assigning sortAsc to the setWatchlist, 
        // react was checking if the memory reference has changed, (diffing DOM) 
        // so reference here would be the same even after sorting and assigning, for react it is not a change hence watchlist is not re-rendered
        
        // to solve this we create a new replica using spread operator [...sortAsc] -it creates a new array with new reference and then the component wll re-render

        movieContext.setWatchlist([...sortAsc]);

        /* 
        when we want to set a state for object / array / function 
        then we create a new reference for that state variable in order to cause a re-render 
        */

    }

    function handleDescSort(){
        let sortDesc = watchlist.sort((movieObjA, movieObjB) => {
            return movieObjB.vote_average - movieObjA.vote_average
        })
        console.log("handleAscDesc", sortDesc)
        movieContext.setWatchlist([...sortDesc]);
    }


    return (
        <>  
            <div className="watchlist">
            <input type="text" onChange={handleSearch} />
            <button onClick={handleAscSort}>Sort Asc</button>
            <button onClick={handleDescSort}>Sort Desc</button>
            { watchlist.filter((item) => {
                return item.title.toLowerCase().includes(search.toLocaleLowerCase());
            }).map((item) => { 
                return <WatchListCard item={item} handleRemoveFromWatchList={movieContext.handleRemoveFromWatchList
                } key={item.id} /> })
            }
            </div>
            
        </>
    )
}

export default WatchList;