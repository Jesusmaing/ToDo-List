import react from 'react';
import '../styles/TodoAdd.css'

export function TodoAdd(){
    return(
        <input 
        className="TodoAdd" 
        placeholder="Haz click para agregar una nueva tarea..."
       ></input>
    );
}