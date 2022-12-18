import { useEffect, useRef } from "react";
import { useUserMedia } from "./hooks/useUserMedia";

function App() {
  const { hasGetUserMedia } = useUserMedia();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (hasGetUserMedia()) {
      navigator.getUserMedia(
        { audio: true, video: true },
        (stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, []);

  return (
    <>
      <video ref={videoRef} autoPlay></video>
    </>
  );
}

export default App;
