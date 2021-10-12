import { BrowserRouter, Switch } from "react-router-dom";
import { foxkeyComponents } from "@foxkey/design-system";

import Route from "./Route";
import DefaultTemplate from "../templates/Default";

export default function Routes() {
  const { Title } = foxkeyComponents;
  return (
    <BrowserRouter basename="financial">
      <Switch>
        <Route path="/" template={DefaultTemplate} exact={true}>
          <Title>Financeiro</Title>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
