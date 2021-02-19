import React from 'react'
import './Style1.css'
import JokeCard from "./JokeCard"
import Header from '../Header/Header'

//variation 1 - simple

function JokeDisplay() {



  return (
    <div className="item">
      <Header />

      <p class='center'>VERSION 1 - SIMPLE</p>
      

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
      < br />
<p>This is the code for this version:</p>
      <img src='Images/jokeDisplay1.png' width='720'/>
< br/>
      <p>This code is the same for version 1 and 2:</p>
      <img src='Images/jokeCard-code.png' width='720'/>


    </div>

  )
}


export default JokeDisplay