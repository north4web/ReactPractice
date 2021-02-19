import React from 'react'
import './Style1.css'
import JokeCard from "./JokeCard"
import Header from '../Header/Header'
import jokesData from "./jokesData"


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
        <div>
          
          <Header />
          
          <p class='center'>VERSION 1 - USING MAP</p>

            {jokeComponents}            

            <p>this is the code:</p>

<img src='Images/joke-code-using-map.png' width='720' alt=''/>

        </div>
    )
}

export default JokeDisplay2

