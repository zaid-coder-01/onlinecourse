import React, { useState } from "react";
import axios from "axios";

const AddCourse = () => {
  const [Data, setData] = useState({
    Name: "",
    Level: "",
    Description: "",
  });
  const [Image, setImage] = useState();
  const getData = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;
    setData({ ...Data, [name]: value });
  };
  const submit = (ev) => {
    ev.preventDefault();
    let val = new FormData();
    val.append("Name", Data.Name);
    val.append("Level", Data.Level);
    val.append("Description", Data.Description);
    val.append("Image", Image);
    axios
      .post(`${process.env.REACT_APP_BACKEND}/addcourse`, val)
      .then((res) => {
        alert(res.data);
        setData({ Name: "", Level: "", Description: "" });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "1rem" }}>ADD COURSE</h1>
      <div className="Main">
        <div className="Course">
          <div>
            <form>
              <label>Name</label>
              <input
                type="text"
                name="Name"
                onChange={getData}
                value={Data.Name}
              ></input>
              <label className="mt-2">Level</label>
              <input
                type="text"
                name="Level"
                onChange={getData}
                value={Data.Level}
              ></input>
              <label>Description</label>
              <input
                type="text"
                name="Description"
                onChange={getData}
                value={Data.Description}
              ></input>
              <label className="mt-2">Image</label>
              <input
                type="file"
                name="Image"
                onChange={(ev) => {
                  setImage(ev.target.files[0]);
                }}
              ></input>
              <button onClick={submit}>Add Course</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCourse;
