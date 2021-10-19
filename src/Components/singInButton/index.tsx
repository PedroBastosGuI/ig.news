//importando os icones do react 

import {FaGithub} from 'react-icons/fa';
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss';


export function SignInButton(){
// se o usuario tiver logado tenha tal ação
    const isUserLoggedIn = true;
    return isUserLoggedIn ? (
        <button
         type='button'
         className={styles.signInButton}
         >
            <FaGithub color="04d361"/>
         Pedro Bastos 
         <FiX color="737380" 
         className={styles.closeIcon}
         />

        </button>
    ) : (
        <button
         type='button'
         className={styles.signInButton}
         >
            <FaGithub color="eba417"/>
         Entre com o Github 
        </button>
    )
}