import React from "react";
import { qualities ,genres,rating, SortBy, OrderBy} from "../../Enum/movieEnum";
export default function MovieFilter({ filterObject, onOptionChange }) {
  const handleChange = (e) => {
    let { value, name } = e.target;
    filterObject[name] = value;
    onOptionChange({ ...filterObject });
  };
 const common="p-2 border-red-400 border-1 rounded-full";
  return (
    <div className="bg-black g-4 ">
      <div className="flex p-4 " style={{justifyContent:"end"}}>
      
       <img className="  rounded-t-lg  object-cover h-[50px]  w-12 h-12 " src="https://store-images.s-microsoft.com/image/apps.29950.13510798887526641.12d889d8-2449-4d90-ad45-0890b67019df.8a2f93f8-29dc-4130-9f09-b177bf5e6483?w=120" alt="img"></img>
       </div>
      <div className="searchWrapper">
        <span className="text-lime-600">Search Term:</span>
        <div>
          <input  className=" p-1 text-sm w-3/4 p-1 border-lg " />
         
          <button className="   text-md rounded-md border-2 border-lime-600 text-lime-600">Search</button>
          
        </div>
        <div className="max-w-md m-auto p-10 flex gap-4">
          <div >
            <span className="search-header-text text-lime-600 p-2">Quality</span>
      <select
        className={common}
        name={"quality"}
        onChange={(e) => {
          handleChange(e);
        }}
      >
        {qualities.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      </div>
      <div>
        <span className="text-lime-600 p-2 g-2">Genre</span>
      <select
      className={common}
      name={"genre"}
      onChange={(e)=>{
        handleChange(e);
      }}
      >
        {genres?.map((item)=>(
            <option value={item}>{item}</option>
        ))}

      </select>
      </div>
      <div>
        <span className="text-lime-600  ">Rating</span>
      <select
       className={common}
        name={"rating"}
        onChange={(e) => {
          handleChange(e);
        }}
      >
        {rating.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      </div>
      <div>
        <span className="text-lime-600 p-2 ">Sort By</span>
      <select
       className={common}
        name={"Sort By"}
        onChange={(e) => {
          handleChange(e);
        }}
      >
        {SortBy.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      </div>
      <div>
        <span className="text-lime-600 ">Order By</span>
      <select
      className={common}
        name={"Order By"}
        onChange={(e) => {
          handleChange(e);
        }}
      >
        {OrderBy.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      </div>
      </div>
    </div>
    </div>
  );
}