import React, { useEffect, useState } from "react";
import axios from "axios";

const Listinst = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/getinst`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>INSTRUCTORS</h1>
      <div className="MainInst">
        {Data.map((val) => {
          return (
            <div className="listinst" key={val._id}>
              <div>
                <h3>Name</h3>
                <br></br>
                <p>{val.Name}</p>
              </div>
              <div>
                <h3>Experience</h3>
                <br></br>
                <p>{val.Experience}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Listinst;
