import "./styles.css";
import postsData from "./postsData";

export default function BlogPosts() {
  return (
    <div>
      <h2>Blog Posts </h2>
      {postsData?.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          tags={post.tags}
          reactions={post.reactions}
          views={post.views}
        />
      ))}
    </div>
  );
}
