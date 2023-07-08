import React, { useState } from "react";
import { MdEdit } from "react-icons/md";


const ImageUploader = ({ selectedImage, setSelectedImage }) => {
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const customDivStyle = {
    backgroundImage: `url(${selectedImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div>
      <div
        id="customDiv"
        className="w-28 h-28 bg-black rounded-full mt-10 relative"
        style={customDivStyle}
      >
        <div className="w-10 h-10 right-0 absolute bg-blue-700 rounded-full flex justify-center items-center">
          <MdEdit className="w-6 h-6 text-white" />
        </div>

        <input
          type="file"
          className="bg-slate-500 w-full h-full rounded-full opacity-0 absolute"
          onChange={handleImageSelect}
        />
      </div>
    </div>
  );
};

export default ImageUploader;
