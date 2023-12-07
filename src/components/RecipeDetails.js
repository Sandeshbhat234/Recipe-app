import React, { useEffect, useState } from "react";
import { INDIVIDUAL_RECIPE_URL } from "../constants";
import { useNavigate, useParams } from "react-router-dom";
import imgPlaceholder from "../assets/placeholder.jpg";
import cheff from "../assets/cheff1.png";
import Footer from "./Footer";

const RecipeDetails = () => {
  const { recipeName } = useParams();
  const navigate = useNavigate();

  const [recipeDetails, setRecipeDetails] = useState(null);
  const [isErrorFound, setIsErrorFound] = useState(false);
  let favorites = JSON.parse(localStorage.getItem("favorites")) || {};

  const [isFavoriteItem, setIsFavoriteItem] = useState(
    Object.keys(favorites).some((i) => favorites[i] === recipeName)
  );

  const getRecipeDetails = async () => {
    try {
      const data = await fetch(`${INDIVIDUAL_RECIPE_URL}/${recipeName}`);
      const json = await data.json();
      setRecipeDetails((prev) => json);
    } catch (err) {
      setIsErrorFound(true);
    }
  };

  const handleFavorite = () => {
    if (isFavoriteItem) {
      delete favorites[recipeName];
    } else {
      favorites = { ...favorites, [recipeName]: recipeName };
    }
    setIsFavoriteItem(
      Object.keys(favorites).some((i) => favorites[i] === recipeName)
    );
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const handleBackBtnClick = () => {
    navigate(-1);
  };

  const usePlaceholder = (e) => {
    e.target.src = imgPlaceholder;
  };

  useEffect(() => {
    getRecipeDetails();
    // eslint-disable-next-line
  }, []);

  return isErrorFound ? (
    <>
      <div className="relative  flex items-center justify-center text-center mb-8  py-2 border-b-4 pb-10 pt-8 border-red-200 border-double">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded absolute left-10 mt-2 -ml-4"
          onClick={handleBackBtnClick}>
          Back
        </button>
      </div>
      <div className="min-h-screen col-start-1 col-span-4 ">
        <div className="w-1/3 relative">
          <img src={cheff} alt="Delicious food" className="absolute left-44" />
        </div>
        <div className="w-3/4 text-black  items-start absolute -right-36 top-48">
          <h1 className="text-4xl font-bold mb-4  ">
            I know about this recipe..But I won't tell you..
          </h1>
        </div>
      </div>
    </>
  ) : recipeDetails ? (
    <>
      <div className="relative  flex items-center justify-center text-center mb-5 py-2 border-b-4 pb-4 border-red-200 border-double">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded absolute left-10 mt-2 -ml-4"
          onClick={handleBackBtnClick}>
          Back
        </button>

        <h1 className=" inline-block  font-bold text-7xl">
          {recipeDetails.foodName}
        </h1>
        <button
          className={`${
            isFavoriteItem
              ? `bg-red-500 hover:bg-red-700`
              : `bg-green-500 hover:bg-green-700`
          } text-white font-bold py-2 px-4 rounded absolute right-6 -mr-2`}
          onClick={handleFavorite}>
          {isFavoriteItem ? `Remove from Favorite` : `Add to Favorite`}
        </button>
      </div>

      {/* image and description */}

      <div className="flex ">
        <img
          src={recipeDetails.foodImage}
          onError={usePlaceholder}
          alt="food"
          width={200}
          height={200}
          className="ml-14 border-8 shadow-2xl rounded-full border-red-200 border-double "
        />
        <p className="inline-block ml-5 pr-28 text-center pt-12 text-4xl ">
          {recipeDetails.foodDescription !== "Description not found."
            ? recipeDetails.foodDescription
            : "It is a good food and very delicious. You should try it."}
        </p>
      </div>
      <div className="border-t-4 text-center mt-5 ">
        {/* ingredients  */}

        <h2 className="font-bold text-5xl py-8">INGREDIENTS</h2>
      </div>
      <div className="grid grid-cols-3 gap-1 pl-4 pr-4">
        {recipeDetails.keyIngredients.map((item, idx) => (
          <>
            <div className="flex px-8 place-items-center border-8 shadow-2xl bg-white rounded-full border-red-200 border-double mb-6  w-auto">
              <div className=" flex-1 text-center">
                <h2 className="text-3xl font-bold text-gray-700 capitalize">
                  {item[1]}
                </h2>
              </div>

              <div className="flex-1 ">
                <img
                  width={100}
                  src={item[0]}
                  onError={usePlaceholder}
                  alt="ingredients"
                  className="rounded-full mx-auto "
                />
              </div>
            </div>
          </>
        ))}
      </div>
      <Footer></Footer>
    </>
  ) : (
    <></>
  );
};

export default RecipeDetails;
