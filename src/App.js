import { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/frontend/home/Home";
import Layout from "./layout/Layout";
import Login from "./pages/frontend/login/Login";
import About from "./pages/frontend/about/About";
import Contact from "./pages/frontend/contect/Contect"; // If this is actually a Contact page
import Privacy from "./pages/frontend/privacy/Privacy";
import Termcondition from "./pages/frontend/termcondition/Termcondition";
import NotFound from "./pages/NotFound";
import { ClientContext } from "./services/context/ClientContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/loader/Loader";
import Layoutuser from "./layout/Layoutuser";
import Dashboard from "./pages/users/Dashboard";
import Jobspost from "./pages/users/Jobspost";
import Myprofile from "./pages/users/Myprofile";

function App() {
  const [customData, setCustomData] = useState({});
  const [loadComponents, setLoadComponents] = useState(true);

  return (
    <Fragment>
      <ClientContext.Provider value={{ customData, setCustomData, loadComponents, setLoadComponents }}>
        {loadComponents ? (
          <BrowserRouter>
            <Loader showLoader={false} />
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
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/terms-condition" element={<Termcondition />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="/users" element={<Layoutuser />}>
                 <Route path="dashboard" element={<Dashboard />} />
                 <Route path="jobs-post" element={<Jobspost />} />
                 <Route path="manage-jobs" element={<Dashboard />} />
                 <Route path="manage-resume" element={<Dashboard />} />
                 <Route path="bookmarks" element={<Dashboard />} />
                 <Route path="bookmarks" element={<Dashboard />} />
                 <Route path="my-profile" element={<Myprofile />} />
                 <Route path="reviews" element={<Dashboard />} />
                 <Route path="freelancer-manage-tasks-list" element={<Dashboard />} />
                 <Route path="manage-bidders-list" element={<Dashboard />} />
                 <Route path="freelancer-active-bids" element={<Dashboard />} />
                 <Route path="freelancer-add-post-bids" element={<Dashboard />} />
              </Route>
              <Route path="/admin" element={<Layoutuser />}>
                 <Route path="dashboard" element={<Home />} />
              </Route>
            </Routes>
          </BrowserRouter>
        ) : (
          <Loader showLoader={true} />
        )}
      </ClientContext.Provider>
    </Fragment>
  );
}

export default App;
