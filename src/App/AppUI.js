import React from 'react';
import { TodoContext } from './TodoContext';
import { TodoCounter } from '../components/TodoCounter';
import { TodoAdd } from "../components/TodoAdd";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButtom } from "../components/CreateTodoButtom";
import { TodoSearch } from "../components/TodoSearch";
import {CreateNewTodoText} from "../components/CreateNewTodoText";

import { Modal } from '../modal';
import { TodoForm } from '../components/TodoForm';

function AppUI() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <div>
        <TodoSearch />
        <CreateTodoButtom
          openModal = { openModal}
          setOpenModal= {setOpenModal}>
        </CreateTodoButtom>
      </div>

      <TodoList>
        {loading && <p>Estamos cargando, no te desesperes</p>}
        {error && <p>Desesperate, hubo un error</p>}
        {(!loading && !searchedTodos.length) && <CreateNewTodoText/>}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm></TodoForm>
        </Modal>
      )}


      <TodoCounter />
    </React.Fragment>
  );
}

export { AppUI };