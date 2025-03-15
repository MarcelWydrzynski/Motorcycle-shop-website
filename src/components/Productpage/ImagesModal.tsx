import React from "react";

type ImagesModalProps = {
  motorcycleImage: string;
  onClose: () => void;
};

const ImagesModal: React.FC<ImagesModalProps> = ({
  motorcycleImage,
  onClose,
}) => {
  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === "modal-background") {
      onClose();
    }
  };

  return (
    <div
      id="modal-background"
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md"
      onClick={handleBackgroundClick}
    >
      <div className="relative bg-lightGrey rounded-lg">
        <button
          className="absolute top-2 right-2 text-5xl font-bold text-gray-800 hover:text-red-500"
          onClick={onClose}
        >
          X
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
