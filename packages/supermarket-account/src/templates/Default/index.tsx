import { Wrapper, AreaLogo, AreaForm } from "./style";
import foxLogo from "../../assets/fox-logo.svg";

type DefaultTemplateProps = {
  children: React.ReactNode;
};

export default function DefaultTemplate({ children }: DefaultTemplateProps) {
  return (
    <Wrapper>
      <AreaLogo>
        <img src={foxLogo} alt="Fox logo" />
        <p>
          O sistema de autenticação deste projeto é fake, portanto, tem usuário
          e senha fixo somente para simular a autenticação.
          <br />
          <br />
          Para acessar utilize os dados abaixo:
          <br />
          <br />
          <b>E-mail: </b>admin@email.com
          <br />
          <b>Senha: </b>admin1234
        </p>
      </AreaLogo>
      <AreaForm>{children}</AreaForm>
    </Wrapper>
  );
}
