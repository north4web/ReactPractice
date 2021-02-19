import React from 'react'
import './Style1.css'
import JokeCard from "./JokeCard"
import jokesData from "./jokesData"
import { Link } from "react-router-dom";

//version 2 - using map

//learn more methods:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex

// .map explained:
  
  // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  //   const doubled = nums.map(function(num) {
  //       return num * 2
  //   })
  //   console.log(doubled)

  //below map using arrow function

function JokeDisplay2() {
    const jokeComponents = jokesData.map(joke => <JokeCard key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
    
    return (
        <div class='center'>
          <Link class="nav-link active" to="/Jokes">Go to Version1</Link>
          
          <p>VERSION 2 - USING .MAP()</p>

            {jokeComponents}            

            < hr />

      <div style={{ textAlign: 'center' }}>

        <p>This is the code for this version:</p>
        JokeDisplay2.js <br />
        <img src='Images/jokeDisplay2.png' width='720' />

        < br />JokeCard.js (same for both versions)<br />
        <img src='Images/jokeCard.png' width='720' />

        < br />JokesData.js (same for both versions)<br />

        <img src='Images/jokesData.png' width='720' />
      </div>
        </div>
    )
}
export default JokeDisplay2

