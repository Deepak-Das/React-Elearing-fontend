import React, { useState } from "react";

const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <div>
      <video controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const VideoPlaylist = ({
  videos,
}: {
  videos: { title: string; url: string }[];
}) => {
  const [currentVideo, setCurrentVideo] = useState<string>("");

  const playVideo = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
  };

  return (
    <div>
      <h2>Video Playlist</h2>
      {videos.map((video, index) => (
        <div key={index} onClick={() => playVideo(video.url)}>
          {video.title}
        </div>
      ))}
      {currentVideo && <VideoPlayer videoUrl={currentVideo} />}
    </div>
  );
};

const PlayList = () => {
  const initialVideos = [
    { title: "Video 1", url: "video1.mp4" },
    { title: "Video 2", url: "video2.mp4" },
    // Add more videos as needed
  ];

  return (
    <div>
      <VideoPlaylist videos={initialVideos} />
    </div>
  );
};

export default PlayList;
