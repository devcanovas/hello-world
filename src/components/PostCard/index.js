import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import ButtonDefault from "components/ButtonDefault";

const PostCard = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`assets/posts/${post.id}/capa.png`}
          alt="Capa do post"
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>

        <ButtonDefault text={'Ler'} />
      </div>
    </Link>
  );
};

export default PostCard;
