import React, { useState, useRef } from "react";

export default function Home() {
  const [images, setImages] = useState([null, null, null]);
  const fileInputRefs = [useRef(), useRef(), useRef()];

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (index, e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    if (files && files[0] && files[0].type.startsWith("image/")) {
      handleFileChange(index, files[0]);
    }
  };

  const handleFileChange = (index, file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImages = [...images];
        newImages[index] = e.target.result;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = (index) => {
    fileInputRefs[index].current.click();
  };

  return (
    <div>
      <div className="w-full p-4 flex flex-col gap-5 items-center">
        <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
        <p className="text-gray-700">
          This is the main content area of the home page.
        </p>
        <div className="flex flex-col gap-4">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`w-[230px] h-[230px] border border-blue-700 border-[5px] relative flex items-center justify-center cursor-pointer ${
                !images[index] ? "bg-gray-100" : ""
              }`}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(index, e)}
              onClick={() => handleClick(index)}
            >
              {images[index] ? (
                <img
                  src={images[index]}
                  alt={`Uploaded image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-4">
                  <p className="text-gray-500">
                    Drag & drop an image here or click to upload
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    (Image {index + 1})
                  </p>
                </div>
              )}
              <input
                ref={fileInputRefs[index]}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    handleFileChange(index, e.target.files[0]);
                  }
                }}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-0">
          <p className="font-light text-lg">A NEW DAY ONE</p>
          <p className="font-light text-lg">7.16.2025 | LA</p>
        </div>
      </div>
    </div>
  );
}
