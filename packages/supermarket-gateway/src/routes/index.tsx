import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Parsel from "single-spa-react/parcel";
import { foxkeyTheme } from "@foxkey/design-system";

import Route from "./Route";
import CleanTemplate from "../templates/Clean";
import PanelTemplate from "../templates/Panel";

export default function Routes() {
  foxkeyTheme.globalStyles();
  return (
    <Router>
      <Switch>
        <Route
          path="/account"
          isPrivate={false}
          template={CleanTemplate}
          exact={false}
        >
          <Parsel config={() => System.import("@foxkey/account")} />
        </Route>
        <Route
          path="/financial"
          isPrivate={true}
          template={PanelTemplate}
          exact={false}
        >
          <Parsel config={() => System.import("@foxkey/financial")} />
        </Route>
        <Route
          path="/hr"
          isPrivate={true}
          template={PanelTemplate}
          exact={false}
        >
          <Parsel config={() => System.import("@foxkey/hr")} />
        </Route>
        <Route
          path="/inventory"
          isPrivate={true}
          template={PanelTemplate}
          exact={false}
        >
          <Parsel config={() => System.import("@foxkey/inventory")} />
        </Route>
        <Route path="/" isPrivate={true} template={CleanTemplate} exact={true}>
          <Redirect to="/financial" />
        </Route>
      </Switch>
    </Router>
  );
}
