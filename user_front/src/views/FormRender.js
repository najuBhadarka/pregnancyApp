import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-formio";
import "./css/bootstrap.min.css";
import "./css/style.css";
import logImg from "./images/logo.png";
import footerImg from "./images/footer.png";
import mobileImg from "./images/m-img.png";
import workingImg from "./images/01.png";
import mobileImg1 from "./images/mobile-bg.png";

const FormRender = () => {
  const [formData, setFormData] = useState();
  const [filledFormData, setFilledFormData] = useState(null);

  console.log("formData:", formData);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      url: "http://64.227.172.35:3000/v1/questionbook/get-form",
      method: "GET",
    })
      .then((response) => {
        setFormData({
          formDataJSON: JSON.parse(response?.data?.data.questions),
          title: response?.data?.data?.title,
          timeline: response?.data?.data?.timeline,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSubmit = (submission) => {
    console.log("Form Submitted:", submission);
    setFilledFormData(submission);
  };
  return (
    <div>
      <div>
        <header>
          <div className="container-fluid">
            <div className="main-header">
              <div className="logo">
                <a href="#">
                  <img src={logImg} alt="logo" />
                </a>
              </div>
              <input type="checkbox" className="menu-btn" id="menu-btn" />
              <div className="notifaction mobile">
                <a href="#">
                  <i className="ri-notification-2-line" />
                </a>
              </div>
              <label htmlFor="menu-btn" className="menu-icon">
                {/* <span><a href="#"><i class="ri-notification-2-line"></i></a></span> */}
                <span className="menu-icon__line" />
              </label>
              <ul className="nav-links">
                <li className="mobile m-logo">
                  <a href="#">
                    <img src={logImg} alt="logo" />
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <span>||</span>progetto
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#" className="active">
                    <span>|</span> tuoi questionari
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <span>|</span> tuoi dati
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">Contatti</a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    <i className="ri-notification-2-line" />
                  </a>
                </li>
                <li className="nav-link">
                  <div className="text-center mt-50 mb-50 mobile">
                    <a href="#" className="solid-btn">
                      Log Out
                    </a>
                  </div>
                </li>
                <li className="nav-link">
                  <div className="text-center mt-50 mb-50 mobile">
                    <img src={mobileImg} alt="m-img" className="img-fluid" />
                  </div>
                </li>
                {/* <li className="nav-link information-privacy mobile">
                  <a href="#">
                    Informativa Privacy
                    <br />e trattamento dei dati
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="bottom-header">
            <div className="container-fluid">
              <ul className="page-breadcrumb">
                <li>
                  <a href="#">
                    | tuoi questionari <span>&gt;</span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#"> 2. Gravidanza</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {/*body section*/}
        <div className="option-detail">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="left-side">
                  <img src={workingImg} className="img-fluid" />
                  <h2>
                    Attività <br /> lavorativa
                  </h2>
                </div>
                <div className="btn-section text-center mt-50 mb-50 desktop">
                  <a href="#" className="solid-btn">
                    Salva ed esci
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="right-side">
                  <div className="d-flex justify-content-evenly mb-4">
                    <h3 className="text-center">
                      Title:{" "}
                      <span className="text-info">{formData?.title}</span>
                    </h3>
                    <h3 className="text-center">
                      Timeline:{" "}
                      <span className="text-info">{formData?.timeline}</span>
                    </h3>
                  </div>
                  <Form form={formData?.formDataJSON} onSubmit={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {filledFormData && (
          <div>
            <h2>Filled Form Details</h2>
            <Form
              form={formData?.formDataJSON}
              submission={filledFormData}
            />
          </div>
        )}
        {/*footer section*/}
        <div className="footer-section">
          <img src={footerImg} alt="footer" className="desktop" />
          <img src={mobileImg1} alt="footer" className="mobile" />
          <div className="btn-section text-center mt-50 mobile">
            <a href="#" className="solid-btn">
              Salva ed esci
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRender;
