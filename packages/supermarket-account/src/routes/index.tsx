import {
  BrowserRouter,
  Switch,
  Redirect,
  Route as RouteComponent,
} from "react-router-dom";

import Route from "./Route";
import DefaultTemplate from "../templates/Default";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import ForgotPasswordPage from "../pages/ForgotPassword";

export default function Routes() {
  return (
    <BrowserRouter basename="account">
      <Switch>
        <Route path="/login" template={DefaultTemplate} exact={true}>
          <LoginPage />
        </Route>
        <Route path="/register" template={DefaultTemplate} exact={true}>
          <RegisterPage />
        </Route>
        <Route path="/forgot-password" template={DefaultTemplate} exact={true}>
          <ForgotPasswordPage />
        </Route>
        <RouteComponent path="/" exact={true}>
          <Redirect to="/login" />
        </RouteComponent>
      </Switch>
    </BrowserRouter>
  );
}
