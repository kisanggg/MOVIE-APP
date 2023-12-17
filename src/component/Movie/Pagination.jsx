import React, { useEffect } from "react";

 export default function Pagination({filterObject,onPageChange,}){
    let [currentPage,setCurrentpage]=React.useState(filterObject?.page);
    let[totalPages,setTotalPages]=React.useState(10);
    useEffect(()=>{

    })
    return(
       
        <div 
        className="flex gap-3 justify-center my-2 align-center">
        {Array.from({length:10}).map((item,index)=>{
        return<div 
        onClick={()=>{
            filterObject.page=index+1
            setCurrentpage=index+1
            onPageChange({...filterObject})
        }}  
        className={`hover:shadow-xl cursor-pointer 
        flex w-10 h-10 border-[0.5px] border-gray-200 
        rounded-full p-2 hover:bg-gray-50 justify-center 
        text-center ${
          currentPage === index + 1 ? 'text-black' : ''
        }`}
        >
        
        <span className=" self-center text-sm semibold uppercase">{index+1}</span>
        </div>
         })}
        </div>
       
    )
 }