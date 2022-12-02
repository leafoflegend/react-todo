import { useState, useCallback } from 'react';
import CreateTodoForm from './CreateTodoForm';
import TodoList from './TodoList';

const Main = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((todo) => {
    setTodos(todos.concat([todo]));
  }, [todos]);

  const checkTodo = useCallback((todoIndex, completed) => {
    setTodos(todos.map((todo, idx) => {
      if (idx === todoIndex) {
        return {
          ...todo,
          completed: completed,
        };
      }

      return todo;
    }));
  }, [todos]);

  return (
    <main>
      <CreateTodoForm addTodo={addTodo} />
      <TodoList todos={todos} checkTodo={checkTodo} />
    </main>
  );
};

export default Main;
