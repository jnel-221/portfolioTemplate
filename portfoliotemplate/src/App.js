import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Connect from "./pages/Connect";

// import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={["/"]}>
            <Home />
          </Route>
          <Route exact path={["/page1"]}>
            <Page1 />
          </Route>
          <Route exact path={["/page2"]}>
            <Page2 />
          </Route>
          <Route exact path={["/connect"]}>
            <Connect />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
