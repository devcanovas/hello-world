import styles from './PostModel.module.css'

const PostModel = ({ children, backgroundImage, title }) => {
    return(
        <article className={styles.postModeloContainer}>
            <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>

            <h2 className={styles.titulo}>
                {title}
            </h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}

export default PostModel