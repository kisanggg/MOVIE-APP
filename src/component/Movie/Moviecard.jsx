import React from "react";
import { StarIcon ,HeartIcon} from "../../utils/iconUtils";

export default function Moviecard({movie}){
    return(
       
        <div className=" h-full rounded-xl image-fit-content overFlow-hidden border-2 border-red relative">
              <span className="text-white absolute top-2 right-2">{HeartIcon()}</span>
               <img className=" rounded-t-lg w-full object-cover h-[120px]  " src={movie?.large_cover_image} alt="img"></img>
                <div className="grid p-4 gap-3">
                <span className="text-sm line-clamp-2 h-6 font-semibold capitalize">{movie.title}</span>
                <div>
                <span className="text-[9px] text-gray-400 line-clamp-4 h-6 ">2h 10m | {movie.genres.join(', ')} | {movie.year}{""} </span>
                <span className=" line-clamp-5 text-xs ">
                    {movie?.summary ?? movie?.description_full}</span>
                <div className="flex gap-2 mt-2">
                    {[0,1,2,3,4].map((item,index)=>(
                    <div key={index}>{StarIcon(index<4 ? 'fill-yellow-500':"")}</div>
                ))}</div>   
                </div>
              </div>
        </div>
       
    )
}