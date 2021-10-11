import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

import { foxkeyComponents } from "@foxkey/design-system";

import { Wrapper } from "./style";
import ForgotData from "../../core/interfaces/ForgotDataInterface";
import ForgotValidation from "../../core/validations/ForgotValidation";

export default function ForgotPasswordPage() {
  const { Title, Button, Input } = foxkeyComponents;
  const { control, handleSubmit } = useForm<ForgotData>({
    resolver: yupResolver(ForgotValidation),
    defaultValues: {
      email: "",
    },
  });

  const handleForgot = async (data: ForgotData) => {
    alert("Este modulo ainda está em desenvolvimento.");
  };

  return (
    <Wrapper action="post" onSubmit={handleSubmit(handleForgot)} noValidate>
      <Title>Recuperar</Title>
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
      <Link className="login" to="/login">
        Fazer login
      </Link>
      <Button
        title="Enviar"
        type="submit"
        css={{ marginTop: 20, width: "100%" }}
      />
    </Wrapper>
  );
}
