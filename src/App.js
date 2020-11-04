// import logo from './logo.svg';
import "./App.css";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Purpose from "./components/pages/Purpose";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/purpose" component={Purpose} />
        <Route path="/signup" component={Signup} />
        <Route path={"*"}>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
