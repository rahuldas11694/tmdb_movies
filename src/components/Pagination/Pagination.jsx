import "./Pagination.css";

export default function Pagination({pageNo, handleNext, handlePrev}){
    return(
        <div className="pagination">
            <div className="prev" onClick={handlePrev}>Prev</div>
            <div>{pageNo}</div>
            <div className="next" onClick={handleNext}>Next</div>
        </div>
    )
}