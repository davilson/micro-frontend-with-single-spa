import { BrowserRouter, Switch } from "react-router-dom";

import Route from "./Route";
import DefaultTemplate from "../templates/Default";

export default function Routes() {
  return (
    <BrowserRouter basename="financial">
      <Switch>
        <Route path="/" template={DefaultTemplate} exact={true}>
          <h1>Recursos humano</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
