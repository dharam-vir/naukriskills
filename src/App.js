import { Fragment, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/frontend/home/Home";
import Layout from "./layout/Layout";
import Login from "./pages/frontend/login/Login";
import About from "./pages/frontend/about/About";
import Contact from "./pages/frontend/contect/Contect"; 
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
// import Myprofile from "./pages/users/Myprofile";
import Register from './pages/frontend/login/Register';
import PrivateRoute from "./middleware/PrivateRoute";
import Forgotpassword from "./pages/frontend/login/Forgotpassword";
import Category from "./pages/frontend/category/Category";
import Joblisting from "./pages/frontend/listing/Joblisting";
import Company from "./pages/frontend/company/Company";
import Details from "./pages/frontend/company/Details";
import Search from "./pages/frontend/search/Search";
import Faquser from "./pages/frontend/faq/Faquser";
import ResumeUploader from "./pages/users/ResumeUploader";
import Projects from "./pages/users/Projects";
import KeySkills from "./pages/users/KeySkills";
import Employment from "./pages/users/Employment";
import Education from "./pages/users/Education";
import PersonelDetails from "./pages/users/PersonelDetails";
import CareerProfile from "./pages/users/CareerProfile";
// import ProfileSummary from './pages/users/ProfileSummary';
import Profile from "./pages/users/Profile";
import Changepassword from "./pages/users/Changepassword";

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
              <Route element={<Layout Details="Details" />}>
                <Route path="/" element={<Home />} />
              </Route>
              <Route element={<Layout Details="sdfsfsf" />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<Forgotpassword />} />
                <Route path="/jobs-categories" element={<Category />} />                
                <Route path="/about-us" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/terms-condition" element={<Termcondition />} />
                <Route path="/how-it-works" element={<Termcondition />} />
                <Route path="/support" element={<Termcondition />} />
                <Route path="/blogs/" element={<Termcondition />} />
                <Route path="/jobs/:category" element={<Joblisting />} /> 
                <Route path="/job/:city/:name" element={<Details />} /> 
                <Route path="/company/:name" element={<Company />} />
                <Route path="/search" element={<Search />} />
                <Route path="/faq-user" element={<Faquser />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="/user" element={<PrivateRoute><Layoutuser /></PrivateRoute>}>
                <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="jobs-post" element={<PrivateRoute><Jobspost /></PrivateRoute>} />
                <Route path="manage-jobs" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="manage-resume" element={<PrivateRoute><ResumeUploader /></PrivateRoute>} />
                <Route path="resume-headline" element={<PrivateRoute><resumeHeadline /></PrivateRoute>} />
                <Route path="projects" element={<PrivateRoute><Projects /></PrivateRoute>} />
                {/* <Route path="profile-summary" element={<PrivateRoute><ProfileSummary /></PrivateRoute>} /> */}
                <Route path="key-skills" element={<PrivateRoute><KeySkills /></PrivateRoute>} />                
                <Route path="employment" element={<PrivateRoute><Employment /></PrivateRoute>} />
                <Route path="education" element={<PrivateRoute><Education /></PrivateRoute>} />
                <Route path="personel-details" element={<PrivateRoute><PersonelDetails /></PrivateRoute>} />
                <Route path="career-profile" element={<PrivateRoute><CareerProfile /></PrivateRoute>} />
                <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path="change-password" element={<PrivateRoute><Changepassword /></PrivateRoute>} />
              </Route>
              <Route path="/employer" element={<Layoutuser />}>
                 <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="jobs-post" element={<PrivateRoute><Jobspost /></PrivateRoute>} />
                <Route path="manage-jobs" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="manage-resume" element={<PrivateRoute><ResumeUploader /></PrivateRoute>} />
                <Route path="resume-headline" element={<PrivateRoute><resumeHeadline /></PrivateRoute>} />
                <Route path="projects" element={<PrivateRoute><Projects /></PrivateRoute>} />
                {/* <Route path="profile-summary" element={<PrivateRoute><ProfileSummary /></PrivateRoute>} /> */}
                <Route path="key-skills" element={<PrivateRoute><KeySkills /></PrivateRoute>} />                
                <Route path="employment" element={<PrivateRoute><Employment /></PrivateRoute>} />
                <Route path="education" element={<PrivateRoute><Education /></PrivateRoute>} />
                <Route path="personel-details" element={<PrivateRoute><PersonelDetails /></PrivateRoute>} />
                <Route path="career-profile" element={<PrivateRoute><CareerProfile /></PrivateRoute>} />
                <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path="change-password" element={<PrivateRoute><Changepassword /></PrivateRoute>} />
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
