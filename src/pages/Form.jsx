import React,{useState} from 'react';
import SignIn from '../component/SignIn';
import SignUp from '../component/SignUp';
import '../styles/pagesstyles/Form.scss';

const Form = (props) => {
const [signUpModal, setSignUpModal] = useState(true);

    const [signInModal, setSignInModal] = useState(false);
    const handleModals = (e) => {
        if (e.target.id === 'register') {
            setSignInModal(false)
            setSignUpModal(true)
        }
        else if(e.target.id ==='login') {
            setSignInModal(true)
            setSignUpModal(false)
        }
    }
    return (
        <div className='formulaire'>
           
            <div className="formulaireSignInSignUp">
                 <div className="button">
                  <button id='register' className={signUpModal ? 'active-btn':null} onClick={handleModals} >S'inscrire
      <i class="fa fa-user-plus" ></i>
            </button>
               <button id='login'  className={signInModal ? 'active-btn':null} onClick={handleModals} >Se connecter
      <i className="fa fa-user-plus"></i>
      </button>
          </div>
                {
                    signUpModal && <SignUp  />
                    }
                    {
                        signInModal && <SignIn  />
                    }
                </div>
        </div>
    );
};

export default Form;