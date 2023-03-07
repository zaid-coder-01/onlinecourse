import React, { useState, useEffect } from "react";
import axios from "axios";

const Addbatch = () => {
  const [course, setcourse] = useState([]);
  const [Data, setData] = useState({
    courseName: "",
    batchName: "",
  });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/getcourse`)
      .then((res) => {
        setcourse(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  const getData = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;
    setData({ ...Data, [name]: value });
  };
  const submit = (ev) => {
    ev.preventDefault();
    let val = {
      batchName: Data.batchName,
      courseName: Data.courseName,
    };
    axios
      .post(`${process.env.REACT_APP_BACKEND}/addbatch`, val)
      .then((res) => {
        alert(res.data);
        setData({
          courseName: "choose",
          batchName: "",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="Main">
        <div className="Course">
          <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
            ADD BATCHES
          </h1>
          <div>
            <form>
              <label>Course Name</label>
              <select
                name="courseName"
                onChange={getData}
                value={Data.courseName}
              >
                <option>choose</option>
                {course.map((val) => {
                  return (
                    <option value={val.Name} key={val._id}>
                      {val.Name}
                    </option>
                  );
                })}
              </select>
              <label className="mt-2">Batche name</label>
              <input
                type="text"
                name="batchName"
                onChange={getData}
                value={Data.batchName}
              ></input>
              <button onClick={submit} style={{ marginTop: "3rem" }}>
                Add Batche
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addbatch;
