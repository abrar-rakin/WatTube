import React, { useState, useEffect } from "react";
import VideoList from "./VideoList";
import CS135VidDetail from "./CS135VidDetail";
import useCourseVideos from "../hooks/useCourseVideos";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./course.css";

const CS135 = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [firstVidList, search] = useCourseVideos(
    "Functional Programming (Racket): Lists and Cons software engenius"
  );
  const [secondVidList, f] = useCourseVideos(
    "Functional Programming (Racket): Recursion Introduction software engenius"
  );
  const [thirdVidList, f2] = useCourseVideos(
    "Functional Programming (Racket): Accumulative Recursion software engenius"
  );
  const [fourthVidList, f3] = useCourseVideos(
    "Intro to mutual recursion dr racket academy"
  );
  const [fifthVidList, f4] = useCourseVideos(
    "Intro to trees dr racket academy"
  );
  const [sixthVidList, f5] = useCourseVideos(
    "More with trees dr racket academy"
  );
  const [seventhVidList, f6] = useCourseVideos(
    "Racket Programming: Graph representations: nodes, kids, leaf?, grandkids colleen lewis"
  );

  const videos = [];

  if (firstVidList[0]) {
    videos.push(firstVidList[0]);
  }

  if (secondVidList[0]) {
    videos.push(secondVidList[0]);
  }

  if (thirdVidList[0]) {
    videos.push(thirdVidList[0]);
  }

  if (fourthVidList[0]) {
    videos.push(fourthVidList[0]);
  }

  if (fifthVidList[0]) {
    videos.push(fifthVidList[0]);
  }

  if (sixthVidList[0]) {
    videos.push(sixthVidList[0]);
  }

  if (seventhVidList[0]) {
    videos.push(seventhVidList[0]);
  }

  function check(videos) {
    let i;
    let count = 0;
    for (i = 0; i < videos.length; i++) {
      if (videos[i]) {
        count++;
      }
    }
    if (count === videos.length) {
      return true;
    }
  }

  if (check(videos)) {
    return (
      <div className="ui container replace">
        <Link to="/">
          <button className="btn2">
            <FontAwesomeIcon icon={faHome} />
          </button>
        </Link>
        {/* <SearchBar onFormSubmit={search || f} /> */}
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="eleven wide column">
              <CS135VidDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={(video) => setSelectedVideo(video)}
                videos={videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CS135;
