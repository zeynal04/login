import * as yup from "yup";

export const formRegisterSchema = yup.object().shape({
    fullname: yup.string().required("burani doldurun"),
    username: yup.string().required("burani doldurun"),
    email: yup
    .string()
    .email("dogru email qeyd edin")
    .required("burani doldurun"),
    password: yup.string().required("burani doldurun"),
    repeatPassword: yup
    .string()
    .required()
    .oneOf(
        [yup.ref("password"),yup.password],"must match password"
    ),
    term: yup.boolean().oneOf([true], "please confirm the terms").required(),
})