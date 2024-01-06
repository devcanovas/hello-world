import PostCard from "components/PostCard";
import posts from "json/posts.json";
import styles from "./Inicio.module.css";

const Inicio = () => {
  return (
    <ul className={styles.posts} style={{ marginTop: '-2.5rem' }}>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        );
      })}
    </ul>
  );
};

export default Inicio;
