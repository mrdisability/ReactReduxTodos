import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodosData } from './store/todos-actions';
import Todos from './components/Todo/Todos';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CreateTodo from './components/Todo/CreateTodo'
import EditTodo from './components/Todo/EditTodo';
import Notification from './UI/Notification';
import { uiActions } from './store/ui-slice';

function App() {
  const dispatch = useDispatch();

  var notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchTodosData());
  }, [dispatch]);

  useEffect(() => {
    setInterval(() => {
      dispatch(
        uiActions.hideNotification()
      );
    }, 3000)
  }, [dispatch]);

  return (
    <BrowserRouter>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">React Redux Todos</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create_todo">Create Todo</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}

    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="create_todo" element={<CreateTodo />} />
      <Route path="/todos/:id" element={<EditTodo />} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
