import { createContext } from "react";

/** 
 * 
 * initialize context with default values to know the consumer that what is the context containing
 * this context we need in all the components Homepage and DetailsPage to make watchlist state available 
*/
const MovieContext = createContext({
    watchlist: [],
    handleAddToWatchList: (() => {

    }),
    handleRemoveFromWatchList: (() => {

    })
});

export default MovieContext;