import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createTodo } from '../../store/todos-actions';

const CreateTodo = (props) => {
    const dispatch = useDispatch();
    const [enteredTodo, setEnteredTodo] = useState('');
    // const [enteredCompleted, setEnteredCompleted] = useState(false);

    const todoChangeHandler = (event) => {
        setEnteredTodo(event.target.value);
      };
    
    //   const completedChangeHandler = (event) => {
    //     setEnteredCompleted(event.target.value);
    //   };

      const submitHandler = (event) => {
        event.preventDefault();
    
        const todoData = {
          todo: enteredTodo,
          completed: false,
        };

        //console.log(todoData);

        dispatch(createTodo(todoData));
    
        //props.onSaveExpenseData(expenseData);
        setEnteredTodo('');
        // setEnteredCompleted(false);
      };

    return (
        <div className="container-fluid">
            <h2>Create Todo</h2>

            <form onSubmit={submitHandler}>
                <div class="mb-3">
                    <label htmlFor="todo" className="form-label">Todo</label>
                    <input type="text" className="form-control"
                        value={enteredTodo}
                        onChange={todoChangeHandler} 
                        id="todo" placeholder="Todo"/>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    );
};

export default CreateTodo;