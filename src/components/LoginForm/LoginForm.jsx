import { useId } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'; 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { logIn } from '../../redux/auth/operations';
import css from "./LoginForm.module.css"

const addContactValidation = Yup.object().shape({
    email: Yup.string()
     .email("Email format")
     .required('The field is required'),
    password: Yup.string()
     .min(7, 'Too short!')
     .max(50, 'Too long!')
     .required('The field is required'),
 });
  


export default function LoginForm () {
  const fieldID = useId();
  const dispatch = useDispatch();

  const handleSubmit =(values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
      }

    return <Formik
      initialValues={{ email: "", password: ""}}
      onSubmit={handleSubmit}
      validationSchema={addContactValidation}   
    >
         <Form className={css.formcontainer}>
          <label htmlFor={`${fieldID}-email`}>Email
            <Field className={css.forminput} type="email" name="email" id={`${fieldID}-email`} />
            <ErrorMessage className={css.attention} name="email" component="div" />
          </label>
          
          <label htmlFor={`${fieldID}-password`}>Password
            <Field className={css.forminput} type="password" name="password" id={`${fieldID}-password`} />
            <ErrorMessage className={css.attention} name="password" component="div" />
          </label>
          
           <button className={css.addButton} type="submit"  >
             Log In
           </button>
        </Form>
      
     </Formik>
   
 }