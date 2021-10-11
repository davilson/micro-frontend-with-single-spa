import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
  password: yup.string().required("Campo obrigatório"),
});
