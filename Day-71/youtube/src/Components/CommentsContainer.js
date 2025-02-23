import React from "react";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "aarya",
    text: "lorem Ipsum kdfs  kfd sart",
    replies: [
      {
        name: "aarya",
        text: "lorem Ipsum kdfs  kfd sart",
        replies: [
          {
            name: "aarya",
            text: "lorem Ipsum kdfs  kfd sart",
            replies: [
              {
                name: "aarya",
                text: "lorem Ipsum kdfs  kfd sart",
                replies: [
                  {
                    name: "aarya",
                    text: "lorem Ipsum kdfs  kfd sart",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "aarya",
        text: "lorem Ipsum kdfs  kfd sart",
        replies: [
          {
            name: "aarya",
            text: "lorem Ipsum kdfs  kfd sart",
            replies: [],
          },
        ],
      },
      {
        name: "aarya",
        text: "lorem Ipsum kdfs  kfd sart",
        replies: [],
      },
    ],
  },
  {
    name: "aarya",
    text: "lorem Ipsum kdfs  kfd sart",
    replies: [
      {
        name: "aarya",
        text: "lorem Ipsum kdfs  kfd sart",
        replies: [],
      },
      {
        name: "aarya",
        text: "lorem Ipsum kdfs  kfd sart",
        replies: [],
      },
    ],
  },
  {
    name: "aarya",
    text: "lorem Ipsum kdfs  kfd sart",
    replies: [],
  },
  {
    name: "aarya",
    text: "lorem Ipsum kdfs  kfd sart",
    replies: [],
  },
  {
    name: "aarya",
    text: "lorem Ipsum kdfs  kfd sart",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="p-3 m-3">
      <h1 className="font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
