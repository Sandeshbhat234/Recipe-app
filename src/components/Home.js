import React from "react";
import cheff from "../assets/homecheff.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const HomePage = () => {
  const quotes = [
    "Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together.",
    "Food is symbolic of love when words are inadequate.",
    "The secret of success in life is to eat what you like and let the food fight it out inside.",
    "One cannot think well, love well, sleep well, if one has not dined well.",
    "Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors - it's how you combine them that sets you apart.",
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-r px-4 from-yellow-400 via-red-500 to-pink-500 flex items-center justify-center">
      <div className="w-1/3">
        <img src={cheff} alt="Delicious food" />
      </div>
      <div className="w-3/4 text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">
          Hi, I am cheff bezos Welcome to Our Recipe App
        </h1>
        {quotes.map((quote, index) => (
          <p
          key={index}
          className="italic text-center text-2xl ">{`${quote}`}</p>
          ))}
        <Link to={`/recipes`}>
          <button className="mt-4 px-4 py-2 font-bold text-black bg-yellow-300 rounded hover:bg-yellow-400 animate-pulse ">
            Browse Recipes
          </button>
        </Link>
      </div>
    </div>
    <Footer></Footer>
          </>
  );
};

export default HomePage;
