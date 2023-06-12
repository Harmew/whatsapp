import React, { useEffect, useRef } from "react";

// Icons
import { IoClose } from "react-icons/io5";

function CapturePhoto({ hide, setImage }) {
  const videoRef = useRef(null);

  useEffect(() => {
    let stream;
    const startCamera = async () => {
      stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      videoRef.current.srcObject = stream;
    };
    startCamera();
    return () => {
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const capturePhoto = () => {
    const canvas = document.createElement("canvas");
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0, 300, 150);
    setImage(canvas.toDataURL("image/jpeg"));
    hide(false);
  };

  return (
    <div className="absolute h-auto w-2/6 top-1/4 left-1/3 bg-gray-900 gap-3 rounded-lg flex py-5 items-center justify-center">
      <div className="flex flex-col gap-4 w-full items-center justify-center">
        <div
          className="cursor-pointer flex justify-end align-self-end absolute top-2 right-2 "
          onClick={() => hide(false)}
        >
          <IoClose className="h-5 w-5 cursor-pointer" />
        </div>
        <div className="flex justify-center rounded-md overflow-hidden mx-2 my-5">
          <video id="video" width="400" autoPlay ref={videoRef}></video>
        </div>
        <button
          className="h-10 w-10 bg-white rounded-full cursor-pointer border-4 border-teal-light p-2"
          onClick={capturePhoto}
        ></button>
      </div>
    </div>
  );
}

export default CapturePhoto;
