import { SignInButton } from '../singInButton'
import styles from './styles.module.scss'




export function Header() {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.HeaderContent}>
                <img src='/images/logo.svg' alt='logo'></img>

                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Post</a>
                </nav>

            <SignInButton /> 
            </div>
        </header>
    )
}