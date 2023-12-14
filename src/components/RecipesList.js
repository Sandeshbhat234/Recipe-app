import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { RECIPES_LIST_URL } from "../constants";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import cheff from "../assets/cheff1.png";
import gif from "../assets/giphy.gif";
import Footer from "./Footer";

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const getRecipesList = async () => {
    const data = await fetch(RECIPES_LIST_URL);
    const json = await data.json();
    setRecipes((prev) => json.recipesList);
    setFilteredRecipes((prev) => json.recipesList);
  };

  const filterRecipeList = (inputText) => {
    if (inputText !== "") {
      setFilteredRecipes((prev) =>
        recipes.filter((i) => i.includes(inputText.toLowerCase()))
      );
    } else {
      setFilteredRecipes((prev) => recipes);
    }
  };

  useEffect(() => {
    getRecipesList();
    // eslint-disable-next-line
  }, []);

  const recipePage = () => {
    if (filteredRecipes.length === 0) {
      if (recipes.length === 0) {
        return (
          <div className="min-h-screen h-screen col-start-1 col-span-4  ">
            <div className="">
              <img src={gif} alt="gif" width={300} className="mx-auto" />
            </div>
          </div>
        );
      } else {
        return (
          <div className="min-h-screen col-start-1 col-span-4  ">
            <div className="w-1/3 relative">
              <img
                src={cheff}
                alt="Delicious food"
                className="absolute left-44"
              />
            </div>

            <h1 className="text-4xl font-bold mb-4 inline-block absolute right-96 top-40 ">
              I know about this recipe..But I won't tell you..
            </h1>
          </div>
        );
      }
    } else {
      return (
        <div className="grid grid-cols-4 pt-6 pb-5  gap-5 pl-4 pr-4 bg-gray-50 relative">
          {filteredRecipes.map((item, idx) => (
            <Link
              key={idx}
              to={`/recipes/${item}`}
              state={{ recipeName: item }}>
              <RecipeCard title={item} />
            </Link>
          ))}
        </div>
      );
    }
  };

  return (
    <>
      <div className="text-right  flex items-center border-b-2 justify-center">
        <SearchInput filterRecipeList={filterRecipeList} />
      </div>
      {recipePage()}
      <Footer></Footer>
    </>
  );
};

export default RecipesList;
