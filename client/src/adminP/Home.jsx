import React from "react";
import "../App.css";

const Home = () => {
  return (
    <>
      <div className="adminpanel">
        <a href="/adminp">
          <div className="statics">
            <h2>Admin Panel</h2>
          </div>
        </a>

        <a href="/instlogin">
          <div className="statics">
            <h2>Instructor Panel</h2>
          </div>
        </a>
      </div>
    </>
  );
};

export default Home;
