import { useDispatch } from 'react-redux';

import { todosActions } from '../../store/todos-slice';
import { deleteTodo } from '../../store/todos-actions';
import { Link } from 'react-router-dom';

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
      <Link to={`/todos/${id}`}>{todo}</Link>

        <div style={{float: "right"}}>
          {/* <Link to={`/todos/${id}`} style={{marginLeft: "10px"}} className="btn btn-secondary">
            Edit
          </Link> */}

          <button style={{marginLeft: "10px"}} className="btn btn-danger" onClick={deleteTodoHandler}>Delete</button>
        </div>
    </li>
  );
};

export default TodoItem;
