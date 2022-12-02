import TodoCard from './TodoCard';
import styles from './TodoList.module.css';

const TodoList = ({ todos, checkTodo }) => {
  console.log(todos);

  return (
    <div className={styles.list_container}>
      {
        todos.length
          ? (
          <span>{todos.filter(todo => todo.completed).length}/{todos.length} Complete</span>)
          : ''

      }
      {
        !todos.length && <h3 className={styles.tasks_completed}>All Tasks Completed!</h3>
      }
      {
        todos.map((todo, idx) => {
          return <TodoCard
            key={todo.description}
            todo={todo}
            checkTodo={
              (completed) => {
                checkTodo(idx, completed);
              }
            }
          />;
        })
      }
    </div>
  );
};

export default TodoList;
