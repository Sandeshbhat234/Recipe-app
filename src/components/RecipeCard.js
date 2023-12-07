import React from "react";

const RecipeCard = ({ title }) => {
  return (
    <div className="bg-gray-50  text-center rounded-3xl px-2 shadow-2xl py-4  border-4 border-double border-red-300 overflow-hidden mx-auto w-auto h-auto items-center hover:bg-slate-100  hover:border-red-300 hover:border-solid  ">
      <span className="font-bold text-gray-600 text-3xl capitalize">
        {title}
      </span>
    </div>
  );
};

export default RecipeCard;
