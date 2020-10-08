// /* eslint react/prop-types: 0 */
// import React, { useEffect, useState } from "react";
// // import Img from "gatsby-image";
// import { CloudinaryContext, Transformation, Image } from "cloudinary-react";
// import "regenerator-runtime/runtime";
// // import { lazyload } from "react-lazyload";

// // @lazyload({
// //   height: 200,
// //   once: true,
// //   offset: 100,
// // })

// // this.state = {
// //       gallery: [],
// //       selectedButton: "patio",
// //       isPortal: false,
// //       imageId: "",
// //     };

// // handleSelect = (list) => () => {
// //   this.setState({ selectedButton: list }, this.componentDidMount);
// // };

// export default function GridGallery() {
//   const [selector, setSelector] = useState(service);
//   const [service, setService] = useState("patio");
//   const [gallery, setGallery] = useState([]);
  
//   async function getImages() {
//     try {
//       // const selector = this.state.selectedButton;
//       const res = await fetch(
//         `https://res.cloudinary.com/stevelee/image/list/${selector}.json`
//       );
//       const cloudinary = await res.json();
//       setGallery(cloudinary.resources);
//       console.log("kevins gallery", gallery);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(() => {
//     getImages();
//   });

//   // function handleSelect(list) {
//   //   this.setState({ selectedButton: list }, this.componentDidMount);
//   // }

//   const ServiceButton = ({ service, title }) => {
//     return (
//       <button className="services-button m-2" onClick={setService(service)}>
//         {title}
//       </button>
//     );
//   };

//   return (
//     <section className="max-w-7xl flex justify-center mx-auto">
//       <CloudinaryContext cloudName="stevelee">
//         <div className="button-group flex justify-center">
//           <ServiceButton service="patio" title="Patio" />
//           <ServiceButton service="front-yard" title="Front Yard" />
//           <ServiceButton service="driveway" title="Driveway" />
//           <ServiceButton service="fire-place" title="Fire Place" />
//           <ServiceButton service="patio-cover" title="Patio Cover" />
//           <ServiceButton service="putting-green" title="Putting Green" />
//           <ServiceButton service="barbeque" title="barbeque" />
//           <ServiceButton service="pool-deck" title="Pool Deck" />
//           <ServiceButton service="fountain" title="Fountain" />
//         </div>
//         <div className="grid-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
//           {this.state.gallery.length > 0 &&
//             this.state.gallery.map((data) => {
//               return (
//                 <div
//                   className="grid-gallery__image mx-auto m-2 lg:m-4 gap-1 cursor-pointer"
//                   key={data.public_id}
//                 >
//                   <Image publicId={data.public_id}>
//                     <Transformation
//                       crop="scale"
//                       width="300"
//                       height="200"
//                       dpr="auto"
//                       responsive_placeholder="blank"
//                     />
//                   </Image>
//                 </div>
//               );
//             })}
//         </div>
//       </CloudinaryContext>
//     </section>
//   );
// }

// // export default class GridGallery extends Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       gallery: [],
// //       selectedButton: "patio",
// //       isPortal: false,
// //       imageId: "",
// //     };

// //     // const ServicesButton = ({service})=>{
// //     //   return (
// //     //     <button
// //     //         className="services-button m-2"
// //     //         onClick={this.handleSelect(service)}
// //     //       >
// //     //         {service}
// //     //       </button>
// //     //   )
// //     // }
// //   }

// //   async componentDidMount() {
// //     try {
// //       const selector = this.state.selectedButton;
// //       const res = await fetch(
// //         `https://res.cloudinary.com/stevelee/image/list/${selector}.json`
// //       );
// //       const gallery = await res.json();
// //       this.setState({ gallery: gallery.resources });
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   }

// //   handleSelect = (list) => () => {
// //     this.setState({ selectedButton: list }, this.componentDidMount);
// //   };

// //   // handleModal = (imageId) => {
// //   //   this.setState({ isPortal: true, imageId });
// //   // };

// //   render() {
// //     return (

// //       <section className="max-w-7xl flex justify-center mx-auto">
// //         <CloudinaryContext cloudName="stevelee">
// //           <div className="button-group flex justify-center">
// //             <button
// //               className="services-button m-2"
// //               onClick={this.handleSelect("patio")}
// //             >
// //               Patio
// //             </button>
// //             <button
// //               className="services-button m-2"
// //               onClick={this.handleSelect("front-yard")}
// //             >
// //               Front Yard
// //             </button>
// //             <button
// //               className="services-button m-2"
// //               onClick={this.handleSelect("driveway")}
// //             >
// //               Driveway
// //             </button>
// //             <button
// //               className="services-button m-2"
// //               onClick={this.handleSelect("fire-place")}
// //             >
// //               Fire Place
// //             </button>
// //             <button
// //               className="services-button m-2"
// //               onClick={this.handleSelect("patio-cover")}
// //             >
// //               Patio Cover
// //             </button>
// //             <button
// //               className="services-button m-2"
// //               onClick={this.handleSelect("putting-green")}
// //             >
// //               Putting Green
// //             </button>
// //             <button
// //               className="services-button m-2"
// //               onClick={this.handleSelect("barbeque")}
// //             >
// //               Barbeque
// //             </button>
// //             <button
// //               className="services-button m-2"
// //               onClick={this.handleSelect("fire-place")}
// //             >
// //               Fire Place
// //             </button>
// //             <button
// //               className="services-button m-2"
// //               onClick={this.handleSelect("pool-deck")}
// //             >
// //               Pool Deck
// //             </button>
// //             <button
// //               className="services-button m-2"
// //               onClick={this.handleSelect("fountain")}
// //             >
// //               Fountain
// //             </button>
// //           </div>
// //           <div className="grid-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
// //             {this.state.gallery.length > 0 &&
// //               this.state.gallery.map((data) => {
// //                 return (
// //                   <div
// //                     className="grid-gallery__image mx-auto m-2 lg:m-4 gap-1 cursor-pointer"
// //                     key={data.public_id}
// //                   >
// //                     <Image publicId={data.public_id}>
// //                       <Transformation
// //                         crop="scale"
// //                         width="300"
// //                         height="200"
// //                         dpr="auto"
// //                         responsive_placeholder="blank"
// //                       />
// //                     </Image>
// //                   </div>
// //                 );
// //               })}
// //           </div>
// //         </CloudinaryContext>
// //       </section>
// //     );
// //   }
// // }
