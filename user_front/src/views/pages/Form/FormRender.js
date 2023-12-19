import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-formio";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/style.css";
import logImg from "../../../assets/images/logo.png";
import footerImg from "../../../assets/images/footer.png";
import mobileImg from "../../../assets/images/m-img.png";
import workingImg from "../../../assets/images/01.png";
import mobileImg1 from "../../../assets/images/mobile-bg.png";
import { useDispatch, useSelector } from "react-redux";
import { getForm, submitForm } from "../../../redux/questionaries/questionariesAction";

const FormRender = () => {
  const formData = useSelector((state) => state?.QuestionariesReducer?.singleForm)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getForm())
  }, []);

  const handleSubmit = (submission) => {
    const submitedData = {
      formId: formData?.formId,
      title: formData?.title,
      timeline: formData?.timeline,
      answer: { formData: JSON.stringify(formData?.formData), submission: JSON.stringify(submission) }
    }
    dispatch(submitForm(submitedData))
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
                  <a href="#" onClick={() => navigate('/')}>
                    <i className="ri-logout-box-line"></i>
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
                  <Form form={formData?.formData} onSubmit={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
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
