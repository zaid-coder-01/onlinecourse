import React, { useEffect, useState } from "react";
import axios from "axios";

const Instructorpanel = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    let a = { name: sessionStorage.getItem("users") };

    axios
      .post(`${process.env.REACT_APP_BACKEND}/getlectures`, a)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        LECTURES SCHEDULE TO YOU
      </h1>
      <div className="MainInst">
        {Data.map((val) => {
          return (
            <div className="listinst" key={val._id}>
              <div>
                <h3>Instructor Name</h3>
                <br></br>
                <p>{val.instructorName}</p>
              </div>
              <div>
                <h3>Course Name</h3>
                <br></br>
                <p>{val.courseName}</p>
              </div>

              <div>
                <h3>Date</h3>
                <br></br>
                <p>{val.Date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Instructorpanel;
