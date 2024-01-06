import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>print('Olá, Mundo!');</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Matheus Canovas, desenvolvedor Full-stack. Aqui compartilho vários conhecimentos, espero que
          aprenda algo novo :)
        </p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
        />
        <img
          className={styles.minhaFoto}
          src="https://github.com/devcanovas.png"
          alt="Minha foto do github"
        />
      </div>
    </div>
  );
};

export default Banner;
