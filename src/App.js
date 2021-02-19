import React from 'react'
import Home from '../src/Home/Home'
import JokeDisplay from './Jokes/JokeDisplay'
import JokeDisplay2 from './Jokes/JokeDisplay2'
import Contact from '../src/Contact/Contact'
import ProductDisplay from './VsSchoolProducts/ProductDisplay'
import StatePractice from './StatePractice/StatePractice'
import TypingGame from './TypingGame/TypingGame'
import { BrowserRouter, Route, Link } from "react-router-dom";



function App() {

  
    return (


      <BrowserRouter>

        <Route exact path="/" component={Home} />
        <Route exact path="/Jokes1" component={JokeDisplay} />
        <Route exact path="/Jokes2" component={JokeDisplay2} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Products" component={ProductDisplay} />
        <Route exact path="/StatePractice" component={StatePractice} />
        <Route exact path="/TypingGame" component={TypingGame} />


      </BrowserRouter>

    )
  }


export default App;
