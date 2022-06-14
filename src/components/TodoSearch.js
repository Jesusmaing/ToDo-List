import React from "react";
import { TodoContext } from '../App/TodoContext';
import '../styles/TodoSearch.css'

export function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);

    }
    return (
        <input
            className="TodoSearch"
            placeholder="Buscar..."
            value={searchValue}
            onChange={onSearchValueChange}></input>
    );
}