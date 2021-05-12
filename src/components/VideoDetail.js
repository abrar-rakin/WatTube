import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div style={{ color: "white" }}>
        Loading..
        <br />
        If it takes more than a few seconds, the YouTube API key has probably
        reached its quota. It will work again after few hours.
        <br />
        <br />
        You can see a demo of this app{" "}
        <a
          href="https://abrarrakin.netlify.app/wattube.gif"
          style={{ textDecoration: "underline", color: "#ffb26b" }}
        >
          here
        </a>
        .
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
