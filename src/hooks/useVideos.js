import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

// custom hook
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: "AIzaSyBntstdEcPzKfn_q92tdC1jhf9ClEV8M5k",
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
