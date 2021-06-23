import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const SearchPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("university of waterloo");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <Link to="/">
        <button className="btn2">
          <FontAwesomeIcon icon={faHome} />
        </button>
      </Link>
      <SearchBar onFormSubmit={search} />
      <div className="ui stackable grid" style={{ marginLeft: "0%" }}>
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
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
};

export default SearchPage;
