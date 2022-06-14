import React from "react";
import '../styles/TodoCounter.css'
import {TodoContext } from '../App/TodoContext'
export function TodoCounter() {
     const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return (
        <div className="DivTodoCounter">
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
        </div>
    );
}