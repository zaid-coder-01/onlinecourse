import React, { useState, useEffect } from "react";
import axios from "axios";

const Lecture = () => {
  const [course, setcourse] = useState([]);
  const [inst, setinst] = useState([]);
  const [Batch, setBatch] = useState([]);
  const [Data, setData] = useState({
    courseName: "",
    instructorName: "",
    Date: "",
    Batch: "",
  });
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/getinst`)
      .then((res) => {
        setinst(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    axios
      .post(`${process.env.REACT_APP_BACKEND}/getbatch`, {
        name: Data.courseName,
      })
      .then((res) => {
        setBatch(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    axios
      .get(`${process.env.REACT_APP_BACKEND}/getcourse`)
      .then((res) => {
        setcourse(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [Data.courseName]);
  const getData = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;
    setData({ ...Data, [name]: value });
  };
  const submit = (ev) => {
    ev.preventDefault();
    let val = {
      instructorName: Data.instructorName,
      courseName: Data.courseName,
      Batch: Data.Batch,
      Date: Data.Date,
    };
    axios
      .post(`${process.env.REACT_APP_BACKEND}/addlecture`, val)
      .then((res) => {
        alert(res.data);
        setData({
          courseName: "choose",
          instructorName: "choose",
          Date: "",
          Batch: "",
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
          <h3 style={{ textAlign: "center", marginTop: "" }}>
            SCHEDULE LECTURE
          </h3>
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
              <label className="mt-2">Instructor Name</label>

              <select
                name="instructorName"
                onChange={getData}
                value={Data.instructorName}
              >
                <option>choose</option>
                {inst.map((val) => {
                  return (
                    <option value={val.Name} key={val._id}>
                      {val.Name}
                    </option>
                  );
                })}
              </select>
              <label>Batch</label>
              <select name="Batch" onChange={getData} value={Data.Batch}>
                <option>choose</option>
                {Batch.map((val) => {
                  return (
                    <option value={val.batchName} key={val._id}>
                      {val.batchName}
                    </option>
                  );
                })}
              </select>
              <label>Date</label>
              <input
                type="date"
                name="Date"
                onChange={getData}
                value={Data.Date}
              ></input>
              <button onClick={submit}>Add Course</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lecture;
