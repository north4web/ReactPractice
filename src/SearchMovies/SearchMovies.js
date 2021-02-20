import React, { useState } from "react";
import MovieCard from './MovieCard.js';
import './SearchStyle.css'

function SearchMovies() {
    //states- input query, movies
    const [query, setQuery] = useState('');
    //create the state for movies, and update that state appropriate
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=f5672475068c22e89b1a5edccad4ddae&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div className='search-movies'>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query} onChange={(e) => setQuery(e.target.value)}
                />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>

            < hr />

            <div style={{ textAlign: 'center' }}>

                <p>This is the code:</p>
                SearchMovies.js <br />
                <img src='Images/SearchMovies-js.png' width='720' />

                < br />MovieCard.js <br />
                <img src='Images/MovieCard-js.png' width='720' />

            </div>

        </div>
    )
}

export default SearchMovies