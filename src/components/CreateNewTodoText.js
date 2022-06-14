import React from 'react';
import '../styles/CreateNewTodoText.css'


function CreateNewTodoText(){
    return (
        <div className="CreateNewTodoText">
            <h2>No tienes tareas agregadas 📝❌</h2>
            <h4>Intenta agregar una pulsando el botón azul</h4>
        </div>
    );
}

export {CreateNewTodoText};