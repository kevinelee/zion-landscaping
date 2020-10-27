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
    <header className="bg-gray-800 sticky relative">
      <div className="flex flex-wrap items-center  justify-between  max-w-7xl md:justify-start p-4 mx-auto md:px-8 absolute sticky">
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
            <span className="text-xl font-bold tracking-tight hidden md:block pr-3">
              {/* title */}
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
              className="block mt-4 text-white hover:text-gray-400 no-underline md:inline-block md:mt-0 md:ml-4 font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out rounded-md text-base px-3 py-2 "
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
