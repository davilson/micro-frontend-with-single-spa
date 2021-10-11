import LoginData from "../interfaces/LoginDataInterface";
import { SessionData } from "@foxkey/global-state";

const login = async (data: LoginData): Promise<SessionData> => {
  if (data.email !== "admin@email.com" && data.password !== "admin1234") {
    throw new Error("Usuário não encontrado, tente novamente!");
  }

  return {
    token: "AUTHENTICATION_JWT_HERE",
    user: {
      name: "Davilson de Castro",
      email: "davilsondecastro@gmail.com",
    },
  };
};

export default {
  login,
};
