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
    if (window.confirm("Delete this todo?")) {
      dispatch(deleteTodo(id));
    }
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
    <li style={{cursor: "pointer"}} className="list-group-item clearfix">
        {todo}

        <div style={{float: "right"}}>
          <button style={{marginLeft: "10px"}} className="btn btn-secondary">Edit</button>

          <button style={{marginLeft: "10px"}} className="btn btn-danger" onClick={deleteTodoHandler}>Delete</button>
        </div>

        {/* <button className="btn btn-primary" onClick={addTodoHandler}>Add</button> */}
    </li>
  );
};

export default TodoItem;
