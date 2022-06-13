import React from 'react';
import { TodoCounter } from '../components/TodoCounter';
import { TodoAdd } from "../components/TodoAdd";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButtom } from "../components/CreateTodoButtom";
import { TodoSearch } from "../components/TodoSearch";

function AppUI({
   loading,
   error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
  }) {
    return (
      <React.Fragment>

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
          <CreateTodoButtom />
          <TodoAdd />

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
        <TodoCounter
          total={totalTodos}
          completed={completedTodos}
        />
      </React.Fragment>
    );
  }
  
  export { AppUI };