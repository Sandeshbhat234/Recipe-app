import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import RecipesList from "./components/RecipesList";
import RecipeDetails from "./components/RecipeDetails";
import Favorites from "./components/Favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "recipes",
        element: <RecipesList />,
      },
      {
        path: "recipes/:recipeName",
        element: <RecipeDetails />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);
