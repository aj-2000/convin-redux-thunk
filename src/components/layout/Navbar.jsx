import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AddBucket } from "../AddBucket";
import { AddCard } from "../AddCard";
import { BsPlusLg } from "react-icons/bs";
const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content bg-base-100 rounded-box w-52 p-2 mt-3 shadow"
            >
              <li className={`${pathname === "/" && "bg-primary rounded-md"}`}>
                <Link to="/">Cards</Link>
              </li>
              <li className={`${pathname !== "/" && "bg-primary rounded-md"}`}>
                <Link to="/history/">History</Link>
              </li>
            </ul>
          </div>
          <a className="lg:flex btn btn-ghost hidden text-xl normal-case">
            Convin
          </a>
        </div>
        <div className="navbar-center lg:flex hidden">
          <ul className="menu menu-horizontal px-1">
            <li className={`${pathname === "/" && "bg-primary rounded-md"}`}>
              <Link to="/">Cards</Link>
            </li>
            <li className={`${pathname !== "/" && "bg-primary rounded-md"}`}>
              <Link to="/history/">History</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-4">
          <label htmlFor="add-card-modal" className="btn btn-sm gap-2">
            <BsPlusLg className="font-extrabold" size={20} /> <span>Card</span>
          </label>
          <label htmlFor="add-bucket-modal" className="btn btn-sm gap-2">
            <BsPlusLg className="font-extrabold" size={20} />
            <span>Bucket</span>
          </label>
        </div>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="add-card-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative max-w-sm">
          <label
            htmlFor="add-card-modal"
            className="btn btn-sm btn-circle right-2 top-2 absolute"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add A Card</h3>
          <AddCard />
        </div>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="add-bucket-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative max-w-sm">
          <label
            htmlFor="add-bucket-modal"
            className="btn btn-sm btn-circle right-2 top-2 absolute"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Add A Bucket</h3>
          <AddBucket />
        </div>
      </div>
    </>
  );
};
export default Navbar;
