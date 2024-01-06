import Post from "components/Post";
import posts from "json/posts.json";
import styles from "./Inicio.module.css";

const Inicio = () => {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Post post={post} />
          </li>
        );
      })}
    </ul>
  );
};

export default Inicio;
