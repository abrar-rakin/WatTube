import React from "react";

const CS135VidDetail = ({ video }) => {
  if (!video) {
    return (
      <div style={{ color: "white", fontWeight: "100", fontSize: "150%" }}>
        These are videos that I personally found helpful while doing the course.
        <br />
        <br />
        <br />
        <br />
        Additionally here are some links for further references.
        <br />
        <br />
        <br />
        <a
          style={{ color: "#ffb26b" }}
          href="https://anthony-zhang.me/University-Notes/CS135/CS135.html"
          target="_blank"
        >
          Notes - Anthony Zhang
          <br />
          <br />
        </a>
        <a
          style={{ color: "#ffb26b" }}
          href="https://docs.racket-lang.org/guide/Lists__Iteration__and_Recursion.html"
          target="_blank"
        >
          Recursion - Docs
          <br />
          <br />
        </a>
        <a
          style={{ color: "#ffb26b" }}
          href="https://beautifulracket.com/explainer/recursion.html"
          target="_blank"
        >
          More recursion - Beautiful Racket
          <br />
          <br />
        </a>
        <a
          style={{ color: "#ffb26b" }}
          href="https://docs.racket-lang.org/pict/Tree_Layout.html"
          target="_blank"
        >
          Trees - Docs
          <br />
          <br />
        </a>
        <a
          style={{ color: "#ffb26b" }}
          href="https://en.wikipedia.org/wiki/Mutual_recursion#:~:text=In%20mathematics%20and%20computer%20science,in%20terms%20of%20each%20other."
          target="_blank"
        >
          Mutual Recursion - Wikipedia
          <br />
          <br />
        </a>
      </div>
    );
  }

  // if (!video) {
  //   return <div style={{ color: "white" }}>Loading..</div>;
  // }

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

export default CS135VidDetail;
