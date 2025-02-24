import logo from './logo.svg';
import './App.css';

import { useRef } from 'react';

import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Academics from './pages/academics/Academics.jsx';
import Admission from './pages/admission/Admission.jsx';
import StudentLife from './pages/student-life/StudentLife.jsx';
import Contact from './pages/contact/Contact.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";

function App() {


    const home=useRef("");
    const features=useRef("");
    const testimonial=useRef("");
    const FAQ=useRef("");



  return (
    <Router>
      <Routes>
        <Route path="/home" element={
          <div className="app-wrapper">
          <div className="header">
            <Header />
          </div>

          <div className="body">
            <div className="body-home">
              <Home features={features}/>
            </div>
          </div>

          <div className="footer">
            <Footer features={features} />
          </div>

        </div>
        } ></Route>

        <Route path="/about" element={
          <div className="app-wrapper">
            <div className="header">
              <Header />
            </div>

            <div className="body">
              <div className="body-home">
                <About />
              </div>
            </div>

            <div className="footer">
              <Footer />
            </div>

          </div>
        } ></Route>

        <Route path="/academics" element={
          <div className="app-wrapper">
            <div className="header">
              <Header />
            </div>

            <div className="body">
              <div className="body-home">
                <Academics />
              </div>
            </div>

            <div className="footer">
              <Footer />
            </div>

          </div>
        } ></Route>

        <Route path="/admissions" element={
          <div className="app-wrapper">
            <div className="header">
              <Header />
            </div>

            <div className="body">
              <div className="body-home">
                <Admission />
              </div>
            </div>

            <div className="footer">
              <Footer />
            </div>

          </div>
        } ></Route>

        <Route path="/studentsLife" element={
          <div className="app-wrapper">
            <div className="header">
              <Header />
            </div>

            <div className="body">
              <div className="body-home">
                <StudentLife />
              </div>
            </div>

            <div className="footer">
              <Footer />
            </div>

          </div>
        } ></Route>

        <Route path="/contact" element={
          <div className="app-wrapper">
            <div className="header">
              <Header />
            </div>

            <div className="body">
              <div className="body-home">
                <Contact />
              </div>
            </div>

            <div className="footer">
              <Footer />
            </div>

          </div>
        } ></Route>

      </Routes>
    </Router>
  );
}

export default App;
