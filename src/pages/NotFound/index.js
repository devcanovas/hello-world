import ButtonDefault from "components/ButtonDefault";
import styles from "./NotFound.module.css";
import erro404 from "assets/erro_404.png";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>

        <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial.
        </p>

        <div 
        className={styles.botaoContainer}
        onClick={() => navigate('/')}
        >
          <ButtonDefault text={'Voltar'} size="lg" />
        </div>

        <img
          className={styles.imagemCachorro}
          src={erro404}
          alt="Cachorro de óculos e vestido como humano"
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  );
};

export default NotFound;
