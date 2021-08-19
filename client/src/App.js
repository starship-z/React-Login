import Login from "./components/Login"
import Register from "./components/Register"
import Counter from "./components/Counter"
import ToDoList from "./components/ToDoList"
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
// google: react router example
// /home /login /register

function App() {
  return (
    <div>
    <Router>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/todo">Todo</Link>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/counter" component={Counter}></Route>
        <Route exact path="/todo" component={ToDoList}></Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
