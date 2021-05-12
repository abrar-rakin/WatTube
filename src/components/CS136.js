import React, { useState, useEffect } from "react";
import VideoList from "./VideoList";
import CourseVidDetail from "./CourseVidDetail";
import useCourseVideos from "../hooks/useCourseVideos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./course.css";

const CS136 = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [firstVidList, search] = useCourseVideos(
    "big O notation web dev simplified"
  );
  // const [secondVidList, f] = useCourseVideos("Big O cs dojo");
  // const [thirdVidList, f2] = useCourseVideos("structures in C neso academy");
  const [fourthVidList, f3] = useCourseVideos("pointers in C/c++ freecodecamp");
  const [fifthVidList, f4] = useCourseVideos(
    "strings in C Naresh Technologies"
  );
  const [sixthVidList, f5] = useCourseVideos(
    "pointers and dynamic memory stack vs heap my code school"
  );
  const [seventhVidList, f6] = useCourseVideos(
    "memory leak in C/C++ my code school"
  );
  const [eighthVidList, f7] = useCourseVideos(
    "dynamic memory naresh technologies"
  );
  // const [ninthVidList, f8] = useCourseVideos(
  //   "How to manage memory with malloc, calloc, realloc, and free in C engineer man"
  // );
  // const [tenthVidList, f9] = useCourseVideos(
  //   "when to free memory in C codevault"
  // );
  const [eleventhVidList, f10] = useCourseVideos("linked list neso academy");
  const [twelfthVidList, f11] = useCourseVideos(
    "doubly linked list my code school"
  );
  const [thirteenthVidList, f12] = useCourseVideos(
    "Linked List Data Structure - How Linked List works | All operations, Types & Applications simple snippets"
  );

  const videos = [];

  if (firstVidList[0]) {
    videos.push(firstVidList[0]);
  }

  // if (secondVidList[0]) {
  //   videos.push(secondVidList[0]);
  // }

  // if (thirdVidList[0]) {
  //   videos.push(thirdVidList[0]);
  // }

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

  if (eighthVidList[0]) {
    videos.push(eighthVidList[0]);
  }

  // if (ninthVidList[0]) {
  //   videos.push(ninthVidList[0]);
  // }

  // if (tenthVidList[0]) {
  //   videos.push(tenthVidList[0]);
  // }

  if (eleventhVidList[0]) {
    videos.push(eleventhVidList[0]);
  }

  if (twelfthVidList[0]) {
    videos.push(twelfthVidList[0]);
  }

  if (thirteenthVidList[0]) {
    videos.push(thirteenthVidList[0]);
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
        <div className="ui stackable grid">
          <div className="ui row">
            <div className="eleven wide column">
              <CourseVidDetail video={selectedVideo} />
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

export default CS136;
