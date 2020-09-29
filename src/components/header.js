import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

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
          {isExpanded ? (
            // x svg
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 fill-current hover:fill-0"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
          ) : (
            // menu svg
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          )}
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
