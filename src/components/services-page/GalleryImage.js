import React from "react";
import Img from "react-cloudinary-lazy-image";

const GalleryImage = (props) => {
  const { publicId, openModal, setPublicId } = props;

  function pictureModal(e) {
    setPublicId(publicId);
    openModal(e);
  }

  return (
    <div
      onClick={pictureModal}
      className="rounded-md grid-gallery__image m-2 lg:m-4 gap-1 cursor-pointer relative pointer-events-none md:pointer-events-auto"
    >
      <div className="grid-gallery-image-modal z-10 inset-0 absolute flex justify-center items-center text-6xl">
        +
      </div>
      <Img
        style={{ borderRadius: "3px" }}
        className="rounded-md"
        publicId={publicId}
        cloudName={"stevelee"}
        imageName={publicId}
        fixed={{
          width: 300,
          height: 200,
        }}
        blurSize={60}
      />
    </div>
  );
};

export default GalleryImage;
