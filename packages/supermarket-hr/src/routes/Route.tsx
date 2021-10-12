import { Route as RouteComponent } from "react-router-dom";

type RouteProps = {
  children: React.ReactNode;
  path: string;
  exact?: boolean;
  template: ({ children }: { children: React.ReactNode }) => JSX.Element;
};
export default function Route({
  children,
  path,
  exact,
  template: Template,
}: RouteProps) {
  return (
    <RouteComponent path={path} exact={exact}>
      <Template>{children}</Template>
    </RouteComponent>
  );
}
