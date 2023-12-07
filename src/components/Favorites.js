import React from "react";
import RecipeCard from "./RecipeCard";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  const navigate = useNavigate();

  const handleBackBtnClick = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="relative flex items-center justify-center text-center mb-5 py-2 border-b-4 pb-4 border-red-200 border-double">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded absolute left-10 mt-2 -ml-4"
          onClick={handleBackBtnClick}>
          Back
        </button>

        <h1 className=" inline-block  font-bold text-7xl">Favourites</h1>
      </div>
      <div className="grid grid-cols-4 pt-5 pb-5 gap-5 pl-4 pr-4 relative">
        {Object.keys(favorites).map((item, idx) => (
          <Link
            key={idx}
            to={`/recipes/${favorites[item]}`}
            state={{ recipeName: favorites[item] }}>
            <RecipeCard title={favorites[item]} />
          </Link>
        ))}
      </div>
      <div className="h-96"></div>
      <Footer></Footer>
    </>
  );
};

export default Favorites;
