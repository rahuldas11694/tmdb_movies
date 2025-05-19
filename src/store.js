import { createStore } from "redux";


function watchlistReducer(state = {watchlist : []}, action){
    switch(action.type){
        case 'ADD_TO_WATCHLIST':{
            console.log(" Reducer| ADD_TO_WATCHLIST | state", state);
            let newState = {...state, watchlist: [...state.watchlist, action.payload]};
            localStorage.setItem("watchlist", JSON.stringify(newState));
            return newState;
        }

        case "REMOVE_FROM_WATCHLIST":{
            console.log("Reducer | REMOVE_FROM_WATCHLIST | state", state);
            let filteredWatchlist = state.watchlist.filter((mv) => mv.id !== action.payload.id );
            debugger;
            localStorage.setItem("watchlist", JSON.stringify(filteredWatchlist));
            return {...state, watchlist: [...filteredWatchlist] };
        }

        default:
            return state;
    }
}

const store = createStore(watchlistReducer);
export default store;