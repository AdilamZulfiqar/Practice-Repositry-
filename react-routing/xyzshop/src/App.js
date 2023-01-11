import logo from "./logo.svg";
import "./App.css";
import TopMenu from "./components/TopMenu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <div>
        <TopMenu />
        <Switch>
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
