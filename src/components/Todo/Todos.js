import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

const Todos = (props) => {
  const todoItems = useSelector((state) => state.todos.todos);

    //console.log(todoItems);

  return (
    <div className='container-fluid'>
      <h2>Todos</h2>
      <ul>
        {todoItems.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todo={{
              id: todoItem.id,
              todo: todoItem.todo,
              completed: todoItem.completed,
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todos;