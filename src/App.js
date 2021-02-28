import React from 'react'
import Header from './Header/Header'
import Home from '../src/Home/Home'

import JokeDisplay1 from './Jokes/JokeDisplay'
import JokeDisplay2 from './Jokes/JokeDisplay2'
import Contact from '../src/Contact/Contact'
import ProductDisplay from './VsSchoolProducts/ProductDisplay'
import StatePractice from './StatePractice/StatePractice'
import TypingGame from './TypingGame/TypingGame'
import SearchMovies from './SearchMovies/SearchMovies'
import DisplayCallout1 from './Children/UsingProps/DisplayCallout1'
import DisplayCallout2 from './Children/UsingChildren/DisplayCallout2'
import DisplayServices from './UseParams/DisplayServices'
import { BrowserRouter, Route, Link } from "react-router-dom";



function App() {


  return (


    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
  
      <Route exact path="/Contact" component={Contact} /> 
      <Route exact path="/Products" component={ProductDisplay} />
      <Route exact path="/StatePractice" component={StatePractice} />
      <Route exact path="/TypingGame" component={TypingGame} />
      <Route exact path="/Jokes" component={JokeDisplay1} />
      <Route exact path="/Jokes2" component={JokeDisplay2} />
      <Route exact path="/Search-movies" component={SearchMovies} />
      <Route exact path="/Children-Props" component={DisplayCallout1} />
      <Route exact path="/Children" component={DisplayCallout2} />
      <Route path="/UseParams" component={DisplayServices} />




    </BrowserRouter>

  )
}


export default App;
