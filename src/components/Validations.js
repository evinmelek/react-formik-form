import * as yup  from "yup";

const Validations = yup.object().shape({
    email: yup
    .string()
    .email(),
    password: yup
    .string()
    .min(8, "Password should be more than 8 chars")
    .required(),
    passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")])
    .required()
});

export default Validations;