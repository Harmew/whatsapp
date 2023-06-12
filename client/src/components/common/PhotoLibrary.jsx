import React from "react";

// Next
import Image from "next/image";

// Icons
import { IoClose } from "react-icons/io5";

function PhotoLibrary({ setImage, hidePhotoLibrary }) {
  const images = [
    "/avatars/1.png",
    "/avatars/2.png",
    "/avatars/3.png",
    "/avatars/4.png",
    "/avatars/5.png",
    "/avatars/6.png",
    "/avatars/7.png",
    "/avatars/8.png",
    "/avatars/9.png",
  ];

  return (
    <div className="fixed top-0 left-0 max-h-[100vh] max-w-[100vw] h-full w-full flex justify-center items-center">
      <div className="h-max w-max bg-gray-900 gap-6 rounded-lg p-2">
        <div
          className="pe-2 pt-2 cursor-pointer flex justify-end"
          onClick={() => hidePhotoLibrary(false)}
        >
          <IoClose className="h-5 w-5 cursor-pointer" />
        </div>
        <div className="grid grid-cols-3 justify-center items-center gap-8 p-6 w-full ">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => {
                setImage(images[index]);
                hidePhotoLibrary(false);
              }}
            >
              <div className="h-24 w-24 cursor-pointer relative">
                <Image src={image} alt="Avatar" fill sizes="6rem" as="image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PhotoLibrary;
