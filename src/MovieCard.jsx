import React from "react";

const MovieCard = ({ movie }) => {     // here we get the movie name that is passed in 'App.js' and show its poster ,type and its title
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"             // the movie poster that will show 
          }
          alt={movie.Title}                                    // movie name if img did't work
        />
      </div>
      <div>
        <span>{movie.Type}</span>                               {/* it will show the movie type like :movie or series */}
        <h3>{movie.Title}</h3>                                  {/* it will show the movie title that is its name */}
      </div>
    </div>
  );
};

export default MovieCard;
