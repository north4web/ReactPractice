import React from 'react'
import './Style1.css'
import JokeCard from "./JokeCard"
import { Link } from "react-router-dom";

//variation 1 - simple

function JokeDisplay() {

  return (
    <div className="item center">

      <Link class="nav-link active" to="/Jokes2">Go to Version2</Link>
      <p> VERSION 1 - SIMPLE</p>


      <JokeCard
        punchLine="It’s hard to explain puns to kleptomaniacs because they always take things literally."
      />
      <JokeCard
        question="What's the best thing about Switzerland?"
        punchLine="I don't know, but the flag is a big plus!"
      />

      <JokeCard
        question="Did you hear about the mathematician who's afraid of negative numbers?"
        punchLine="He'll stop at nothing to avoid them!"
      />

      <JokeCard
        question="Did you hear about the new restaurant called Karma?"
        punchLine="There’s no menu: You get what you deserve."
      />

      <JokeCard
        question="Did you hear about the actor who fell through the floorboards?"
        punchLine="He was just going through a stage."
      />
      < hr />

      <div style={{ textAlign: 'center' }}>

        <p>This is the code for this version:</p>
        JokeDisplay1.js <br />
        <img src='Images/jokeDisplay1.png' width='720' />

        < br />JokeCard.js (same for both versions)<br />
        <img src='Images/jokeCard.png' width='720' />

        < br />JokesData.js (same for both versions)<br />

        <img src='Images/jokesData.png' width='720' />
      </div>
    </div>
  )
}
export default JokeDisplay