import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Instlogin = () => {
  const history = useNavigate();
  const [Data, setData] = useState({
    Name: "",
    password: "",
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
    };
    axios
      .post(`${process.env.REACT_APP_BACKEND}/getInst`, val)
      .then((res) => {
        if (res.data === "") {
          alert("no user");
        } else {
          if (Data.password === "12345") {
            sessionStorage.setItem("users", Data.Name);
            history("/instpanel");
          } else {
            alert("enter correct password");
          }
        }
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
            INSTRUCTOR LOGIN
          </h1>
          <div>
            <form>
              <label>Name</label>
              <input
                type="text"
                name="Name"
                onChange={getData}
                value={Data.Name}
                placeholder="enter instructor name (see in admin panel)"
              ></input>
              <label className="mt-2">Password</label>
              <input
                type="password"
                name="password"
                onChange={getData}
                value={Data.password}
                placeholder="password is 12345"
              ></input>
              <button onClick={submit} style={{ marginTop: "3rem" }}>
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instlogin;
