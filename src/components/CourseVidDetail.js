import React from "react";

const CourseVidDetail = ({ video }) => {
  if (!video) {
    return (
      <div style={{ color: "white", fontWeight: "100", fontSize: "150%" }}>
        {/* These are videos that I personally found helpful while doing the course. */}
        <br />
        <br />
        <br />
        These are videos that I personally found helpful while doing the course.
        <br />
        <br />
        <br />
        Additionally here are some links for further references.
        <br />
        <br />
        <br />
        <a
          style={{ color: "#ffb26b" }}
          href="https://www.geeksforgeeks.org/pointers-c-examples/"
          target="_blank"
        >
          Pointers in C - GFG
          <br />
          <br />
        </a>
        <a
          style={{ color: "#ffb26b" }}
          href="https://www.geeksforgeeks.org/structures-c/"
          target="_blank"
        >
          Structures in C - GFG
          <br />
          <br />
        </a>
        <a
          style={{ color: "#ffb26b" }}
          href="https://www.geeksforgeeks.org/dynamic-memory-allocation-in-c-using-malloc-calloc-free-and-realloc/"
          target="_blank"
        >
          Memory management - GFG
          <br />
          <br />
        </a>
        <a
          style={{ color: "#ffb26b" }}
          href="https://www.geeksforgeeks.org/data-structures/linked-list/"
          target="_blank"
        >
          Linked Lists - GFG
          <br />
          <br />
        </a>
        <a
          style={{ color: "#ffb26b" }}
          href="https://www.geeksforgeeks.org/binary-tree-data-structure/"
          target="_blank"
        >
          Trees - GFG
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

export default CourseVidDetail;
