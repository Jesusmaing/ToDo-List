import React from "react";
import '../styles/TodoCounter.css'
export function TodoCounter({total, completed}) {
    return (
        <div className="DivTodoCounter">
        <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
        </div>
    );
}