import * as yup from "yup";

export default yup.object().shape({
  email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
  password: yup.string().required("Campo obrigatório"),
});
