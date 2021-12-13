import { BrowserRouter, NavLink, Route } from "react-router-dom";
import TodoItemPage from "./components/TodoItemPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import UsersPage from "./components/UsersPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink to='/users'>Пользователи</NavLink>
        <NavLink to='/todos'>Список дел</NavLink>
      </div>
      <div>
        <Route path={"/users"} exact>
          <UsersPage />
        </Route>
        <Route path={"/todos"} exact>
          <TodosPage />
        </Route>
        <Route path={"/users/:id"} exact>
          <UserItemPage />
        </Route>
        <Route path={"/todos/:id"} exact>
          <TodoItemPage />
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
