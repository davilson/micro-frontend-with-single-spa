import { Route as RouteComponent, Redirect } from "react-router-dom";
import { useSessionStore } from "@foxkey/global-state";

type RouteProps = {
  path: string;
  exact?: boolean;
  isPrivate: boolean;
  template: ({ children }: { children: React.ReactNode }) => JSX.Element;
  component: () => JSX.Element;
};
export default function Route({
  component: Component,
  path,
  exact,
  isPrivate,
  template: Template,
}: RouteProps) {
  const token = useSessionStore((state) => state.token);
  if (isPrivate && !token) {
    return <Redirect to="/account" />;
  }
  const Page = () => (
    <Template>
      <Component />
    </Template>
  );
  return <RouteComponent path={path} exact={exact} component={Page} />;
}
