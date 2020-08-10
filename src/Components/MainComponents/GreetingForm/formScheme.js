import * as Yup from "yup";


const FormScheme = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Please, enter your email"),
    message: Yup.string()
        .required("Please, enter your message"),
    phone: Yup.string()
        .required("Please, enter your phone")
        .test('phone mask', 'Invalid phone number', value=> value&& !!value.match(/^\+[7]\([0-9]{3}\)\d{3}-\d{2}-\d{2}/))

});



export default FormScheme;