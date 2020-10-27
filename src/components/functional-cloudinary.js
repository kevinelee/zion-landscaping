/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
// import Img from "gatsby-image";
// import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import { CloudinaryContext } from "cloudinary-react";
import "regenerator-runtime/runtime";
import Img from "react-cloudinary-lazy-image";
import useModal from "../hooks/use-modal";
import CloseIcon from "./Svg/CloseIcon";

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
          service === serviceSelect ? `text-green-500` : null
        } services-button m-2 hover:text-green-500`}
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
        className="rounded-md grid-gallery__image m-2 lg:m-4 gap-1 cursor-pointer"
      >
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

  return (
    <section className="max-w-7xl flex justify-center mx-auto">
      <CloudinaryContext cloudName="stevelee">
        <button
          className={`${
            isExpanded ? `text-green-500` : null
          } lg:text-black flex mx-auto text-2xl font-semibold`}
          onClick={() => toggleExpansion(!isExpanded)}
        >
          Services
        </button>

        <div className="relative inline-block text-left">
          <div>
            <span className="rounded-md shadow-sm">
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </span>
          </div>

          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
            <div className="rounded-md bg-white shadow-xs">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <ServicesButton value="patio" service="Patio" />
                <ServicesButton value="front-yard" service="Front Yard" />
                <ServicesButton value="driveway" service="Driveway" />
                <ServicesButton value="patio-cover" service="Patio Cover" />
                <ServicesButton value="putting-green" service="Putting Green" />
                <ServicesButton value="barbeque" service="Barbecue" />
                <ServicesButton value="pool-deck" service="Pool Deck" />
                <ServicesButton value="fountain" service="Fountain" />
              </div>
            </div>
          </div>
        </div>

        {/* BREAKBREAKBREAKBREAKBREAKBREAK */}

        {/* BREAKBREAKBREAKBREAKBREAKBREAK */}

        {/* BREAKBREAKBREAKBREAKBREAKBREAK */}

        <div
          className={`${
            isExpanded ? `hidden` : `block text-green-500`
          } lg:hidden text-center mt-2 mb-3`}
        >
          {serviceSelect}
        </div>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } lg:block flex flex-col text-center `}
        >
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
              <CloseIcon fill="black"/>
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
