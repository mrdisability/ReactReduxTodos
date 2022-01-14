import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosData } from './store/todos-actions';
import Todos from './components/Todo/Todos';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosData());
  }, [dispatch]);

  //const todoItems = useSelector((state) => state.todoItems.todos);

    //console.log(todoItems);

  return (
    <Fragment>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">React Redux Todos</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <Todos />
    </Fragment>
  );
}

export default App;
