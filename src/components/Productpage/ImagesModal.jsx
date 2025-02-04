import React from "react";

const ImagesModal = ({ motorcycleImage, onClose }) => {
  const handleBackgroundClick = (e) => {
    if (e.target.id === "modal-background") {
      onClose();
    }
  };

  return (
    <div
      id="modal-background"
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md"
      onClick={handleBackgroundClick}
    >
      <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-[80%] max-h-[80%]">
        <button
          className="absolute top-2 right-2 text-xl font-bold text-gray-800 hover:text-red-500"
          onClick={onClose}
        >
          Close X
        </button>
        <img
          src={motorcycleImage}
          alt="Motorcycle"
          className="max-w-full max-h-[80vh] rounded-md"
        />
      </div>
    </div>
  );
};

export default ImagesModal;
