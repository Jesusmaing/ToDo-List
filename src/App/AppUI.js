import React from 'react';
import { TodoContext } from './TodoContext';
import { TodoCounter } from '../components/TodoCounter';
import { TodoAdd } from "../components/TodoAdd";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButtom } from "../components/CreateTodoButtom";
import { TodoSearch } from "../components/TodoSearch";
import {CreateNewTodoText} from "../components/CreateNewTodoText";

import { TodosError } from "../components/TodosError";
import { TodosLoading } from "../components/TodosLoading";
import { EmptyTodos } from "../components/EmptyTodos";

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
        {loading && <TodosLoading/>}
        {error && <TodosError error={error}/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos/>}
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