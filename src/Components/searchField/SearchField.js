import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSub } from "../subs/subsSlice";

export const SearchField = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.length === 0) {
          return;
        }

        dispatch(
            addSub(search)
        )

        e.target.reset();
    }
   
    return (
        <div className='App-header'>
            <form onSubmit={handleSubmit}>
                <input  type="text" 
                        placeholder="Search for subs.."
                        onChange={(e) => setSearch(e.currentTarget.value)}
                ></input>
                <button type="submit">+</button>
            </form> 
        </div>

    );
};
