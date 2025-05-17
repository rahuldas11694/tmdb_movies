import "./WatchListCard.css";

function WatchListCard({item, handleRemoveFromWatchList}){
    console.log("WatchListCard: watchlist");

    function handleRmWL(){
        console.log("handleRmWL :: ");
        handleRemoveFromWatchList(item);
    }

    return (
        <div className="watchlist-card">
            <div className="watchlist-card-img">
                <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="Movie Name" />
            </div>
            <div className="watchlist-card-title">{item.title}</div>
            <div className="watchlist-card-avg">{item.vote_average}</div>
            <div onClick={handleRmWL} className="watchlist-card-delete">Delete</div>
        </div>
    )
}
export default WatchListCard;