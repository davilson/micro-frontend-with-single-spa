import { Link } from "react-router-dom";
import * as singleSpa from "single-spa";
import { useSessionStore } from "@foxkey/global-state";
import { foxkeyComponents } from "@foxkey/design-system";

import logoFox from "../../assets/fox-logo.svg";
import { Wrapper, Header, Main, Nav, Content } from "./style";

type PanelTemplateProps = {
  children: React.ReactNode;
};
export default function PanelTemplate({ children }: PanelTemplateProps) {
  const { setSession, user } = useSessionStore((state) => state);
  const { Button } = foxkeyComponents;

  const handleExit = () => {
    setSession({ user: null, token: null });
    singleSpa.navigateToUrl("/");
  };

  return (
    <Wrapper>
      <Header>
        <img src={logoFox} alt="Logo Fox" />
        <div className="header-actions">
          <span>{user.name}</span>
          <Button
            title="Sair"
            css={{ marginLeft: "$large" }}
            onClick={handleExit}
          />
        </div>
      </Header>
      <Main>
        <Nav>
          <ul>
            <li>
              <Link to="/financial">Financeiro</Link>
            </li>
            <li>
              <Link to="/hr">Recursos Humanos</Link>
            </li>
            <li>
              <Link to="/inventory">Controle de estoque</Link>
            </li>
          </ul>
        </Nav>
        <Content>{children}</Content>
      </Main>
    </Wrapper>
  );
}
