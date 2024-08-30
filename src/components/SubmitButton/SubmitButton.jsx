import './SubmitButton.css';

const SubmitButton = ({ isDirty }) => {
     return (
          <button className='submit-button' type='submit' disabled={ !isDirty }>Registrar</button>
     );
};

export default SubmitButton;