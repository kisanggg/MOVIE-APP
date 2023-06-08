import axios from 'axios';


 export function getMovies(filterObject ){
   let{quality,genre,rating,SortBy,OrderBy,page,limit}=filterObject;
    return new Promise((resolve,reject)=>
    axios({
        method:"get",
        url:`https://yts.mx/api/v2/list_movies.json?quality=${quality}&genre=${genre}&minimum_rating=${rating}&sort_by=${SortBy}&order_by=${OrderBy}&page=${page}&limiy=${limit}`
 }).then((res)=>{
    resolve(res?.data?.data)
 })
 )
}

export function getMoviesByQueryTerm(query_term){
   return new Promise((resolve,reject)=>
   axios({
      method:"get",
      url:`https://yts.mx/api/v2/list_movies.json?q=${query_term}`,
   }).then((res)=>{
      resolve(res);
   })
   )
}