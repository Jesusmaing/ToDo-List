import React from 'react';
import { TodoContext } from './TodoContext';
import { TodoCounter } from '../components/TodoCounter';
import { TodoAdd } from "../components/TodoAdd";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButtom } from "../components/CreateTodoButtom";
import { TodoSearch } from "../components/TodoSearch";

function AppUI() {
  return (
    <React.Fragment>

      <TodoSearch/>
      <CreateTodoButtom />
      <TodoAdd />
      <TodoContext.Consumer>
        {({loading,error, searchedTodos, completeTodo, deleteTodo}) =>(
          <TodoList>
          {loading && <p>Estamos cargando, no te desesperes</p>}
          {error && <p>Desesperate, hubo un error</p>}
          {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
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
        )}
      </TodoContext.Consumer>
      
      <TodoCounter/>
    </React.Fragment>
  );
}

export { AppUI };