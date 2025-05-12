import "./Card.css";

function Card({item}){
    return(
        <div className="card">
            <div className="card-img">
                <img src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt="" />
            </div>
            <div className="card-header">{item.name}</div>
            <div className="card.character">{item.character}</div>
        </div>
    )
}

export default Card;