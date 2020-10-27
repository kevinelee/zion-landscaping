/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { CloudinaryContext } from "cloudinary-react";
import "regenerator-runtime/runtime";
import Img from "react-cloudinary-lazy-image";
import useModal from "../hooks/use-modal";
import CloseIcon from "./Svg/CloseIcon";
import DropDown from "./dropdown";

const GridGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [selectedButton, setSelectedButton] = useState("patio");
  const [publicId, setPublicId] = useState(null);
  const [isExpanded, toggleExpansion] = useState(false);
  const [serviceSelect, setService] = useState("Patio");

  const { openModal, closeModal, isOpen, Modal } = useModal({
    background: "rgba(0, 0, 0, 0.5)",
  });

  const handleSelect = (e) => {
    e.preventDefault();
    setSelectedButton(e.target.value);
    toggleExpansion(!isExpanded);
    setService(e.target.id);
  };

  const ServicesButton = ({ value, service }) => {
    return (
      <button
        value={value}
        className={`${
          service === serviceSelect
            ? `text-green-500 lg:border-2 border-green-500 rounded`
            : null
        } services-button lg:px-3 py-1 mx-1 hover:text-green-500`}
        onClick={(e) => handleSelect(e)}
        id={service}
      >
        {service}
      </button>
    );
  };

  const GalleryImage = (props) => {
    const { publicId, openModal, setPublicId } = props;

    function pictureModal(e) {
      setPublicId(publicId);
      openModal(e);
      console.log("publicId", publicId);
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

  const ServicesArr = [
    <ServicesButton value="patio" service="Patio" />,
    <ServicesButton value="front-yard" service="Front Yard" />,
    <ServicesButton value="driveway" service="Driveway" />,
    <ServicesButton value="patio-cover" service="Patio Cover" />,
    <ServicesButton value="putting-green" service="Putting Green" />,
    <ServicesButton value="barbeque" service="Barbecue" />,
    <ServicesButton value="pool-deck" service="Pool Deck" />,
    <ServicesButton value="fountain" service="Fountain" />,
  ];

  return (
    <section className="max-w-7xl flex justify-center mx-auto">
      <CloudinaryContext cloudName="stevelee">
        <div
          className={`${
            isExpanded ? `text-green-500` : null
          } lg:text-black text-xl lg:flex mx-auto text-5xl font-semibold mb-1 hidden`}
          // onClick={() => toggleExpansion(!isExpanded)}
        >
          Services
        </div>

        <DropDown services={ServicesArr} />

        <div
          className={`block text-green-500
           lg:hidden text-center mt-4 mb-3`}
        >
          {serviceSelect}
        </div>

        <div className={`hidden lg:block flex flex-col text-center `}>
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
                  <div key={data.public_id}>
                    <GalleryImage
                      key={data.public_id}
                      publicId={data.public_id}
                      openModal={openModal}
                      setPublicId={setPublicId}
                    />
                  </div>
                );
              })
            : null}
        </div>
        {isOpen && publicId ? (
          <Modal>
            <div className="flex justify-end p-2" onClick={closeModal}>
              <CloseIcon className="w-6 h-6" fill="black" />
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
              <Img
                style={{ borderRadius: "4px" }}
                publicId={publicId}
                cloudName={"stevelee"}
                imageName={publicId}
                fixed={{
                  width: 800,
                  height: 600,
                }}
                blurSize={60}
              />
            </div>
          </Modal>
        ) : null}
      </CloudinaryContext>
    </section>
  );
};

export default GridGallery;
