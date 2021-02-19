import React from "react"
import "./Style1.css"

function JokeCard(props) {

    return (
        <div className="container">

            <h3 style={{ display: props.question ? "flex" : "none" }} className="item">Question: {props.question}</h3>
            <br />
            <h3 style={{ color: !props.question && "rgb(241, 143, 16)" }} className="item">Answer: {props.punchLine}</h3>
            <hr />

        </div>
    )
}

export default JokeCard