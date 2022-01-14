import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../store/todos-actions';

const EditTodo = (props) => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const deleteTodoHandler = () => {
        if (window.confirm("Delete this todo?")) {
          dispatch(deleteTodo(id));
        }
    };

    return (
        <div className="container-fluid clearfix">
            <button style={{float: "right"}} className="btn btn-danger" onClick={deleteTodoHandler}>Delete</button>
            <h2>Edit Todo</h2>

            <h2>{id}</h2>

            <form>
                <div class="mb-3">
                    <label htmlFor="todo" className="form-label">Todo</label>
                    <input type="text" className="form-control" id="todo" placeholder="Todo"/>
                </div>
                <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="completed"/>
                    <label className="form-check-label" htmlFor="completed">
                        Completed
                    </label>
                </div>
                <button type="button" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default EditTodo;