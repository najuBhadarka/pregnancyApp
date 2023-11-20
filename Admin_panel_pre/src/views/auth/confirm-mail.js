import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/aanch_logo.png";
import auth01 from "../../assets/images/auth/01.png";
import auth02 from "../../assets/images/auth/02.png";
import auth03 from "../../assets/images/auth/03.png";
import auth04 from "../../assets/images/auth/04.png";
import auth05 from "../../assets/images/auth/05.png";
import auth06 from "../../assets/images/auth/06.png";
import Card from "../../components/card";

// gsap
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ConfirmMail = () => {
  useEffect(() => {
    if (typeof gsap !== typeof undefined) {
      if (typeof ScrollTrigger !== typeof undefined) {
        gsap.registerPlugin(ScrollTrigger);
      }

      const gsapAnimate = {
        onStart: (elem) => {
          const option = {
            opacity: 0,
            scale: 1,
            position: {
              x: 0,
              y: 0,
            },
            ease: "",
            duration: 1,
            delay: 0.4,
            rotate: 0,
          };

          option.position.x = gsapAnimate.validValue(
            elem.dataset.iqPositionX,
            0
          );

          option.position.y = gsapAnimate.validValue(
            elem.dataset.iqPositionY,
            0
          );

          option.rotate = gsapAnimate.validValue(elem.dataset.iqRotate, 0);

          option.scale = gsapAnimate.validValue(elem.dataset.iqScale, 1);

          option.opacity = gsapAnimate.validValue(elem.dataset.iqOpacity, 0);

          option.delay = gsapAnimate.validValue(elem.dataset.iqDelay, 0.4);

          option.duration = gsapAnimate.validValue(
            elem.dataset.iqDuration,
            1.5
          );

          option.ease = gsapAnimate.validValue(elem.dataset.iqEase, "");

          const setOption = {
            opacity: option.opacity,
            scale: option.scale,
            x: option.position.x,
            y: option.position.y,
            ease: option.ease,
            rotate: option.rotate,
            duration: option.duration,
            delay: option.delay,
          };

          if (typeof ScrollTrigger !== typeof undefined) {
            if (elem.dataset.iqTrigger === "scroll") {
              const scrub =
                elem.dataset.iqScrollScrub === "true" ? true : false;

              setOption.scrollTrigger = {
                trigger: elem,
                start: () => "top 95%",
                scrub: scrub,
                markers: false,
              };
            }
          }

          gsap.from(elem, setOption);
        },

        validValue: (attr, defaultVal) => {
          if (attr !== undefined && attr !== null) {
            return attr;
          }
          return defaultVal;
        },
      };

      const gsapElem = document.querySelectorAll('[data-iq-gsap="onStart"]');

      Array.from(gsapElem, (elem) => {
        gsapAnimate.onStart(elem);
        return null;
      });

      // Home Page 1 banner

      if (document.querySelectorAll("#auth-login").length) {
        gsap.from(".first-img", {
          opacity: 0,
          scale: 0.8,
          rotate: -45,
          ease: "power1.out",
          duration: 1,
          delay: 0.4,
        });
        gsap.from(".second-img", {
          opacity: 0,
          scale: 0.8,
          rotate: -45,
          ease: "power1.out",
          duration: 1,
          delay: 0.6,
        });
        gsap.from(".third-img", {
          opacity: 0,
          scale: 0.8,
          rotate: -45,
          ease: "power1.out",
          duration: 1,
          delay: 0.8,
        });
        gsap.from(".fourth-img", {
          opacity: 0,
          scale: 0.8,
          rotate: -45,
          ease: "power1.out",
          duration: 1,
          delay: 1.2,
        });
        gsap.from(".fifth-img", {
          opacity: 0,
          scale: 0.8,
          rotate: -45,
          ease: "power1.out",
          duration: 1,
          delay: 1.4,
        });
        gsap.from(".six-img", {
          opacity: 0,
          scale: 0.8,
          rotate: -45,
          ease: "power1.out",
          duration: 1,
          delay: 1.6,
        });
        gsap.from(".seventh-img", {
          opacity: 0,
          scale: 0.8,
          rotate: -45,
          ease: "power1.out",
          duration: 1,
          delay: 1.6,
        });
        gsap.from(".eight-img", {
          opacity: 0,
          scale: 0.8,
          rotate: -45,
          ease: "power1.out",
          duration: 1,
          delay: 1.8,
        });
      }
    }
  }, []);

  return (
    <section className="container-fluid bg-circle" id="auth-login">
      <Row className="align-items-center">
        <Col md="12" lg="7" xl="4">
          <Link to="/">
            <img src={logo} className="img-fluid logo-img ms-5" alt="img2" />
          </Link>
          <Card.Body className="text-center">
            <svg
              width="86"
              viewBox="0 0 86 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.4591 8.17851C44.5206 6.49584 43.205 5.07059 41.5222 5.12837C33.9539 5.38825 26.5686 7.64133 20.1257 11.6841C12.8201 16.2681 7.06402 22.9412 3.60569 30.836C0.147358 38.7307 -0.853289 47.482 0.733814 55.9523C2.32092 64.4225 6.42237 72.2201 12.5051 78.3314C18.5877 84.4426 26.3703 88.585 34.8413 90.22C43.3122 91.8551 52.0797 90.9072 60.0041 87.4995C67.9285 84.0918 74.6433 78.382 79.2758 71.1122C83.36 64.7029 85.6591 57.3423 85.9649 49.7871C86.0331 48.1028 84.6141 46.7774 82.9292 46.829V46.829C81.2442 46.8806 79.9333 48.2905 79.8453 49.974C79.5143 56.3045 77.5522 62.4616 74.1259 67.8384C70.1511 74.0762 64.3895 78.9754 57.5901 81.8993C50.7907 84.8232 43.2679 85.6365 35.9995 84.2336C28.7312 82.8307 22.0534 79.2764 16.8343 74.0327C11.6151 68.789 8.09591 62.0984 6.73412 54.8306C5.37233 47.5629 6.23092 40.054 9.19829 33.28C12.1657 26.506 17.1046 20.7803 23.3731 16.847C28.7786 13.4551 34.9573 11.5315 41.3 11.2393C42.9818 11.1619 44.3975 9.86097 44.4591 8.17851V8.17851Z"
                fill="#EA6A12"
              />
              <path
                d="M40.0136 54.5643L76.8701 18.1495C78.1796 16.8557 80.2738 16.8169 81.6303 18.0614V18.0614C83.0887 19.3993 83.1259 21.687 81.7118 23.0717L40.0135 63.9056L21.8386 46.082C20.6265 44.8933 20.6169 42.9441 21.8173 41.7435V41.7435C22.9764 40.5842 24.8443 40.5472 26.0483 41.6598L40.0136 54.5643Z"
                fill="#EA6A12"
              />
            </svg>
            <h2 className="mt-3 mb-0 ">Success !</h2>
            <p className="cnf-mail mb-1">
              A email has been send to youremail@domain.com. Please check for an
              email from company and click on the included link to reset your
              password.
            </p>
            <div className="d-inline-block w-100">
              <Link to="/" className="btn btn-primary mt-3">
                Back to Home
              </Link>
            </div>
          </Card.Body>
        </Col>
        <Col
          md="12"
          lg="5"
          xl="8"
          className="d-lg-block d-none vh-100 overflow-hidden"
        >
          <div>
            <img
              src={auth01}
              className="hover-img rounded-circle first-img"
              alt="images"
            />
            <img
              src={auth02}
              className="hover-img rounded-circle second-img"
              alt="images"
            />
            <img
              src={auth03}
              className="hover-img rounded-circle third-img"
              alt="images"
            />
            <img
              src={auth04}
              className="hover-img rounded-circle fourth-img"
              alt="images"
            />
            <img
              src={auth05}
              className="hover-img rounded-circle fifth-img"
              alt="images"
            />
            <img
              src={auth06}
              className="hover-img rounded-circle six-img"
              alt="images"
            />
            <img
              src={auth01}
              className="hover-img rounded-circle seventh-img"
              alt="images"
            />
            <img
              src={auth02}
              className="hover-img rounded-circle eight-img"
              alt="images"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default ConfirmMail;
