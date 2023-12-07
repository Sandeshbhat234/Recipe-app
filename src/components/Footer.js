import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="bg-gray-800 grid grid-cols-4 gap-10 p-5 pl-4 pr-4 text-white ">
        <div className="">
          <h2 className="font-bold cursor-pointer text-2xl text-orange-500 ">
            Top News
          </h2>
          <ul>
            <li>
              <a className="cursor-pointer hover:text-red-700 text-lg">
                news 1
              </a>
            </li>
            <li>
              <a className="cursor-pointer hover:text-red-700 text-lg">
                news 2
              </a>
            </li>
            <li>
              <a className="cursor-pointer hover:text-red-700 text-lg">
                news 3
              </a>
            </li>
            <li>
              <a className="cursor-pointer hover:text-red-700 text-lg">
                news 4
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold  text-2xl text-orange-500 ">
            Usefull Links
          </h2>
          <ul>
            <Link to={`/`}>
              <a className="cursor-pointer hover:text-red-700 text-lg">Home</a>
            </Link>
            <li>
              <a className="cursor-pointer hover:text-red-700 text-lg">
                Link 2
              </a>
            </li>
            <li>
              <a className="cursor-pointer hover:text-red-700 text-lg">
                Link 3
              </a>
            </li>
            <li>
              <a className="cursor-pointer hover:text-red-700 text-lg">
                Link 4
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className=" pl-16 font-bold  text-2xl text-orange-500 m  ">
            News Letter
          </h2>

          <div className="flex pl-5 w-2/3 rounded bg-white">
            <input
              type="email"
              placeholder="@email.com"
              id="search"
              className="w-5/6 border-none  px-2 py-1 text-gray-900 outline-none focus:outline-1"
            />
            <button className="m-2 rounded bg-teal-800 px-4 py-2 text-white  hover:bg-green-700">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <h2 className="font-bold  text-2xl text-orange-500 ">Contact</h2>
          <ul>
            <li>
              <a className="cursor-pointer hover:text-red-700 text-lg">
                Contact@gmail.com
              </a>
            </li>
            <li>
              <a className="cursor-pointer hover:text-red-700 text-lg">
                +91999999999
              </a>
            </li>
            <li>
              <a className="cursor-pointer hover:text-red-700 text-lg">
                Karnataka, India
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
