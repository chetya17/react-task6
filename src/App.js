import "./App.css";
import React from "react";

import Text from "./components/Text";

function App() {
  return (
    <>
      {/* REACT TASK-1 */}
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a
              className="navbar-brand"
              style={{ color: "white", fontSize: "60px" }}
              href="/"
            >
              CHETAN TALELE
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#About">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="App-header">
          <section className="firstSection">
            <div className="leftSection">
              <h1>Hi, this is Chetan Talele</h1>
              <div className="leftSectiondiv">
                I am a web developer and AI&ML Enthusiast
              </div>
            </div>
          </section>
        </header>

        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card" id="About">
                <div className="card-body">
                  <h5 className="card-title">About me</h5>
                  <p className="card-text">
                    I am a passionate full-stack developer with a strong focus
                    on creating clean, elegant, and efficient solutions. With a
                    background in computer science and a keen eye for design, I
                    enjoy turning complex problems into simple, beautiful, and
                    intuitive designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card" id="Projects">
                <div className="card-body">
                  <h5 className="card-title">Projects</h5>
                  <p className="card-text">
                    I have a strong background in frontend development, having
                    completed several projects in this domain. Some notable ones
                    include developing finance applications and creating a clone
                    of the SparkLoop website.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card" id="Contact">
                <div className="card-body">
                  <h5 className="card-title">Contact</h5>
                  <p className="card-text">
                    I am available on: <br />
                    Email: chetan@gmail.com <br />
                    Phone: 9404262734 <br />
                    Github: https://github.com/chetan <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <p>© 2023 Chetan Talele</p>
        </footer>
      </div>
    </>
  );
}

export default App;
