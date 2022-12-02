import styles from './TodoCard.module.css';

const TodoCard = ({
  todo: {
    title,
    description,
    completed,
  },
  checkTodo,
}) => {
  return (
    <div className={styles.card}>
      <h3
        className={styles.card_title}
      >
        {title}
      </h3>
      <span
        className={styles.card_description}
      >
        {description}
      </span>
      <div>
        <input
          type={'checkbox'}
          checked={completed}
          onChange={() => checkTodo(!completed)}
        />
        <span>
          {completed ? 'Complete' : 'Incomplete'}
        </span>
      </div>
    </div>
  );
};

export default TodoCard;
