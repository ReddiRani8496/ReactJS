import React from "react";

const VideoCard = ({ info }) => {
  return (
    <div className="p-2 m-2 w-72 shadow-lg rounded-md">
      <img
        src={info?.snippet?.thumbnails?.medium?.url}
        alt={info?.snippet?.title}
      />
      <h2 className="font-bold p-2">{info?.snippet?.title}</h2>
      <p>{info?.snippet?.channelTitle}</p>
      <p> {info?.statistics?.viewCount} Views</p>
    </div>
  );
};

export default VideoCard;

// higher order component
export const AddVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-400">
      <VideoCard info={info} />
    </div>
  );
};
