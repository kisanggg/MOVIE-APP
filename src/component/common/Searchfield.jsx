import React from 'react';
import "./Common.css";

export default function SearchField(props){
    const SearchInputRef = React.useRef();

    const handleSearch = () => {
        let value = SearchInputRef.current.value;
        console.log('Search value:', value);
        props.onSearchInitiate(value);
    }

    return (
        <div className="searchWrapper">
            <input ref={SearchInputRef} placeholder="Search..." />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}
