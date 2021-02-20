import React from "react";

function MovieCard({movie}){
    return (
         <div className="card"  >
            <img className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + ' poster'}
                />
            <div className="card--content">
            <h3 className="card--title">{movie.title}</h3>
            <p className='p'><small>RELEASE DATE: {movie.release_date}</small></p>
            <p className='p'><small>RATING: {movie.vote_average}</small></p>
            <p className="card--desc p">{movie.overview}</p>
            </div>

        </div>
    )
}

export default MovieCard