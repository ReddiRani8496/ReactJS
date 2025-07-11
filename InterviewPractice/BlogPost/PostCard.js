// PostCard.js
//👍 likes | 👎 dislikes | 👁️ views
export default function PostCard({ title, body, tags, reactions, views }) {
  return (
    <div className="postCard">
      <h1>{title}</h1>
      <p>{body}</p>
      <div>
        {tags?.map((tag) => (
          <span className="tag" key={tag}>
            #{tag}{" "}
          </span>
        ))}
      </div>
      <p>
        👍 {reactions.likes} | 👎 {reactions.dislikes} | 👁️ {views}
      </p>
    </div>
  );
}
