import React from 'react';
import { TodoContext } from '../App/TodoContext';
import '../styles/TodoForm.css'
function TodoForm() {
    const [newTodoValue,
        setNewTodoValue,
    ] = React.useState('');
    const {
        addTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);

    }


    return (
        <form onSubmit={onSubmit}>
            <label>Estribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla para el almuerzo" />
            <div>
                <button
                    type="button"
                    onClick={onCancel}>
                    ❌
                </button>
                <button
                    type="submit"
                >
                    ✅
                </button>
            </div>
        </form>
    );
}

export { TodoForm };