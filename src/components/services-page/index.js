/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { CloudinaryContext } from "cloudinary-react";
import "regenerator-runtime/runtime";
import Img from "react-cloudinary-lazy-image";
import useModal from "../../hooks/use-modal";
import CloseIcon from "../Svg/CloseIcon";
import DropdownSelect from "./downshift";
import { useQuery } from "react-query";
import ServicesButton from "./ServicesButton";
import GalleryImage from "./GalleryImage";

const GridGallery = () => {
  const [publicId, setPublicId] = useState(null);
  const [isExpanded, toggleExpansion] = useState(false);
  const [service, setService] = useState("Patio");

  const services = [
    "Patio",
    "Front Yard",
    "Driveway",
    "Patio Cover",
    "Putting Green",
    "Barbecue",
    "Pool Deck",
    "Fountain",
  ];

  const { openModal, closeModal, isOpen, Modal } = useModal({
    background: "rgba(0, 0, 0, 0.5)",
  });

  const handleSelect = (e) => {
    e.preventDefault();
    toggleExpansion(!isExpanded);
    setService(e.target.id);
  };

  async function fetchData(key, { selectedItem }) {
    try {
      const res = await fetch(
        `https://res.cloudinary.com/stevelee/image/list/${selectedItem}.json`
      );
      const galleryData = await res.json();
      // console.log({ selectedItem, galleryData });
      return galleryData.resources;
    } catch (error) {
      console.log(key, error);
    }
  }

  function formatName(name) {
    if (name === "Barbecue") {
      return "barbeque";
    }
    if (!name) {
      return null;
    }

    return name.toLowerCase().replace(" ", "-");
  }

  const formattedName = formatName(service);

  const { isLoading, isError, data } = useQuery(
    ["services", { selectedItem: formattedName }],
    fetchData
  );

  return (
    <section className="max-w-7xl flex justify-center mx-auto">
      <CloudinaryContext cloudName="stevelee">
        <div
          className={`lg:text-black text-xl mx-auto text-5xl font-semibold mb-1 px-3`}
          // onClick={() => toggleExpansion(!isExpanded)}
        >
          Services
        </div>

        <DropdownSelect
          initialValue={service}
          setValue={setService}
          items={services}
        />

        {/* <DropDown services={ServicesArr} /> */}

        {/* <div
          className={`block text-green-500
           lg:hidden text-center mt-4 mb-3`}
        >
          {service}
        </div> */}

        <div className={`hidden lg:block flex flex-col text-center `}>
          <ServicesButton
            handleSelect={handleSelect}
            isActive={service === "patio"}
            value="patio"
            svc="Patio"
          />
          <ServicesButton
            handleSelect={handleSelect}
            isActive={service === "front-yard"}
            value="front-yard"
            svc="Front Yard"
          />
          <ServicesButton
            handleSelect={handleSelect}
            isActive={service === "driveway"}
            value="driveway"
            svc="Driveway"
          />
          <ServicesButton
            handleSelect={handleSelect}
            isActive={service === "fire-place"}
            value="fire-place"
            svc="Fire Place"
          />
          <ServicesButton
            handleSelect={handleSelect}
            isActive={service === "patio-cover"}
            value="patio-cover"
            svc="Patio Cover"
          />
          <ServicesButton
            handleSelect={handleSelect}
            isActive={service === "putting-green"}
            value="putting-green"
            svc="Putting Green"
          />
          <ServicesButton
            handleSelect={handleSelect}
            isActive={service === "barbeque"}
            value="barbeque"
            svc="Barbecue"
          />
          <ServicesButton
            handleSelect={handleSelect}
            isActive={service === "pool-deck"}
            value="pool-deck"
            svc="Pool Deck"
          />
          <ServicesButton
            handleSelect={handleSelect}
            isActive={service === "fountain"}
            value="fountain"
            svc="Fountain"
          />
        </div>

        <div className="grid-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {isLoading ? (
            <div className="mx-auto text-center">Loading...</div>
          ) : isError ? (
            <div>error!</div>
          ) : data && data.length > 0 ? (
            data.map((data) => {
              return (
                <GalleryImage
                  key={data.public_id}
                  publicId={data.public_id}
                  openModal={openModal}
                  setPublicId={setPublicId}
                />
              );
            })
          ) : null}
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
