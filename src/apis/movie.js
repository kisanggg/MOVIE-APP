import axios from 'axios';


 export function getMovies(filterObject ){
   let{quality,genre,rating,SortBy,OrderBy,page,limit}=filterObject;
    return new Promise((resolve,reject)=>
    axios({
        method:"get",
        url:`https://yts.mx/api/v2/list_movies.json?quality=${quality}&genre=${genre}&minimum_rating=${rating}&sort_by=${SortBy}&order_by=${OrderBy}&page=${page}&limit=${limit}`
 }).then((res)=>{
    resolve(res?.data?.data)
 })
 )
}

export function getMoviesByQueryTerm(title) {
   return axios({
       method: "get",
       url: `https://yts.mx/api/v2/list_movies.json?query_term=${title}`,
   })
   .then((res) => {
      if (res && res.data && res.data.data && res.data.data.movies) {
         // If the structure is as expected, return the movies
         console.log(res.data.data.movies);
         return res.data.data.movies;
        
     } else {
         console.log('Data structure not as expected or movies not found.');
         return []; // Return an empty array or handle the case where movies are not found
     }
   })
   .catch((error) => {
       console.error('Error fetching movies:', error);
       throw error; 
   });
}

export function getMovieDetail(movie_id){
   return new Promise((resolve,reject)=>
   axios({
      method:"get",
      url:`https://yts.mx/api/v2/list_movies.json?m=${movie_id}`,
   }).then((res)=>{
      resolve(res?.data?.data?.movies);
   })
   )
}

