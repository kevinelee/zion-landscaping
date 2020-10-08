import React, { Component } from "react";
// import Img from "gatsby-image";
import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
import "regenerator-runtime/runtime";
// import LazyLoad from "react-lazyload";

export default class GridGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gallery: [],
      selectedButton: "patio",
      isPortal: false,
      imageId: "",
    };

    // const ServicesButton = ({service})=>{
    //   return (
    //     <button
    //         className="services-button"
    //         onClick={this.handleSelect(service)}
    //       >
    //         {service}
    //       </button>
    //   )
    // }
  }

  async componentDidMount() {
    try {
      const selector = this.state.selectedButton;
      const res = await fetch(
        `https://res.cloudinary.com/stevelee/image/list/${selector}.json`
      );
      const gallery = await res.json();
      this.setState({ gallery: gallery.resources });
    } catch (error) {
      console.log(error);
    }
  }

  handleSelect = (list) => () => {
    this.setState({ selectedButton: list }, this.componentDidMount);
  };

  // handleModal = (imageId) => {
  //   this.setState({ isPortal: true, imageId });
  // };

  render() {
    return (
      <section className="max-w-7xl flex justify-center mx-auto">
      <CloudinaryContext
        cloudName="stevelee"
      >
        <div className="button-group flex justify-center">
          <button
            className="services-button"
            onClick={this.handleSelect("patio")}
          >
            Patio
          </button>
          <button
            className="services-button"
            onClick={this.handleSelect("front-yard")}
          >
            Front Yard
          </button>
          <button
            className="services-button"
            onClick={this.handleSelect("driveway")}
          >
            Driveway
          </button>
          <button
            className="services-button"
            onClick={this.handleSelect("fire-place")}
          >
            Fire Place
          </button>
          <button
            className="services-button"
            onClick={this.handleSelect("patio-cover")}
          >
            Patio Cover
          </button>
          <button
            className="services-button"
            onClick={this.handleSelect("putting-green")}
          >
            Putting Green
          </button>
          <button
            className="services-button"
            onClick={this.handleSelect("barbeque")}
          >
            Barbeque
          </button>
          <button
            className="services-button"
            onClick={this.handleSelect("fire-place")}
          >
            Fire Place
          </button>
          <button
            className="services-button"
            onClick={this.handleSelect("pool-deck")}
          >
            Pool Deck
          </button>
          <button
            className="services-button"
            onClick={this.handleSelect("fountain")}
          >
            Fountain
          </button>
        </div>
        <div className="grid-gallery grid grid-cols-3">
          {this.state.gallery.length > 0 &&
            this.state.gallery.map((data) => {
              return (
                <div className="grid-gallery__image m-4" key={data.public_id}>
                  <Image publicId={data.public_id}>
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
            })}
        </div>
      </CloudinaryContext>
      </section>
    );
  }
}
