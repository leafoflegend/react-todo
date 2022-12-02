import { useState } from 'react';
import LabeledInput from './LabeledInput';
import styles from './CreateTodoForm.module.css';

const CreateTodoForm = ({ addTodo }) => {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDescription, setTodoDescription] = useState('');

  return (
    <form
      className={styles.form}
      onSubmit={
        (e) => {
          addTodo({
            title: todoTitle,
            description: todoDescription,
            completed: false,
          });
          setTodoTitle('');
          setTodoDescription('');
          e.preventDefault();
        }
      }
    >
      <LabeledInput
        title={'Todo Title'}
        value={todoTitle}
        setValue={setTodoTitle}
      />
      <LabeledInput
        title={'Todo Description'}
        value={todoDescription}
        setValue={setTodoDescription}
      />
      <button>Create Todo</button>
    </form>
  );
};

export default CreateTodoForm;
