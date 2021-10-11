import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

import { foxkeyComponents } from "@foxkey/design-system";

import { Wrapper } from "./style";
import RegisterValidation from "../../core/validations/RegisterValidation";
import RegisterData from "../../core/interfaces/RegisterDataInterface";

export default function RegisterPage() {
  const { Title, Button, Input } = foxkeyComponents;
  const { control, handleSubmit } = useForm<RegisterData>({
    resolver: yupResolver(RegisterValidation),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleRegister = async (data: RegisterData) => {
    alert("Este modulo ainda está em desenvolvimento.");
  };

  return (
    <Wrapper action="post" onSubmit={handleSubmit(handleRegister)} noValidate>
      <Title>Cadastro</Title>
      <Controller
        control={control}
        name="name"
        render={({
          field: { onChange, value, name, ref },
          fieldState: { error },
        }) => (
          <Input
            refInput={ref}
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Informe seu nome"
            name={name}
            label="Nome"
            css={{ marginTop: 20, width: "100%" }}
            error={error?.message}
          />
        )}
      />
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
      <Button
        title="Entrar"
        type="submit"
        css={{ marginTop: 20, width: "100%" }}
      />
      <Link className="login" to="/login">
        Fazer login
      </Link>
    </Wrapper>
  );
}
