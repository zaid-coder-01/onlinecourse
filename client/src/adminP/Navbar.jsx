import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../App.css";
const Navar = () => {
  return (
    <>
      <div className="leftNav">
        <div style={{ paddingTop: "1.3rem" }}>
          <b>
            <a href="//">DASH BOARD</a>
          </b>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/addbatch">Add Batch</NavLink>
            </li>
            <li>
              <NavLink to="/addcourse">Add Course</NavLink>
            </li>
            <li>
              <NavLink to="/addinstruct">Add Instructor</NavLink>
            </li>
            <li>
              <NavLink to="/lecture">Schedule Lecture</NavLink>
            </li>
            <li>
              <NavLink to="/listcours">List Course</NavLink>
            </li>
            <li>
              <NavLink to="/listinst">List Instructor</NavLink>
            </li>
            <li>
              <NavLink to="/listlecture">List lecture</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navar;
