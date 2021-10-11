import { Route as RouteComponent, Redirect } from "react-router-dom";
import { useSessionStore } from "@foxkey/global-state";

type RouteProps = {
  children: React.ReactNode;
  path: string;
  exact?: boolean;
  isPrivate: boolean;
  template: ({ children }: { children: React.ReactNode }) => JSX.Element;
};
export default function Route({
  children,
  path,
  exact,
  isPrivate,
  template: Template,
}: RouteProps) {
  const token = useSessionStore((state) => state.token);
  if (isPrivate && !token) {
    return <Redirect to="/account" />;
  }
  return (
    <RouteComponent path={path} exact={exact}>
      <Template>{children}</Template>
    </RouteComponent>
  );
}
