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

  const setData = (data) => {
    //console.log(data);

    let { id, todo, completed } = data;
    console.log(`${id} ${todo} ${completed}`)
    localStorage.setItem('ID', id);
    localStorage.setItem('TODO', todo);
    localStorage.setItem('COMPLETED', completed);
}

  return (
    <li style={{cursor: "pointer"}} className="list-group-item clearfix">
      <Link to={`/todos/${id}`} onClick={() => setData(props.todo)}>{todo}</Link> 
      {completed ? <span style={{marginLeft: "10px"}} class="badge bg-success">Completed</span>
        : <span style={{marginLeft: "10px"}} class="badge bg-danger">Incomplete</span>}

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
