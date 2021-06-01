import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import CloseIcon from "./Svg/CloseIcon";
import MenuIcon from "./Svg/MenuIcon";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-green-400 md:bg-white sticky relative lg:px-2 top-0 z-40">
      <div className="flex flex-wrap items-center  justify-between  max-w-7xl  p-4 md:px-2 mx-auto absolute sticky">
        <button
          className="items-center block px-3 py-2 text-white border border-white hover:border-gray-400  rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          {isExpanded ? <CloseIcon /> : <MenuIcon />}
        </button>

        <Link to="/">
          <h1 className="flex items-center text-white no-underline">
            <img
              className="bg-gray-800 w-8 h-8 mr-2 fill-current"
              src="https://dedhamdocs.com/wp-content/uploads/2019/03/leaf-icon-png-18.png"
            ></img>
            <span className="text-xl font-bold tracking-tight hidden md:block pr-3 text-black">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: "/",
              title: "Home",
            },
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/services`,
              title: `Services`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 hover:text-white no-underline md:inline-block md:mt-0 md:ml-4 font-medium text-white md:text-black hover:bg-green-400 focus:outline-none  transition duration-150 ease-in-out rounded-md text-base px-3 py-2 "
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
          <a
            className="inline-flex mt-4 hover:text-white no-underline md:mt-0 md:ml-4 font-medium text-white md:text-black hover:text-white hover:bg-green-400 focus:outline-none  transition duration-150 ease-in-out rounded-md text-base px-3 py-2"
            href="tel:+1-714-3132341"
          >
            <span className="mr-2">Call Us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
