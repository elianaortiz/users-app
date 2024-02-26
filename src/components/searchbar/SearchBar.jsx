/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext } from "react";
import { GlobalContext } from "../../utils/globalContext";
import "./SearchBar.css"

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const {users} = useContext(GlobalContext);

    const filteredUsers = users.filter(user => {
        const term = search.toLowerCase();
        return(
            user.name.toLowerCase().includes(term)||
            user.email.toLowerCase().includes(term) ||
            user.address.city.toLowerCase().includes(term)
        );
    });

    const handleSearch = (e) => {
        setSearch(e.target.value); 
    };

    return(
        <div className="searchBar">
            <input
            type="text"
            placeholder="Buscar usuarios"
            value={search}
            onChange={handleSearch}
            />
            {search && (
                <div>
                    {filteredUsers.map(user => (
                        <div key={user.id}>
                            <p>{user.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default SearchBar; 

/*import React, { useContext, useState } from "react";
import { GlobalContext } from "../utils/globalContext";

const SearchBar = () => {
    const { users, searchOpen, setSearchTerm } = useContext(GlobalContext);

    return (
        <div className="card-container">
            <button onClick={() => setSearchTerm("")}>Buscar usuarios</button>
            {searchOpen && (
                <input
                    type="text"
                    placeholder="Buscar..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            )}
            
        </div>
    );
};

export default SearchBar;*/
