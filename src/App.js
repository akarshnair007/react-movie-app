import { useEffect, useState } from "react";

import MovieCard from "./MovieCard";
//e17c1f8f
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=e17c1f8f";

//EXAMPLE OF HOW THE DATA OF MOVIES LOOK IN API
// const movie1 = {
//   Title: "Spiderman",
//   Year: "2010",
//   imdbID: "tt1785572",
//   Type: "movie",
//   Poster: "N/A",
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm]=useState('');


  //getting the api for movies
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  //whenever the website load the first it is gonna search is 'harry potter' movies
  useEffect(() => {
    searchMovie("harry potter");
  }, []);


  return (
    <div className="app">

      <h1>CinemaScope</h1>       {/* the title for the website */}

        {/* here the search bar is created */}
      <div className="search">
        <input
          value={searchTerm}                                          // as the searchTerm is  empty string the seach bar will also show empty string
          onChange={(e) => setSearchTerm(e.target.value)}             // here whenever we write the movie name it will show in search bar as it will update the state as per value
          placeholder="Search for movies"
        />
        {/* Search image with responsive movie search*/}
        <img src={SearchIcon} 
        alt="search" 
        onClick={() => searchMovie(searchTerm)} />   {/* whenever we click the search icon it will set the title of the movie name that we have written to the api to show that movie details with help of searchTerm State*/}
      </div>



      {/* here if the movie length is more than 0 then it will show the movie name and if not then show the error */}

     {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />     //here the movie name that we get is passed to this component
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>          {/*  error when movies not found*/}
        </div>
      )}
    </div>
  );
};

export default App;
