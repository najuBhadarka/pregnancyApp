import React, { useEffect } from "react";
import { Container, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

// img
import auth01 from "../../assets/images/auth/01.png";
import auth02 from "../../assets/images/auth/02.png";
import auth03 from "../../assets/images/auth/03.png";
import auth04 from "../../assets/images/auth/04.png";
import auth05 from "../../assets/images/auth/05.png";
import auth06 from "../../assets/images/auth/06.png";

const Maintenance = () => {
  useEffect(() => {
    //count down plugin js
    function getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      return {
        total,
        days,
        hours,
        minutes,
        seconds,
      };
    }

    function initializeClock(elem, endtime) {
      const clock = document.querySelector(elem);
      const daysSpan = clock.querySelector("[data-days]");
      const hoursSpan = clock.querySelector("[data-hours]");
      const minutesSpan = clock.querySelector("[data-minutes]");
      const secondsSpan = clock.querySelector("[data-seconds]");

      const timeinterval = setInterval(updateClock, 1000);

      function updateClock() {
        const t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
    }

    let time = document.querySelector(".countdown").getAttribute("data-date");
    if (time === undefined) {
      time = Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000;
    }
    const deadline = new Date(time);
    initializeClock(".countdown", deadline);
  });

  return (
    <Container fluid className="p-0">
      <div className="iq-maintenance text-center">
        <div>
          <img src={auth02} className="rounded-circle nine-img" alt="images" />
          <img src={auth01} className="rounded-circle ten-img" alt="images" />
          <img
            src={auth06}
            className="rounded-circle eleven-img"
            alt="images"
          />
          <img
            src={auth05}
            className="rounded-circle twelve-img"
            alt="images"
          />
          <img
            src={auth03}
            className="rounded-circle thirteen-img"
            alt="images"
          />
          <img
            src={auth04}
            className="rounded-circle fifteen-img"
            alt="images"
          />
        </div>
        <div className="user-img1">
          <svg
            width="1857"
            viewBox="0 0 1857 327"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.05078 189.348C86.8841 109.514 348.951 -25.2523 734.551 74.3477C1120.15 173.948 1641.22 91.181 1853.55 37.3477"
              stroke="#EA6A12"
              strokeOpacity="0.3"
            />
            <path
              d="M0.99839 152.331C90.9502 80.6133 364.495 -28.9952 739.062 106.31C1113.63 241.616 1640.16 208.056 1856.6 174.363"
              stroke="#EA6A12"
              strokeOpacity="0.3"
            />
          </svg>
        </div>
        <div className="maintenance-bottom pb-0">
          <div style={{ background: "transparent", height: " 320px" }}>
            <div>
              <div className="bottom-text general-zindex">
                <h1 className="mb-2">Hang on! We are under maintenance</h1>
                <p>
                  It will not take a long time till we get the error fiked. We
                  wii live again in
                </p>
                <ul
                  className="countdown d-flex justify-content-center align-items-center list-inline"
                  data-date="Feb 02 2022 20:20:22"
                >
                  <li>
                    <span data-days>0</span>Days
                  </li>
                  <li>
                    <span data-hours>0</span>Hours
                  </li>
                  <li>
                    <span data-minutes>0</span>Minutes
                  </li>
                  <li>
                    <span data-seconds>0</span>Seconds
                  </li>
                </ul>
                <div className="w-50 mx-auto mt-2">
                  <InputGroup className="form-group search-input">
                    <FormControl
                      type="text"
                      className="maintain"
                      placeholder="Enter your mail"
                    />
                    <Link to="#" className="btn btn-primary rounded-pill ms-2">
                      Notify Me
                    </Link>
                  </InputGroup>
                </div>
              </div>
              <div className="c xl-circle">
                <div className="c lg-circle">
                  <div className="c md-circle">
                    <div className="c sm-circle">
                      <div className="c xs-circle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Maintenance;
