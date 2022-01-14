import { useDispatch } from 'react-redux';

import { todosActions } from '../../store/todos-slice';
import { deleteTodo } from '../../store/todos-actions';

const TodoItem = (props) => {
  const dispatch = useDispatch();

  const { todo, completed, id } = props.todo;

  // const deleteTodoHandler = () => {
  //   dispatch(todosActions.deleteTodo(id));
  // };

  const deleteTodoHandler = () => {
    dispatch(deleteTodo(id));
  };

  // const addTodoHandler = () => {
  //   const todoId = 8;

  //   dispatch(
  //     todosActions.addTodo({
  //       todoId,
  //       todo,
  //       completed,
  //     })
  //   );
  // };

  return (
    <li className="list-group-item">
        {todo} {completed.toString()} 
        <button className="btn btn-danger" onClick={deleteTodoHandler}>Delete</button>

        {/* <button className="btn btn-primary" onClick={addTodoHandler}>Add</button> */}
    </li>
  );
};

export default TodoItem;
