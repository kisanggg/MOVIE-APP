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
    <div className="bg-slate-800 g-4 ">
      <div className="max-w-lg m-auto p-10 flex gap-4">
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
        name={"SortBy"}
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
        name={"OrderBy"}
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
  );
}