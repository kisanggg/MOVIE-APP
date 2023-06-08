import React, { useEffect } from "react";
import Moviecard from "../component/Movie/Moviecard";
import { getMovies,getMoviesByQueryTerm } from "../apis/movie";
import MovieFilter from "../component/Movie/Moviefilter";
import Header from "../component/Header/Header";
import Pagination from "../component/Movie/Pagination";
import Searchfield from "../component/common/Searchfield";
import { trackEvents } from "../utils/googleAnalyticsUtils";
 export function Movies(){
    const[movies,setMovies]=React.useState([]);
    const[name,setName]=React.useState("kiki")
    const[query,setQuery]=React.useState();
    const [filterObject, setFilterObject] = React.useState({
        quality: "1080p",
        genre: "all",
        rating:5,
        SortBy:"title",
        OrderBy:"asc",    
        page:1,
        
      }); 
      useEffect(() => {
        getAllMovies();
        setTimeout(()=>{
          setName('shyam')
        },2000)
      }, [filterObject]);
      const getAllMovies = () => {
        getMovies(filterObject).then((data) => {
          setMovies(data.movies);
        });
      };
     const filterByName=()=>{
      getMoviesByQueryTerm().then((res)=>{
        setQuery(res);
      })
     }
 
 return(
    <div>
      <Searchfield
        onSearchInitiate={(queryTerm)=>{
          console.log(queryTerm)
          filterByName(queryTerm)
        }}
      
      />
      {name==="shyam"?'':<Header name={name}/>}
    <MovieFilter
      filterObject={filterObject}
      onOptionChange={(filterObject) => {
        setFilterObject(filterObject);
      }}
    />

<div className="max-w-4xl mx-auto my-2 grid gap-4">
  <Pagination
   filterObject={filterObject}
   onPageChange={(filterObject)=>{
    setFilterObject(filterObject);
   }}

   />
  <h1>Movies</h1>
  
 <div className="grid grid-cols-4 gap-3">
  
 {movies?.map((movie,item)=>
    <div onClick={()=>{
      trackEvents('movie','card_clicked',`${movie.title}`)
    }}><Moviecard movie={movie}/></div>
 )}
 </div>
 </div>
 </div>
 )
 }