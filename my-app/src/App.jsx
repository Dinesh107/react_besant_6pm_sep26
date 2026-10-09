// import FavoriteColor from "./components/favoriteColor.jsx";
// import MyForm from "./components/MyForm.jsx";
// import Patients from "./components/Patients.jsx";
// import Timer from "./components/Timer.jsx";
// import VendorList from "./components/VendorList.jsx";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

// import Office from "./Office.jsx";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Students from "./components/Students";
import OldStudents from "./components/OldStudents";
import NewStudents from "./components/NewStudents";
import ComponentA from "./components/ComponentA";
import FetchData from "./components/FetchData";

function App() {
  return (
    <>
      {/* <Office /> */}
      {/* <FavoriteColor /> */}
      {/* <Patients/> */}
      {/* <VendorList/> */}
      {/* <Timer /> */}
      {/* <MyForm /> */}

      {/* <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home Link</Link>
          </li>
          <li>
            <Link to="/about">About Link</Link>
          </li>
          <li>
            <Link to="/contact">Contact Link</Link>
          </li>
          <li>
            <Link to="/students/101">Students 101</Link>
          </li>
          <li>
            <Link to="/students/102">Students 102</Link>
          </li>
          <li>
            <Link to="/students/103">Students 103</Link>
          </li>
          <li>
            <Link to="/students/104">Students 104</Link>
          </li>
          <li>
            <Link to="/students/oldstudents">OLD Students</Link>
          </li>
          <li>
            <Link to="/students/newtudents">NEW Students</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/students/:id" element={<Students />} />
          <Route path="/students">
            <Route path="oldstudents" element={<OldStudents />} />
            <Route path="newtudents" element={<NewStudents />} />
          </Route>
        </Routes>
      </BrowserRouter> */}

     {/* <ComponentA /> */}
     <FetchData/>

    </>
  );
}

export default App;
