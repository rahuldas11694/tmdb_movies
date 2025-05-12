import "./DetailsBanner.css";

function DetailsBanner({details}){

    return (
        <div className="details-banner">
            <div className="details-banner-img">
                <img src={`https://image.tmdb.org/t/p/original${details.poster_path}`} alt="" />
            </div>
            <div>
                {details.videos && <a href={`https://youtube.com/watch?v=${details.videos.results[1].key}`} target="_blank" rel="noreferrer">Watch Trailer</a>}
            </div>
        </div>
    )
}

export default DetailsBanner;