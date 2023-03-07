import React, { useEffect, useState } from "react";
import axios from "axios";

const ListCourse = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/getcourse`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>ALL COURSES</h1>
      <div className="Mains">
        {Data.map((val) => {
          let url = `${process.env.REACT_APP_BACKEND}/getcourse/${val.Image}`;
          return (
            <div className="listcour" key={val._id}>
              <div>
                <h3>Name</h3>
                <br></br>
                <p>{val.Name}</p>
              </div>
              <div>
                <h3>Level</h3>
                <br></br>
                <p>{val.Level}</p>
              </div>
              <div>
                <h3>Description</h3>
                <br></br>
                <p>{val.Description}</p>
              </div>
              <div>
                <img src={url} alt="pic"></img>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListCourse;
