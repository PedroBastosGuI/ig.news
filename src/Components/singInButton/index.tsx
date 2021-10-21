//importando os icones do react 

import {FaGithub} from 'react-icons/fa';
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss';


//ativando bottom para a autenticação 

import {signIn,signOut, useSession} from 'next-auth/client'

export function SignInButton(){

//useSession cria uma sessao para o usuario 
// se o usuario tiver logado tenha tal ação
const[session] = useSession()

console.log(session)

    return session ? (
        <button
         type='button'
         className={styles.signInButton}
         >
            <FaGithub color="04d361"/>
         Pedro Bastos 
         <FiX color="737380" 
         className={styles.closeIcon}
         onClick={() => signOut()}
         />

        </button>
    ) : (
        <button
         type='button'
         className={styles.signInButton}
         onClick={() => signIn('github')}
         >
            <FaGithub color="eba417"/>
         Entre com o Github 
        </button>
    )
}