/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
// import Img from "gatsby-image";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import "regenerator-runtime/runtime";
// import LazyLoad from "react-lazyload";
import useModal from "../hooks/use-modal";

const GridGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [selectedButton, setSelectedButton] = useState("patio");
  const [publicId, setPublicId] = useState(null);

  const { openModal, closeModal, isOpen, Modal } = useModal({
    background: "rgba(0, 0, 0, 0.5)",
  });

  const handleSelect = (e) => {
    e.preventDefault();
    setSelectedButton(e.target.value);
  };

  const ServicesButton = ({ value, service }) => {
    return (
      <button
        value={value}
        className="services-button m-2 hover:text-green-500"
        onClick={(e) => handleSelect(e)}
      >
        {service}
      </button>
    );
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://res.cloudinary.com/stevelee/image/list/${selectedButton}.json`
        );
        const galleryData = await res.json();
        setGallery(galleryData.resources);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [selectedButton]);

  return (
    <section className="max-w-7xl flex justify-center mx-auto">
      <CloudinaryContext cloudName="stevelee">
        <div className="button-group flex justify-center">
          <ServicesButton value="patio" service="Patio" />
          <ServicesButton value="front-yard" service="Front Yard" />
          <ServicesButton value="driveway" service="Driveway" />
          <ServicesButton value="fire-place" service="Fire Place" />
          <ServicesButton value="patio-cover" service="Patio Cover" />
          <ServicesButton value="putting-green" service="Putting Green" />
          <ServicesButton value="barbeque" service="Barbecue" />
          <ServicesButton value="pool-deck" service="Pool Deck" />
          <ServicesButton value="fountain" service="Fountain" />
        </div>

        <div className="grid-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {gallery.length > 0
            ? gallery.map((data) => {
                return (
                  <GalleryImage
                    key={data.public_id}
                    publicId={data.public_id}
                    openModal={openModal}
                    setPublicId={setPublicId}
                  />
                );
              })
            : null}
        </div>
        {isOpen && publicId ? (
          <Modal>
            <div onClick={closeModal}>X</div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <Image publicId={publicId}>
                <Transformation
                  crop="scale"
                  width="1200"
                  height="800"
                  dpr="auto"
                  responsive_placeholder="blank"
                />
              </Image>
            </div>
          </Modal>
        ) : null}
      </CloudinaryContext>
    </section>
  );
};

export default GridGallery;

const GalleryImage = (props) => {
  const { publicId, openModal, setPublicId } = props;

  function pictureModal(e) {
    setPublicId(publicId);
    openModal(e);
    console.log("publicId", publicId);
  }

  return (
    <div className="grid-gallery__image mx-auto m-2 lg:m-4 gap-1 cursor-pointer">
      <Image onClick={pictureModal} publicId={publicId}>
        <Transformation
          crop="scale"
          width="300"
          height="200"
          dpr="auto"
          responsive_placeholder="blank"
        />
      </Image>
    </div>
  );
};
