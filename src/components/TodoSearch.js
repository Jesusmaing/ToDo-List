import react from 'react';
import '../styles/TodoSearch.css'

export function TodoSearch({ searchValue, setSearchValue, todos, searchTodos }) {
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