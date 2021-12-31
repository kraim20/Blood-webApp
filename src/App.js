import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Aboutus} from "./pages/Aboutus";
import { Contactus } from "./pages/Contactus";
import { Faqs } from "./pages/Faqs";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { AdminDashboard } from "./pages/AdminDashboard";
import { Footer } from "./components/Footer";
import TableDonors from "./components/TableDonors";
import TableNotifs from "./components/TableNotifs";
import PersonnelInfoDonor from "./components/PersonnelInfoDonor";
import PersonnelInfoCenter from "./components/PersonnelInfoCenter";
import { NewNotification } from "./components/NewNotification";
import { UpdateNotification } from "./components/UpdateNotification";
import  TableCenter from "./components/Tablecenter";
import { NavbarAdmin } from "./components/NavbarAdmin";
function App() {
  return (
          <BrowserRouter>
                <Navbar/>
                <Routes>
                  <Route path="/" exact element={<Home/>} />
                  <Route path="/aboutus" element={<Aboutus/>} />
                  <Route path="/contactus" element={<Contactus/>} />
                  <Route path="/faqs" element={<Faqs/>} />
                  <Route path="/signin" element={<SignIn/>} />
                  <Route path="/signup" element={<SignUp/>} />
                  <Route path="/admindashboard" element={<AdminDashboard/>} />
                  <Route path="/tabledonors" element={<TableDonors/>}/>
                  <Route path="/tablecenter" element={<TableCenter />} />
                  <Route path="/tablenotifs" element={<TableNotifs/>}/>
                  <Route path="/personnelinfodonor" element={<PersonnelInfoDonor/>}/>
                  <Route path="/personnelinfocenter" element={<PersonnelInfoCenter />} />
                  <Route path="/newnotif" element={<NewNotification/>}/>
                  <Route path="/updatenotif" element={<UpdateNotification/>}/>
                  <Route path="/navbaradmin" element={<NavbarAdmin/>}/>
                </Routes>
                <Footer/>
          </BrowserRouter>
  );
};
export default App;
