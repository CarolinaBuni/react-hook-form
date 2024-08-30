import './FormInput.css';

const FormInput = ( { id, type, placeholder, register, validation, error } ) => {
     return (
          <div className='form-group'>
               <input
                    { ...register( id, validation ) }
                    placeholder={ placeholder }
                    type={ type }
                    id={ id }
                    className='form-input'
               />
               { error ? <p className='error-message'>{ error.message }</p> : null }
          </div>
     );
};

export default FormInput;