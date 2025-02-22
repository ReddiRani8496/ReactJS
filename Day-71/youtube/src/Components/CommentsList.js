import React from "react";
import Comments from "./Comments";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comments key={index} data={comment} />
      <div className="border pl-5 ml-5 border-l-black">
        {comment.replies.length > 0 && (
          <CommentsList comments={comment.replies} />
        )}
      </div>
    </div>
  ));
};

export default CommentsList;
