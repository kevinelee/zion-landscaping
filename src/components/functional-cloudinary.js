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

  // const ServicesButton = ({service})=>{
  //   return (
  //     <button
  //         className="services-button m-2"
  //         onClick={this.handleSelect(service)}
  //       >
  //         {service}
  //       </button>
  //   )
  // }

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
          <button
            value="patio"
            className="services-button m-2"
            onClick={(e) => handleSelect(e)}
          >
            Patiozzz
          </button>
          <button
            value="front-yard"
            className="services-button m-2"
            onClick={(e) => handleSelect(e)}
          >
            Front Yard
          </button>
          <button
            value="driveway"
            className="services-button m-2"
            onClick={(e) => handleSelect(e)}
          >
            Driveway
          </button>
          <button
            value="fire-place"
            className="services-button m-2"
            onClick={(e) => handleSelect(e)}
          >
            Fire Place
          </button>
          <button
            value="patio-cover"
            className="services-button m-2"
            onClick={(e) => handleSelect(e)}
          >
            Patio Cover
          </button>
          <button
            value="putting-green"
            className="services-button m-2"
            onClick={(e) => handleSelect(e)}
          >
            Putting Green
          </button>
          <button
            value="barbeque"
            className="services-button m-2"
            onClick={(e) => handleSelect(e)}
          >
            Barbecue
          </button>
          <button
            value="fire-place"
            className="services-button m-2"
            onClick={(e) => handleSelect(e)}
          >
            Fire Place
          </button>
          <button
            value="pool-deck"
            className="services-button m-2"
            onClick={(e) => handleSelect(e)}
          >
            Pool Deck
          </button>
          <button
            value="fountain"
            className="services-button m-2"
            onClick={(e) => handleSelect(e)}
          >
            Fountain
          </button>
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
