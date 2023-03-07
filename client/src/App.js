import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addbatch from "./adminP/Addbatches.jsx";
import AddCourse from "./adminP/AddCourse.jsx";
import AddInstruct from "./adminP/AddInstruct.jsx";
import Adminpanel from "./adminP/Adminpanel.jsx";
import Home from "./adminP/Home.jsx";
import Lecture from "./adminP/Lecture.jsx";
import ListCourse from "./adminP/ListCourse.jsx";
import Listinst from "./adminP/Listinst.jsx";
import Listlecture from "./adminP/Listlecture.jsx";
import Navbar from "./adminP/Navbar.jsx";
import Instlogin from "./InstructorP/Instlogin.jsx";
import Instructorpanel from "./InstructorP/Instructorpanel.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route element={<Navbar></Navbar>}>
          <Route path="/adminp" element={<Adminpanel></Adminpanel>}></Route>
          <Route path="/addcourse" element={<AddCourse></AddCourse>}></Route>
          <Route path="/addbatch" element={<Addbatch></Addbatch>}></Route>
          <Route
            path="/addinstruct"
            element={<AddInstruct></AddInstruct>}
          ></Route>
          <Route path="/listcours" element={<ListCourse></ListCourse>}></Route>
          <Route path="/listinst" element={<Listinst></Listinst>}></Route>
          <Route path="/lecture" element={<Lecture></Lecture>}></Route>
          <Route
            path="/listlecture"
            element={<Listlecture></Listlecture>}
          ></Route>
        </Route>
        <Route path="/instlogin" element={<Instlogin></Instlogin>}></Route>
        <Route
          path="/instpanel"
          element={<Instructorpanel></Instructorpanel>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
