import { todosActions } from './todos-slice';
import { uiActions } from './ui-slice';

//https://practicereact-7a9bd-default-rtdb.firebaseio.com/toDos

//http://127.0.0.1:3000/todos

export const fetchTodosData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'http://127.0.0.1:3000/todos'
      );

      if (!response.ok) {
        throw new Error('Could not fetch todos data!');
      }

      const data = await response.json();

      //console.log(data);

      return data;
    };

    try {
      const todosData = await fetchData();
      dispatch(
        todosActions.replaceTodos({
          todos: todosData || [],
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching todos data failed!',
        })
      );
    console.log(error);
    }
  };
};

export const createTodo = (todoData) => {
  return async (dispatch) => {

    const sendRequest = async () => {
      const response = await fetch(
        `http://127.0.0.1:3000/todos`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            { 
              todo: todoData.todo,
              completed: todoData.completed 
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Created todo failed');
      }
    };

    try {
      await sendRequest();
      console.log("Created successfully");

      dispatch(
        fetchTodosData(),
      );

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Created todo successfully',
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {

    const sendRequest = async () => {
      const response = await fetch(
        `http://127.0.0.1:3000/todos/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Deleting todo failed');
      }
    };

    try {
      await sendRequest();
      console.log("Deleted successfully");

      dispatch(
        todosActions.deleteTodo(id),
      );

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Deleted todo successfully',
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};