import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { foxkeyTheme } from "@foxkey/design-system";
import { useBearStore } from "@foxkey/global-state";

export default function App() {
  foxkeyTheme.globalStyles();
  const { bears, increasePopulation } = useBearStore((state) => state);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <h2>About</h2>
          </Route>
          <Route path="/users">
            <h2>Users </h2>
          </Route>
          <Route path="/">
            <section>
              <h1>{bears} Bears</h1>
              <button onClick={increasePopulation}>one up</button>
            </section>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
