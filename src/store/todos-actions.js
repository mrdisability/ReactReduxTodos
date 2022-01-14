import { todosActions } from './todos-slice';

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
    //   dispatch(
    //     uiActions.showNotification({
    //       status: 'error',
    //       title: 'Error!',
    //       message: 'Fetching Todos data failed!',
    //     })
    //   );
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
        todosActions.deleteTodo(id)
      );
    } catch (error) {
      console.log(error);
    }
  };
};