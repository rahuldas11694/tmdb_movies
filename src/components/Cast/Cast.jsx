import Card from "../Card";
import "./Cast.css";

function Cast({cast}){

    return (
        <div className="cast">
            {cast.map(function(item){
                return <Card item={item} key={item.id}/>
            })}
        </div>
    )
}

export default Cast;