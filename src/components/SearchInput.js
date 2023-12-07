import React, { useState } from "react";

const SearchInput = ({ filterRecipeList }) => {
  const [inputText, setInputText] = useState("");

  const handleOnChange = (e) => {
    console.log(e);
    setInputText((prev) => e.target.value);
  };

  const handleSearch = () => {
    filterRecipeList(inputText);
  };

  const handleClear = () => {
    setInputText("");
    filterRecipeList("");
  };

  return (
    <>
      <div className="relative m-2 mx-auto">
        <input
          type="text"
          className="border-2 border-green-500 bg-white w-96 p-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Search Recipes"
          value={inputText}
          onChange={handleOnChange}
        />
        <button
          type="button"
          className="text-white absolute end-20 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          type="button"
          className="text-white absolute end-1 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default SearchInput;
