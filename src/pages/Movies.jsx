import React, { useEffect, useState } from "react";
import Moviecard from "../component/cards/Moviecard";
import MovieFilter from "../component/Movie/Moviefilter";
import Header from "../component/Header/Header";
import Pagination from "../component/Movie/Pagination";
import "./movie.css";
import Searchfield from "../component/common/Searchfield";
import { trackEvents } from "../utils/googleAnalyticsUtils";
import { Link } from "react-router-dom";
import { getMovies, getMoviesByQueryTerm } from "../apis/movie";

export function Movies() {
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState("kiki");
  const [query_term, setQuery] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [filterObject, setFilterObject] = useState({
    quality: "1080p",
    genre: "all",
    rating: 5,
    SortBy: "title",
    OrderBy: "asc",
    page: 1,
  });      

  useEffect(() => {
    getAllMovies();
    setTimeout(() => {
      setName('shyam');
    }, 2000);
  }, [filterObject]);

  const getAllMovies = () => {
    getMovies(filterObject).then((data) => {
      setMovies(data.movies);
    });
  };

  const filterByName = (title) => {
    getMoviesByQueryTerm(title)
      .then((res) => {
        setMovies(res); 
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  };


  return (
    <div>
     
      <MovieFilter
        filterObject={filterObject}
        onOptionChange={(filterObject) => {
          setFilterObject(filterObject);
        }}
      />

      <Searchfield
        onSearchInitiate={(query_term) => {
          console.log(query_term);
          filterByName(query_term);
        }}
      />

      <div className="max-w-4xl mx-auto my-2 grid gap-4">
        <Pagination
          filterObject={filterObject}
          onPageChange={(filterObject) => {
            setFilterObject(filterObject);
          }}
        />
        <h1>Movies</h1>
        
        <div className="grid grid-cols-4 gap-3">
          {movies?.map((movie, item) => (
            <div
              key={item}
              onClick={() => {
                trackEvents('movie', 'card_clicked', movie.title);
              }}
            >
              <Moviecard movie={movie} />
            </div>
          ))}
        </div>
      </div>

      <div>
        {movies?.map((movie) => (
          <div
            key={movie.movie_id}
            onClick={() => {
              setSelectedCategory(movie.description_full);
            }}
          >
            <Link to={`/movies/${movie.movie_id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
