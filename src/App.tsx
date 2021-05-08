import React from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink} from 'react-router-dom'
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import UserItemsPage from './components/UserItemsPage';
import TodoItemsPage from './components/TodoItemsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div>
            <NavLink style={{ paddingRight: 25}} to="/users">Users</NavLink>
            <NavLink style={{ paddingRight: 25}} to="todos">todos</NavLink>
          </div>
          <Route path="/users" exact>
            <UserPage />
          </Route>
          <Route path="/todos" exact>
            <TodosPage />
          </Route>
          <Route path="/users/:id">
            <UserItemsPage />
          </Route>
          <Route path="/todos/:id">
            <TodoItemsPage />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
