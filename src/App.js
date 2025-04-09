import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Dashboard from "./pages/admin/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/admin/Login";
import UserDeactive from "./pages/users/UserDeactive";
import Useractive from "./pages/users/Useractive";
import Contact from "./pages/admin/Contact";
import Events from "./pages/admin/events/Events";
import AssignEvents from "./pages/admin/events/AssignEvents";
import Compliance from "./pages/admin/compliance/Compliance";
import Advisory from "./pages/admin/advisory/Advisory";
import Document from "./pages/admin/Document";
import EngineerReport from './pages/admin/report/EngineerReport';
import DivisionReport from "./pages/admin/report/DivisionReport";
import DistributionReport from "./pages/admin/report/DistributionReport";
import SecurityReport from "./pages/admin/report/SecurityReport";
import RawsEvents from "./pages/admin/RawsEvents";
import Profile from "./pages/admin/Profile";
import { ClientContext } from "./services/context/ClientContext";
import { useState } from "react";
import Layout from "./layout/Layout";

function App() {
  const [customData, setCustomData] = useState({});
  return (
    <ClientContext.Provider value={{ customData, setCustomData }}>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />            
          </Route>
          <Route path="/admin/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile " element={<Profile />} />
            <Route path="contact-us" element={<Contact />} />        
            <Route path="users/active" element={<Useractive />} />
            <Route path="users/de-active" element={<UserDeactive />} />
            <Route path="events/reported-incidents" element={<Events />} />
            <Route path="events/assigned-incidents" element={<AssignEvents />} />
            <Route path="compliance" element={<Compliance />} />
            <Route path="advisory" element={<Advisory />} />
            <Route path="report/engineer-report" element={<EngineerReport />} />
            <Route path="report/division-report" element={<DivisionReport />} />
            <Route path="report/devices-distribution-report" element={<DistributionReport />} />
            <Route path="report/security-report" element={<SecurityReport />} />
            <Route path="raws-events" element={<RawsEvents />} />
            <Route path="document" element={<Document />} />
          </Route>
          <Route path="/users/" element={<Layout />}>

          </Route>
        </Routes>

      </BrowserRouter>
    </ClientContext.Provider>
  );
}

export default App;
