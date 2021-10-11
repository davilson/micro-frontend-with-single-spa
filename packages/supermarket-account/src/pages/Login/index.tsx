import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as singleSpa from "single-spa";
import { Link } from "react-router-dom";

import { foxkeyComponents } from "@foxkey/design-system";
import { useSessionStore } from "@foxkey/global-state";

import { Wrapper } from "./style";
import LoginValidation from "../../core/validations/LoginValidation";
import LoginData from "../../core/interfaces/LoginDataInterface";
import LoginService from "../../core/services/LoginService";

export default function LoginPage() {
  const setSession = useSessionStore((state) => state.setSession);
  const { Title, Button, Input } = foxkeyComponents;
  const { control, handleSubmit } = useForm<LoginData>({
    resolver: yupResolver(LoginValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (data: LoginData) => {
    try {
      const sessionData = await LoginService.login(data);
      setSession(sessionData);
      singleSpa.navigateToUrl("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Wrapper action="post" onSubmit={handleSubmit(handleLogin)} noValidate>
      <Title>Login</Title>
      <Controller
        control={control}
        name="email"
        render={({
          field: { onChange, value, name, ref },
          fieldState: { error },
        }) => (
          <Input
            refInput={ref}
            type="email"
            value={value}
            onChange={onChange}
            placeholder="Informe seu e-mail"
            name={name}
            label="E-mail"
            css={{ marginTop: 20, width: "100%" }}
            error={error?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({
          field: { onChange, value, name, ref },
          fieldState: { error },
        }) => (
          <Input
            refInput={ref}
            type="password"
            value={value}
            onChange={onChange}
            placeholder="Informe sua senha"
            name={name}
            label="Senha"
            css={{ marginTop: 20, width: "100%" }}
            error={error?.message}
          />
        )}
      />
      <Link className="forgot-password" to="/forgot-password">
        Recuperar senha
      </Link>
      <Button
        title="Entrar"
        type="submit"
        css={{ marginTop: 20, width: "100%" }}
      />
      <Link className="register" to="/register">
        Cadastre-se
      </Link>
    </Wrapper>
  );
}
