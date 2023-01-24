
import * as Yup from "yup";
// npc expo install yup

export const validationSchema = Yup.object().shape({
    
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Enter a valid Email")
    .required("Please renter a registration Email"),
  password: Yup.string()
    .required("Please enter a password")
    .min(6, "password have 6 characters"),
  confirmPassword: Yup.string()
    .required("Please confirm password")
    .oneOf([Yup.ref("password")], "Password & confirm password does not match"),
});
