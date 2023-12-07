import React from "react";
import cheff from "../assets/cheff.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="relative z-10">
        <nav className="py-10 bg-gray-800">
          <div className="relative flex items-center">
            <img
              src={cheff}
              alt="logo"
              width={100}
              height={24}
              className="absolute left-4"
            />

            <h1 className="inline-block text-6xl font-bold text-gray-200 absolute left-28 pb-2 ">
              RECIPE APP
            </h1>

            <Link to={`/favorites`} className="absolute right-4">
              <button className=" text-white bg-purple-700 hover:bg-purple-400 focus:outline-none focus:ring-2 font-medium rounded-lg text-lg py-2 px-4">
                Favorites
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
