import "./index.css"

export default function Square({square,onClick}){


    return(
        <button className="square" onClick={onClick}>{square}</button>
    )
}