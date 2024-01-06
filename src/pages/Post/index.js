import "./Post.css";

import PostModel from "components/PostModel";
import posts from "json/posts.json";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

import DefaultPage from "components/DeafultPage";
import NotFound from "pages/NotFound";

const Post = () => {
  const params = useParams();
  const post = posts.find((post) => post.id === Number(params.id));
  if (!post) {
    return <NotFound />;
  }
  return (
    <DefaultPage>
      <PostModel
        backgroundImage={`/assets/posts/${post.id}/capa.png`}
        title={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
      </PostModel>
    </DefaultPage>
  );
};

export default Post;
