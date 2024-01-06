import styles from './ButtonDefault.module.css'

const ButtonDefault = ({ text, size }) => {
    return (
        <button className={`
        ${styles.botaoPrincipal} 
        ${styles[size]}`}>{text}</button>
    )
}

export default ButtonDefault