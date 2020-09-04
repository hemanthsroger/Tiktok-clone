import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, user, description, song, likes, messages, shares }) {
  const videoRef = useRef(null);
  const [playing, setplaying] = useState(false);

  const handleVideoPlayback = () => {
    if (playing) {
      videoRef.current.pause();
      setplaying(false);
    } else {
      videoRef.current.play();
      setplaying(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPlayback}
        className="video_player"
        loop
        ref={videoRef}
        src={url}
      />

      <VideoFooter user={user} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
