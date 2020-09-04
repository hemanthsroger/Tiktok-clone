import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";
import axios from "./axios";

function App() {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setvideos(response.data);
      return response;
    }

    fetchPosts();
  }, []);

  console.log("Response ", videos);
  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({ url, user, description, song, likes, messages, shares, _id }) => (
            <Video
              key={_id}
              url={url}
              user={user}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
