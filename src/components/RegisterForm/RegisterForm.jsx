import { useForm } from 'react-hook-form';
import './RegisterForm.css';
import SubmitButton from '../SubmitButton/SubmitButton';
import FormInput from '../FormInput/FormInput';


const RegisterForm = () => {

     const { handleSubmit, register, formState } = useForm( {
          defaultValues: {
               user: "",
               email: "",
               password: "",
          }
     } );

     const onSubmit = ( values ) => {
          console.log( 'Submit: ', values );

     };

     return (
          <div className='form-container'>
               <form onSubmit={ handleSubmit( onSubmit ) } className='register-form'>
                    <h2>Sign In</h2>
                    <FormInput
                         id='user'
                         type='text'
                         placeholder='Username'
                         register={ register }
                         validation={ {
                              required: { value: true, message: 'Nombre de usuario requerido' },
                              minLength: { value: 4, message: 'Nombre de usuario debe tener mínimo 6 caracteres' },
                         } }
                         error={ formState.errors.user }
                    />
                    <FormInput
                         id='email'
                         type='email'
                         placeholder='Email'
                         register={ register }
                         validation={ {
                              required: { value: true, message: 'Correo electrónico requerido' },
                              pattern: {
                                   value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                   message: "Por favor, introduce un correo electrónico válido en formato ejemplo@dominio.com.",
                              },
                         } }
                         error={ formState.errors.email }
                    />
                    <FormInput
                         id='password'
                         type='password'
                         placeholder='Password'
                         register={ register }
                         validation={ {
                              required: { value: true, message: 'Contraseña requerida' },
                              pattern: {
                                   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                   message: "La contraseña debe incluir números, letras Mayúsculas y minúsculas y como máximos 8 caracteres",
                              },
                         } }
                         error={ formState.errors.password }
                    />
                    <SubmitButton isDirty={ formState.isDirty } />
               </form>
          </div>
     );
};

export default RegisterForm;