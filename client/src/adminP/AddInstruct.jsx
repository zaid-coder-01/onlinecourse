import React, { useState } from "react";
import axios from "axios";

const AddInstruct = () => {
  const [Data, setData] = useState({
    Name: "",
    Experience: "",
  });
  const getData = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;
    setData({ ...Data, [name]: value });
  };
  const submit = (ev) => {
    ev.preventDefault();
    let val = {
      Name: Data.Name,
      Experience: Data.Experience,
    };
    axios
      .post(`${process.env.REACT_APP_BACKEND}/addinstructor`, val)
      .then((res) => {
        alert(res.data);
        setData({
          Name: "",
          Experience: "",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="Main">
        <div className="inst">
          <h1 style={{ textAlign: "center", marginTop: "1rem" }}>
            ADD INSTRUCTOR
          </h1>
          <div>
            <form>
              <label>Name</label>
              <input
                type="text"
                name="Name"
                onChange={getData}
                value={Data.Name}
              ></input>
              <label className="mt-2">Experience</label>
              <input
                type="text"
                name="Experience"
                onChange={getData}
                value={Data.Experience}
              ></input>
              <button onClick={submit} style={{ marginTop: "3rem" }}>
                Add instructor
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddInstruct;
