import styles from './styles.module.scss';

// tipagem 
interface SubscribeButtonProps{
    priceId: string;
}

export function SubscribeButton({priceId}:SubscribeButtonProps){
return(
    <button
    type='button'
    className={styles.subscribeButton}
    >
        Inscreva-se
    </button>
)

}