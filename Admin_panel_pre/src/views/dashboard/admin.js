import React, { useEffect } from "react";
// import { Row, Col, Dropdown, Nav, Tab, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Card from "../../../src/components/card";
// import Chart from "react-apexcharts";
// import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CardBox } from "../../components/CardBox";
import { useSelector } from "react-redux";
import moment from "moment";

// import Progress from "../../components/progress.js";

// import Circularprogressbar from "../../components/circularprogressbar";
// import Table from "../../components/controls/Table";

// import lay6 from "../../assets/images/layouts/6.png";
// import lay39 from "../../assets/images/layouts/39.png";
// import lay7 from "../../assets/images/layouts/7.png";
// import admin01 from "../../assets/images/admin/01.png";
// import admin02 from "../../assets/images/admin/02.png";
// import admin03 from "../../assets/images/admin/03.png";
// import admin04 from "../../assets/images/admin/04.png";
// import admin05 from "../../assets/images/admin/05.png";
// import admin06 from "../../assets/images/admin/06.png";
// import admin07 from "../../assets/images/admin/07.png";
// import admin08 from "../../assets/images/admin/08.png";
// import admin09 from "../../assets/images/admin/09.png";
// import admin10 from "../../assets/images/admin/10.png";
// import admin11 from "../../assets/images/admin/11.png";
// import admin12 from "../../assets/images/admin/12.png";
// import avt10 from "../../assets/images/avatars/10.png";
// import avt06 from "../../assets/images/avatars/06.png";
// import avt07 from "../../assets/images/avatars/07.png";
// import avt08 from "../../assets/images/avatars/08.png";
// import avt09 from "../../assets/images/avatars/09.png";
// import lay13 from "../../assets/images/layouts/13.png";
// import lay12 from "../../assets/images/layouts/12.png";
// import lay10 from "../../assets/images/layouts/10.png";
// import lay11 from "../../assets/images/layouts/11.png";

SwiperCore.use([Navigation]);

const Admin = () => {
  const allOrder = useSelector((state) => state?.order?.order);

  const totalOrderCount = allOrder?.filter(
    (ele) =>
      moment(ele.createdAt).format("DD/MM/YYYY") ==
      moment().format("DD/MM/YYYY"),
  ).length;

  const prepareOrderCount = allOrder?.filter((ele) => {
    if (
      ele.order_status == "Prepared" &&
      moment(ele.createdAt).format("DD/MM/YYYY") ==
        moment().format("DD/MM/YYYY")
    ) {
      return ele;
    }
  }).length;
  const totalDeliveryCount = allOrder?.filter((ele) => {
    if (
      ele.delivery_status == "Delivered" &&
      moment(ele.createdAt).format("DD/MM/YYYY") ==
        moment().format("DD/MM/YYYY")
    ) {
      return ele;
    }
  }).length;

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
            0,
          );

          option.position.y = gsapAnimate.validValue(
            elem.dataset.iqPositionY,
            0,
          );

          option.rotate = gsapAnimate.validValue(elem.dataset.iqRotate, 0);

          option.scale = gsapAnimate.validValue(elem.dataset.iqScale, 1);

          option.opacity = gsapAnimate.validValue(elem.dataset.iqOpacity, 0);

          option.delay = gsapAnimate.validValue(elem.dataset.iqDelay, 0.4);

          option.duration = gsapAnimate.validValue(
            elem.dataset.iqDuration,
            1.5,
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

      if (document.querySelectorAll("auth-login").length) {
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

  // const chart1 = {
  //   options: {
  //     chart: {
  //       id: "admin-chart-1",
  //       animations: {
  //         enabled: true,
  //         easing: "easeinout",
  //         speed: 800,
  //         animateGradually: {
  //           enabled: false,
  //           delay: 150,
  //         },
  //         dynamicAnimation: {
  //           enabled: true,
  //           speed: 350,
  //         },
  //       },
  //       zoom: {
  //         enabled: false,
  //       },
  //       toolbar: {
  //         show: false,
  //       },
  //     },
  //     tooltip: {
  //       enabled: true,
  //     },
  //     stroke: {
  //       width: [0, 2],
  //     },
  //     dataLabels: {
  //       enabled: true,
  //       enabledOnSeries: [1],
  //       offsetX: 3.0,
  //       offsetY: -1.6,
  //       style: {
  //         fontSize: "1px",
  //         fontFamily: "Helvetica, Arial, sans-serif",
  //         fontWeight: "bold",
  //       },
  //       background: {
  //         enabled: true,
  //         foreColor: "#fff",
  //         color: "#fff",
  //         padding: 10,
  //         borderRadius: 10,
  //         borderWidth: 0,
  //         borderColor: "#fff",
  //         opacity: 1,
  //       },
  //     },
  //     colors: ["#EA6A12", "#EA6A12"],
  //     plotOptions: {
  //       bar: {
  //         horizontal: false,
  //         columnWidth: "16%",
  //         endingShape: "rounded",
  //         borderRadius: 5,
  //       },
  //     },
  //     legend: {
  //       show: false,
  //       offsetY: -25,
  //       offsetX: -5,
  //     },
  //     xaxis: {
  //       categories: [
  //         "Jan",
  //         "Feb",
  //         "Mar",
  //         "Apr",
  //         "May",
  //         "Jun",
  //         "Jul",
  //         "Aug",
  //         "Sep",
  //         "Oct",
  //         "Nov",
  //         "Dec",
  //       ],
  //       labels: {
  //         minHeight: 20,
  //         maxHeight: 20,
  //       },
  //     },
  //     yaxis: {
  //       labels: {
  //         minWidth: 20,
  //         maxWidth: 20,
  //       },
  //     },
  //   },
  //   series: [
  //     {
  //       type: "column",
  //       data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
  //     },
  //     {
  //       type: "line",
  //       curve: "smooth",
  //       data: [33, 42, 60, 120, 140, 170, 180, 140, 130, 110, 70, 80],
  //     },
  //   ],
  // };

  // const chart2 = {
  //   options: {
  //     colors: ["#3BB77E"],
  //     chart: {
  //       id: "admin-chart-8",
  //       sparkline: {
  //         enabled: true,
  //       },
  //       zoom: {
  //         enabled: false,
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       curve: "smooth",
  //     },
  //     tooltip: {
  //       enabled: false,
  //     },
  //     title: {
  //       text: "",
  //       align: "left",
  //     },

  //     xaxis: {
  //       categories: ["Jan", "Feb", "Mar"],
  //     },
  //   },
  //   series: [
  //     {
  //       name: "Total sales",
  //       data: [10, 10, 25, 10],
  //     },
  //   ],
  // };

  // const chart3_product = {
  //   options: {
  //     chart: {
  //       id: "admin-chart-product",
  //       animations: {
  //         enabled: true,
  //         easing: "easeinout",
  //         speed: 800,
  //         dynamicAnimation: {
  //           enabled: true,
  //           speed: 400,
  //         },
  //       },

  //       toolbar: {
  //         show: false,
  //       },
  //     },
  //     plotOptions: {
  //       bar: {
  //         columnWidth: "71%",
  //       },
  //     },
  //     colors: [
  //       function ({ value }) {
  //         if (value < 8) {
  //           return "#FBE1D0";
  //         } else {
  //           return "#EA6A12";
  //         }
  //       },
  //     ],
  //     states: {
  //       normal: {
  //         filter: {
  //           type: "none",
  //           value: 0,
  //         },
  //       },
  //       hover: {
  //         filter: {
  //           type: "none",
  //           value: 0.5,
  //         },
  //       },
  //       active: {
  //         allowMultipleDataPointsSelection: false,
  //         filter: {
  //           type: "none",
  //           value: 0.1,
  //         },
  //       },
  //     },
  //     legend: {
  //       show: false,
  //     },
  //     dataLabels: {
  //       enabled: false,
  //       offsetY: -20,
  //     },
  //     grid: {
  //       show: false,
  //     },
  //     tooltip: {
  //       enabled: true,
  //     },
  //     xaxis: {
  //       categories: ["Sun", "Mon", "The", "Wed", "Thu", "Fri", "Sat"],
  //       labels: {
  //         minHeight: 20,
  //         maxHeight: 20,
  //       },
  //       axisTicks: {
  //         show: false,
  //       },
  //       axisBorder: {
  //         show: false,
  //       },
  //     },

  //     yaxis: {
  //       axisBorder: {
  //         show: false,
  //       },
  //       axisTicks: {
  //         show: false,
  //       },
  //       labels: {
  //         show: false,
  //         minWidth: 20,
  //         maxWidth: 20,
  //         formatter: function (val) {
  //           return val + "%";
  //         },
  //       },
  //     },
  //     responsive: [
  //       {
  //         breakpoint: 1366,
  //         options: {
  //           chart: {
  //             height: 155,
  //           },
  //         },
  //       },
  //     ],
  //   },
  //   series: [
  //     {
  //       name: "Product",
  //       data: [3.3, 2.9, 3.8, 9.1, 6.0, 2.8, 4.5],
  //     },
  //   ],
  // };

  // const chart3_customer = {
  //   options: {
  //     chart: {
  //       id: "admin-chart-customer",
  //       animations: {
  //         enabled: true,
  //         easing: "easeinout",
  //         speed: 800,
  //         dynamicAnimation: {
  //           enabled: true,
  //           speed: 400,
  //         },
  //       },

  //       toolbar: {
  //         show: false,
  //       },
  //     },
  //     plotOptions: {
  //       bar: {
  //         columnWidth: "71%",
  //       },
  //     },
  //     colors: [
  //       function ({ value }) {
  //         if (value < 8) {
  //           return "#FBE1D0";
  //         } else {
  //           return "#EA6A12";
  //         }
  //       },
  //     ],
  //     states: {
  //       normal: {
  //         filter: {
  //           type: "none",
  //           value: 0,
  //         },
  //       },
  //       hover: {
  //         filter: {
  //           type: "none",
  //           value: 0.5,
  //         },
  //       },
  //       active: {
  //         allowMultipleDataPointsSelection: false,
  //         filter: {
  //           type: "none",
  //           value: 0.1,
  //         },
  //       },
  //     },
  //     legend: {
  //       show: false,
  //     },
  //     dataLabels: {
  //       enabled: false,
  //       offsetY: -20,
  //     },
  //     grid: {
  //       show: false,
  //     },
  //     tooltip: {
  //       enabled: true,
  //     },
  //     xaxis: {
  //       categories: ["Sun", "Mon", "The", "Wed", "Thu", "Fri", "Sat"],
  //       labels: {
  //         minHeight: 20,
  //         maxHeight: 20,
  //       },
  //       axisTicks: {
  //         show: false,
  //       },
  //       axisBorder: {
  //         show: false,
  //       },
  //     },

  //     yaxis: {
  //       axisBorder: {
  //         show: false,
  //       },
  //       axisTicks: {
  //         show: false,
  //       },
  //       labels: {
  //         show: false,
  //         minWidth: 20,
  //         maxWidth: 20,
  //         formatter: function (val) {
  //           return val + "%";
  //         },
  //       },
  //     },
  //     responsive: [
  //       {
  //         breakpoint: 1366,
  //         options: {
  //           chart: {
  //             height: 155,
  //           },
  //         },
  //       },
  //     ],
  //   },
  //   series: [
  //     {
  //       name: "Product",
  //       data: [3.2, 2.8, 4.5, 4.7, 9.1, 8.6, 5.2],
  //     },
  //   ],
  // };

  // const chart3_member = {
  //   options: {
  //     chart: {
  //       id: "admin-chart-member",
  //       animations: {
  //         enabled: true,
  //         easing: "easeinout",
  //         speed: 800,
  //         dynamicAnimation: {
  //           enabled: true,
  //           speed: 400,
  //         },
  //       },

  //       toolbar: {
  //         show: false,
  //       },
  //     },
  //     plotOptions: {
  //       bar: {
  //         columnWidth: "71%",
  //       },
  //     },
  //     colors: [
  //       function ({ value }) {
  //         if (value < 8) {
  //           return "#FBE1D0";
  //         } else {
  //           return "#EA6A12";
  //         }
  //       },
  //     ],
  //     states: {
  //       normal: {
  //         filter: {
  //           type: "none",
  //           value: 0,
  //         },
  //       },
  //       hover: {
  //         filter: {
  //           type: "none",
  //           value: 0.5,
  //         },
  //       },
  //       active: {
  //         allowMultipleDataPointsSelection: false,
  //         filter: {
  //           type: "none",
  //           value: 0.1,
  //         },
  //       },
  //     },
  //     legend: {
  //       show: false,
  //     },
  //     dataLabels: {
  //       enabled: false,
  //       offsetY: -20,
  //     },
  //     grid: {
  //       show: false,
  //     },
  //     tooltip: {
  //       enabled: true,
  //     },
  //     xaxis: {
  //       categories: ["Sun", "Mon", "The", "Wed", "Thu", "Fri", "Sat"],
  //       labels: {
  //         minHeight: 20,
  //         maxHeight: 20,
  //       },
  //       axisTicks: {
  //         show: false,
  //       },
  //       axisBorder: {
  //         show: false,
  //       },
  //     },

  //     yaxis: {
  //       axisBorder: {
  //         show: false,
  //       },
  //       axisTicks: {
  //         show: false,
  //       },
  //       labels: {
  //         show: false,
  //         minWidth: 20,
  //         maxWidth: 20,
  //         formatter: function (val) {
  //           return val + "%";
  //         },
  //       },
  //     },
  //     responsive: [
  //       {
  //         breakpoint: 1366,
  //         options: {
  //           chart: {
  //             height: 155,
  //           },
  //         },
  //       },
  //     ],
  //   },
  //   series: [
  //     {
  //       name: "Product",
  //       data: [9.3, 3.9, 8.8, 4.1, 6.0, 2.8, 4.5],
  //     },
  //   ],
  // };

  // const chart4 = {
  //   options: {
  //     colors: ["#EA6A12"],
  //     chart: {
  //       id: "admin-chart-4",
  //       sparkline: {
  //         enabled: true,
  //       },
  //       zoom: {
  //         enabled: false,
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       curve: "smooth",
  //     },
  //     title: {
  //       text: "",
  //       align: "left",
  //     },

  //     xaxis: {
  //       categories: ["Jan", "Feb", "Mar"],
  //     },
  //   },
  //   series: [
  //     {
  //       name: "Total sales",
  //       data: [10, 10, 35, 10],
  //     },
  //   ],
  // };

  // const chart5 = {
  //   options: {
  //     colors: ["#3BB77E"],
  //     chart: {
  //       id: "admin-chart-8",
  //       sparkline: {
  //         enabled: true,
  //       },
  //       zoom: {
  //         enabled: false,
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       curve: "smooth",
  //     },
  //     title: {
  //       text: "",
  //       align: "left",
  //     },

  //     xaxis: {
  //       categories: ["Jan", "Feb", "Mar"],
  //     },
  //   },
  //   series: [
  //     {
  //       name: "Total Profit",
  //       data: [10, 10, 35, 10],
  //     },
  //   ],
  // };

  // const chart6 = {
  //   options: {
  //     colors: ["#3BB77E"],
  //     stroke: {
  //       width: 2,
  //     },
  //     chart: {
  //       animations: {
  //         enabled: true,
  //         easing: "linear",
  //         dynamicAnimation: {
  //           speed: 1e3,
  //         },
  //       },
  //       sparkline: {
  //         enabled: true,
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },

  //     xaxis: {
  //       type: "datetime",
  //       categories: [
  //         "2018-09-19T00:00:00.000Z",
  //         "2018-09-19T01:30:00.000Z",
  //         "2018-09-19T02:30:00.000Z",
  //         "2018-09-19T03:30:00.000Z",
  //         "2018-09-19T04:30:00.000Z",
  //         "2018-09-19T05:30:00.000Z",
  //         "2018-09-19T06:30:00.000Z",
  //       ],
  //     },
  //     fill: {
  //       type: "gradient",
  //       gradient: {
  //         opacityFrom: 0.91,
  //         opacityTo: 0.2,
  //       },
  //     },
  //   },
  //   series: [
  //     {
  //       name: "Food",
  //       data: [31, 40, 28, 51, 42, 109, 100],
  //     },
  //   ],
  // };

  // const chart7 = {
  //   options: {
  //     colors: ["#EA6A12"],
  //     stroke: {
  //       width: 2,
  //     },
  //     chart: {
  //       animations: {
  //         enabled: true,
  //         easing: "linear",
  //         dynamicAnimation: {
  //           speed: 1e3,
  //         },
  //       },
  //       sparkline: {
  //         enabled: true,
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },

  //     xaxis: {
  //       type: "datetime",
  //       categories: [
  //         "2018-09-19T00:00:00.000Z",
  //         "2018-09-19T01:30:00.000Z",
  //         "2018-09-19T02:30:00.000Z",
  //         "2018-09-19T03:30:00.000Z",
  //         "2018-09-19T04:30:00.000Z",
  //         "2018-09-19T05:30:00.000Z",
  //         "2018-09-19T06:30:00.000Z",
  //       ],
  //     },
  //     fill: {
  //       type: "gradient",
  //       gradient: {
  //         opacityFrom: 0.91,
  //         opacityTo: 0.2,
  //       },
  //     },
  //   },
  //   series: [
  //     {
  //       name: "Food",
  //       data: [31, 40, 28, 51, 42, 109, 100],
  //     },
  //   ],
  // };

  // const generateDayWiseTimeSeries = (baseval, count, yrange) => {
  //   let i = 0;
  //   let series = [];
  //   while (i < count) {
  //     let x = baseval;
  //     let y =
  //       Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

  //     series.push([x, y]);
  //     baseval += 86400000;
  //     i++;
  //   }
  //   return series;
  // };

  // const chart8 = {
  //   options: {
  //     chart: {
  //       toolbar: {
  //         show: false,
  //       },
  //       type: "area",
  //       height: 300,
  //       stacked: true,
  //       zoom: {
  //         enabled: false,
  //       },
  //       events: {
  //         selection: function (chart, e) {
  //         },
  //       },
  //     },
  //     colors: ["#959895", "#3BB77E", "#EA6A12"],
  //     stroke: {
  //       curve: "smooth",
  //       width: 2,
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     legend: {
  //       show: false,
  //     },
  //     fill: {
  //       type: "gradient",
  //       gradient: {
  //         opacityFrom: 0.91,
  //         opacityTo: 0.2,
  //       },
  //     },
  //     xaxis: {
  //       type: "datetime",
  //       labels: {
  //         show: false,
  //       },
  //     },
  //     yaxis: {
  //       labels: {
  //         minWidth: 20,
  //         maxWidth: 20,
  //         formatter: function (val) {
  //           return val + "%";
  //         },
  //       },
  //     },
  //   },
  //   series: [
  //     {
  //       name: "Food",
  //       data: generateDayWiseTimeSeries(
  //         new Date("11 Feb 2021 GMT").getTime(),
  //         20,
  //         {
  //           min: 10,
  //           max: 20,
  //         }
  //       ),
  //     },
  //     {
  //       name: "Cold Drinks",
  //       data: generateDayWiseTimeSeries(
  //         new Date("11 Feb 2021 GMT").getTime(),
  //         20,
  //         {
  //           min: 10,
  //           max: 35,
  //         }
  //       ),
  //     },
  //     {
  //       name: "Deserts",
  //       data: generateDayWiseTimeSeries(
  //         new Date("11 Feb 2021 GMT").getTime(),
  //         20,
  //         {
  //           min: 10,
  //           max: 60,
  //         }
  //       ),
  //     },
  //   ],
  // };

  // const columns = [
  //   { path: "Customer", name: "Customer" },
  //   { path: "Address", name: "Address" },
  //   { path: "Contacts", name: "Contacts" },
  //   { path: "Email", name: "Email" },
  // ];

  // const data = [
  //   {
  //     Customer: "Darrell Steward",
  //     Address: "2715 Ash Dr. San Jose",
  //     Contacts: 1234567890,
  //     Email: "abc123@gmail.com",
  //     profileImg: avt06,
  //   },
  //   {
  //     Customer: "Jane Cooper",
  //     Address: "6391 Elgin St. Celina",
  //     Contacts: 1234567890,
  //     Email: "abc123@gmail.com",
  //     profileImg: avt07,
  //   },
  //   {
  //     Customer: "Esther Howard",
  //     Address: "2464 Royal Ln. Mesa",
  //     Contacts: 1234567890,
  //     Email: "abc123@gmail.com",
  //     profileImg: avt08,
  //   },
  //   {
  //     Customer: "Jacob Jones",
  //     Address: "	6391 Elgin St. Celina",
  //     Contacts: 1234567890,
  //     Email: "abc123@gmail.com",
  //     profileImg: avt09,
  //   },
  //   {
  //     Customer: "Jane Cooper",
  //     Address: "	6391 Elgin St. Celina",
  //     Contacts: 1234567890,
  //     Email: "abc123@gmail.com",
  //     profileImg: avt10,
  //   },
  //   {
  //     Customer: "Esther Howard",
  //     Address: "	6391 Elgin St. Celina",
  //     Contacts: 1234567890,
  //     Email: "abc123@gmail.com",
  //     profileImg: avt08,
  //   },
  // ];

  return (
    <section id="auth-login">
      <h1>Dashboard</h1>
      <div className="boxContent">
        <CardBox count={totalOrderCount} title={"Total Order"} />
        <CardBox count={prepareOrderCount} title={"Total Preparation"} />
        <CardBox count={totalDeliveryCount} title={"Total Delivery Done"} />
      </div>
      {/* <Row>
        <Col lg="7" xl="8">
          <div
            className="card"
            data-iq-gsap="onStart"
            data-iq-opacity="0"
            data-iq-position-y="-40"
            data-iq-duration=".6"
            data-iq-delay=".4"
            data-iq-trigger="scroll"
            data-iq-ease="none"
          >
            <div className="card-header">
              <h4 className="card-title">Sales Figures</h4>
              <small>2017-2018</small>
            </div>
            <div
              className="card-body"
              data-iq-gsap="onStart"
              data-iq-opacity="0"
              data-iq-position-y="-40"
              data-iq-duration=".6"
              data-iq-delay=".6"
              data-iq-trigger="scroll"
              data-iq-ease="none"
            >
              <Chart
                id="admin-chart-1"
                options={chart1.options}
                series={chart1.series}
                type="line"
                height="350"
              />
            </div>
          </div>
          <Row>
            <Col lg="12" xl="8">
              <div
                className="card"
                data-iq-gsap="onStart"
                data-iq-opacity="0"
                data-iq-position-y="-40"
                data-iq-duration=".6"
                data-iq-delay=".5"
                data-iq-trigger="scroll"
                data-iq-ease="none"
              >
                <div className="card-body">
                  <Tab.Container defaultActiveKey="first">
                    <Nav
                      as="ul"
                      variant="tabs"
                      className="mb-4 nav-justified product-tab"
                    >
                      <Nav.Item as="li">
                        <Nav.Link eventKey="first" variant="text-start">
                          Products
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link eventKey="second">Customer</Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link eventKey="third" variant="text-end">
                          Members
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first" className="show">
                        <h3>Products Sale</h3>
                        <p className="mb-0">500 products</p>
                        <Chart
                          id="admin-chart-product"
                          options={chart3_product.options}
                          series={chart3_product.series}
                          type="bar"
                          height="160"
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second" className="show">
                        <h3>Products Sale</h3>
                        <p className="mb-0">500 products</p>
                        <Chart
                          id="admin-chart-customer"
                          options={chart3_customer.options}
                          series={chart3_customer.series}
                          type="bar"
                          height="160"
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third" className="show">
                        <h3>Products Sale</h3>
                        <p className="mb-0">500 products</p>
                        <Chart
                          id="admin-chart-member"
                          options={chart3_member.options}
                          series={chart3_member.series}
                          type="bar"
                          height="160"
                        />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </Col>
            <Col lg="12" xl="4">
              <div
                className="card"
                data-iq-gsap="onStart"
                data-iq-opacity="0"
                data-iq-position-y="-40"
                data-iq-duration=".6"
                data-iq-delay=".6"
                data-iq-trigger="scroll"
                data-iq-ease="none"
              >
                <div className="card-body d-flex justify-content-between">
                  <div>
                    <div
                      className="avatar-75 mb-2 rounded bg-soft-primary text-center"
                      style={{ lineHeight: "75px" }}
                    >
                      <svg
                        width="45"
                        height="45"
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask id="path-1-inside-1" fill="white">
                          <path d="M22.2652 5.05273C19.1066 5.05273 16.0066 5.91232 13.2925 7.54076C10.5783 9.16919 8.35071 11.5061 6.8448 14.3047C5.33889 17.1033 4.61054 20.2598 4.73664 23.441C4.86274 26.6222 5.83862 29.7101 7.56124 32.3787C9.28387 35.0472 11.6893 37.1975 14.5237 38.6025C17.3581 40.0075 20.5162 40.615 23.6647 40.361C26.8133 40.107 29.8353 39.0008 32.4119 37.1593C34.9885 35.3178 37.024 32.8093 38.3036 29.8985L33.7665 27.872C32.8489 29.9594 31.3892 31.7583 29.5415 33.0789C27.6938 34.3994 25.5266 35.1927 23.2688 35.3748C21.011 35.557 18.7463 35.1213 16.7137 34.1138C14.6811 33.1062 12.9561 31.5643 11.7208 29.6506C10.4855 27.7369 9.78569 25.5226 9.69526 23.2413C9.60483 20.96 10.1271 18.6964 11.207 16.6895C12.287 14.6826 13.8844 13.0068 15.8307 11.839C17.7771 10.6713 20.0001 10.0549 22.2652 10.0549V5.05273Z" />
                        </mask>
                        <path
                          d="M22.2652 5.05273C19.1066 5.05273 16.0066 5.91232 13.2925 7.54076C10.5783 9.16919 8.35071 11.5061 6.8448 14.3047C5.33889 17.1033 4.61054 20.2598 4.73664 23.441C4.86274 26.6222 5.83862 29.7101 7.56124 32.3787C9.28387 35.0472 11.6893 37.1975 14.5237 38.6025C17.3581 40.0075 20.5162 40.615 23.6647 40.361C26.8133 40.107 29.8353 39.0008 32.4119 37.1593C34.9885 35.3178 37.024 32.8093 38.3036 29.8985L33.7665 27.872C32.8489 29.9594 31.3892 31.7583 29.5415 33.0789C27.6938 34.3994 25.5266 35.1927 23.2688 35.3748C21.011 35.557 18.7463 35.1213 16.7137 34.1138C14.6811 33.1062 12.9561 31.5643 11.7208 29.6506C10.4855 27.7369 9.78569 25.5226 9.69526 23.2413C9.60483 20.96 10.1271 18.6964 11.207 16.6895C12.287 14.6826 13.8844 13.0068 15.8307 11.839C17.7771 10.6713 20.0001 10.0549 22.2652 10.0549V5.05273Z"
                          stroke="#EA6A12"
                          strokeWidth="2"
                          mask="url(#path-1-inside-1)"
                        />
                        <mask id="path-2-inside-2" fill="white">
                          <path d="M39.0428 27.8871C39.8135 25.4604 40.0303 22.8867 39.6775 20.352C39.3246 17.8174 38.411 15.3851 37.0026 13.2309C35.5943 11.0767 33.7263 9.25434 31.5337 7.89561C29.3411 6.53687 26.8787 5.67564 24.3243 5.37415L23.8213 10.0957C25.6715 10.3141 27.4551 10.9379 29.0432 11.922C30.6313 12.9061 31.9843 14.2261 33.0044 15.7864C34.0245 17.3467 34.6862 19.1084 34.9418 20.9443C35.1973 22.7802 35.0403 24.6443 34.4821 26.402L39.0428 27.8871Z" />
                        </mask>
                        <path
                          d="M39.0428 27.8871C39.8135 25.4604 40.0303 22.8867 39.6775 20.352C39.3246 17.8174 38.411 15.3851 37.0026 13.2309C35.5943 11.0767 33.7263 9.25434 31.5337 7.89561C29.3411 6.53687 26.8787 5.67564 24.3243 5.37415L23.8213 10.0957C25.6715 10.3141 27.4551 10.9379 29.0432 11.922C30.6313 12.9061 31.9843 14.2261 33.0044 15.7864C34.0245 17.3467 34.6862 19.1084 34.9418 20.9443C35.1973 22.7802 35.0403 24.6443 34.4821 26.402L39.0428 27.8871Z"
                          stroke="#EA6A12"
                          strokeWidth="2"
                          mask="url(#path-2-inside-2)"
                        />
                        <mask id="path-3-inside-3" fill="white">
                          <path d="M22.445 33.1201C24.3163 33.1201 26.1539 32.6185 27.7694 31.6667C29.3849 30.7149 30.7202 29.3471 31.6385 27.7037C32.5567 26.0602 33.0248 24.2001 32.9947 22.3142C32.9647 20.4283 32.4376 18.5844 31.4675 16.9714C30.4974 15.3585 29.1192 14.0347 27.4742 13.1357C25.8292 12.2366 23.9766 11.7947 22.1063 11.8553C20.236 11.9159 18.4153 12.4767 16.831 13.4803C15.2466 14.4839 13.9555 15.8942 13.0901 17.5665L16.4473 19.3316C17.0021 18.2594 17.8299 17.3552 18.8457 16.7117C19.8614 16.0683 21.0287 15.7087 22.2278 15.6699C23.427 15.6311 24.6147 15.9144 25.6694 16.4908C26.7241 17.0672 27.6077 17.916 28.2297 18.9501C28.8516 19.9841 29.1896 21.1664 29.2088 22.3755C29.2281 23.5846 28.928 24.7772 28.3393 25.8309C27.7506 26.8845 26.8944 27.7615 25.8587 28.3717C24.8229 28.9819 23.6448 29.3035 22.445 29.3035V33.1201Z" />
                        </mask>
                        <path
                          d="M22.445 33.1201C24.3163 33.1201 26.1539 32.6185 27.7694 31.6667C29.3849 30.7149 30.7202 29.3471 31.6385 27.7037C32.5567 26.0602 33.0248 24.2001 32.9947 22.3142C32.9647 20.4283 32.4376 18.5844 31.4675 16.9714C30.4974 15.3585 29.1192 14.0347 27.4742 13.1357C25.8292 12.2366 23.9766 11.7947 22.1063 11.8553C20.236 11.9159 18.4153 12.4767 16.831 13.4803C15.2466 14.4839 13.9555 15.8942 13.0901 17.5665L16.4473 19.3316C17.0021 18.2594 17.8299 17.3552 18.8457 16.7117C19.8614 16.0683 21.0287 15.7087 22.2278 15.6699C23.427 15.6311 24.6147 15.9144 25.6694 16.4908C26.7241 17.0672 27.6077 17.916 28.2297 18.9501C28.8516 19.9841 29.1896 21.1664 29.2088 22.3755C29.2281 23.5846 28.928 24.7772 28.3393 25.8309C27.7506 26.8845 26.8944 27.7615 25.8587 28.3717C24.8229 28.9819 23.6448 29.3035 22.445 29.3035V33.1201Z"
                          stroke="#EA6A12"
                          strokeWidth="2"
                          mask="url(#path-3-inside-3)"
                        />
                        <mask id="path-4-inside-4" fill="white">
                          <path d="M12.5622 18.6902C11.9893 20.1253 11.7489 21.6741 11.8588 23.2226C11.9687 24.7711 12.4261 26.2798 13.1973 27.6378C13.9686 28.9957 15.0339 30.1683 16.3151 31.0692C17.5962 31.9701 19.0605 32.5763 20.6002 32.8434L21.2072 29.1137C20.2295 28.9441 19.2997 28.5591 18.4862 27.9871C17.6727 27.415 16.9961 26.6704 16.5064 25.8081C16.0167 24.9459 15.7263 23.9878 15.6565 23.0045C15.5867 22.0213 15.7393 21.0378 16.1031 20.1265L12.5622 18.6902Z" />
                        </mask>
                        <path
                          d="M12.5622 18.6902C11.9893 20.1253 11.7489 21.6741 11.8588 23.2226C11.9687 24.7711 12.4261 26.2798 13.1973 27.6378C13.9686 28.9957 15.0339 30.1683 16.3151 31.0692C17.5962 31.9701 19.0605 32.5763 20.6002 32.8434L21.2072 29.1137C20.2295 28.9441 19.2997 28.5591 18.4862 27.9871C17.6727 27.415 16.9961 26.6704 16.5064 25.8081C16.0167 24.9459 15.7263 23.9878 15.6565 23.0045C15.5867 22.0213 15.7393 21.0378 16.1031 20.1265L12.5622 18.6902Z"
                          stroke="#EA6A12"
                          strokeWidth="2"
                          mask="url(#path-4-inside-4)"
                        />
                      </svg>
                    </div>
                    <h6 className="heading-title text-center">$18 378</h6>
                  </div>
                  <div className="text-end">
                    <div>
                      <h6 className="heading-title mb-5">Total Sales</h6>
                    </div>
                    <div className="d-flex">
                      <Chart
                        id="admin-chart-4"
                        options={chart4.options}
                        series={chart4.series}
                        type="line"
                        height="50"
                        width="90"
                      />
                      <h6 className="heading-title text-primary">
                        +14%
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.77083 3.54199L9.77083 16.042"
                            stroke="#EA6A12"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.75213 8.58301L9.77213 3.54134L14.793 8.58301"
                            stroke="#EA6A12"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="card"
                data-iq-gsap="onStart"
                data-iq-opacity="0"
                data-iq-position-y="-40"
                data-iq-duration=".6"
                data-iq-delay=".7"
                data-iq-trigger="scroll"
                data-iq-ease="none"
              >
                <Card.Body className="d-flex justify-content-between">
                  <div>
                    <div
                      className="avatar-75 mb-2 rounded bg-soft-primary text-center"
                      style={{ lineHeight: "75px" }}
                    >
                      <svg
                        width="37"
                        height="37"
                        viewBox="0 0 37 37"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M28.0316 21.7946C29.2493 21.7946 30.2714 22.7768 30.0852 23.9521C28.9929 30.8664 22.9364 36.0002 15.6319 36.0002C7.55035 36.0002 1 29.5983 1 21.7017C1 15.1958 6.05714 9.13557 11.7507 7.76533C12.9741 7.47011 14.228 8.3112 14.228 9.54219C14.228 17.8825 14.5148 20.04 16.1353 21.2134C17.7558 22.3869 19.6613 21.7946 28.0316 21.7946Z"
                          stroke="#EA6A12"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M35.9985 14.8492C36.0954 9.49073 29.3608 0.853355 21.1538 1.00189C20.5155 1.01303 20.0045 1.53291 19.976 2.1549C19.7689 6.56085 20.0482 12.2702 20.204 14.8585C20.2515 15.6643 20.8993 16.2974 21.7219 16.3438C24.4442 16.4961 30.4987 16.704 34.9423 16.0467C35.5464 15.9576 35.989 15.4452 35.9985 14.8492Z"
                          stroke="#EA6A12"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h6 className="heading-title text-center">$18 378</h6>
                  </div>
                  <div className="text-end">
                    <div>
                      <h6 className="heading-title mb-5">Total Profit</h6>
                    </div>
                    <div className="d-flex">
                      <Chart
                        id="admin-chart-8"
                        options={chart5.options}
                        series={chart5.series}
                        type="line"
                        height="50"
                        width="90"
                      />
                      <h6 className="heading-title text-primary">
                        +0.4%
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.77083 3.54199L9.77083 16.042"
                            stroke="#EA6A12"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.75213 8.58301L9.77213 3.54134L14.793 8.58301"
                            stroke="#EA6A12"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </h6>
                    </div>
                  </div>
                </Card.Body>
              </div>
            </Col>
          </Row>
          <Card>
            <Card.Header>
              <h4 className="card-title">Specialities sales</h4>
            </Card.Header>
            <Card.Body>
              <Swiper
                slidesPerView={3}
                className="d-slider5"
                breakpoints={{
                  320: { slidesPerView: 1 },
                  550: { slidesPerView: 1 },
                  991: { slidesPerView: 3 },
                  1400: { slidesPerView: 3 },
                }}
              >
                <SwiperSlide
                  className="text-center"
                  data-iq-gsap="onStart"
                  data-iq-opacity="0"
                  data-iq-position-y="-40"
                  data-iq-duration=".6"
                  data-iq-delay=".5"
                  data-iq-trigger="scroll"
                  data-iq-ease="none"
                >
                  <div className="card-profile-progress mb-3">
                    <Circularprogressbar
                      Linecap="rounded"
                      trailstroke="#ddd"
                      strokewidth="8px"
                      value={65}
                      stroke="#EA6A12"
                      style={{ width: "150px", height: "150px" }}
                    >
                      <img
                        src={lay13}
                        className="img-fluid  rounded-circle card-img rotete-infinite"
                        alt="image1"
                      />
                    </Circularprogressbar>
                  </div>
                  <div className="text-center">
                    <p className="mb-2">65%</p>
                    <h6 className="heading-title fw-bolder">
                      Mix Veggie Pizza
                    </h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="text-center"
                  data-iq-gsap="onStart"
                  data-iq-opacity="0"
                  data-iq-position-y="-40"
                  data-iq-duration=".6"
                  data-iq-delay=".5"
                  data-iq-trigger="scroll"
                  data-iq-ease="none"
                >
                  <div className="card-profile-progress mb-3">
                    <Circularprogressbar
                      Linecap="rounded"
                      trailstroke="#ddd"
                      strokewidth="8px"
                      value={65}
                      stroke="#EA6A12"
                      style={{ width: "150px", height: "150px" }}
                    >
                      <img
                        src={lay11}
                        className="img-fluid  rounded-circle card-img rotete-infinite"
                        alt="image1"
                      />
                    </Circularprogressbar>
                  </div>
                  <div className="text-center">
                    <p className="mb-2">50%</p>
                    <h6 className="heading-title fw-bolder">Sausage Pizza</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="text-center"
                  data-iq-gsap="onStart"
                  data-iq-opacity="0"
                  data-iq-position-y="-40"
                  data-iq-duration=".6"
                  data-iq-delay=".6"
                  data-iq-trigger="scroll"
                  data-iq-ease="none"
                >
                  <div className="card-profile-progress mb-3">
                    <Circularprogressbar
                      Linecap="rounded"
                      trailstroke="#ddd"
                      strokewidth="8px"
                      value={65}
                      stroke="#EA6A12"
                      style={{ width: "150px", height: "150px" }}
                    >
                      <img
                        src={lay12}
                        className="img-fluid  rounded-circle card-img rotete-infinite"
                        alt="image1"
                      />
                    </Circularprogressbar>
                  </div>
                  <div className="text-center">
                    <p className="mb-2">55%</p>
                    <h6 className="heading-title fw-bolder">Shrikhand</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="text-center"
                  data-iq-gsap="onStart"
                  data-iq-opacity="0"
                  data-iq-position-y="-40"
                  data-iq-duration=".6"
                  data-iq-delay=".7"
                  data-iq-trigger="scroll"
                  data-iq-ease="none"
                >
                  <div className="card-profile-progress mb-3">
                    <Circularprogressbar
                      Linecap="rounded"
                      trailstroke="#ddd"
                      strokewidth="8px"
                      value={65}
                      stroke="#EA6A12"
                      style={{ width: "150px", height: "150px" }}
                    >
                      <img
                        src={lay10}
                        className="img-fluid  rounded-circle card-img rotete-infinite"
                        alt="image1"
                      />
                    </Circularprogressbar>
                  </div>
                  <div className="text-center">
                    <p className="mb-2">55%</p>
                    <h6 className="heading-title fw-bolder">Pasta</h6>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="text-center"
                  data-iq-gsap="onStart"
                  data-iq-opacity="0"
                  data-iq-position-y="-40"
                  data-iq-duration=".6"
                  data-iq-delay=".8"
                  data-iq-trigger="scroll"
                  data-iq-ease="none"
                >
                  <div className="card-profile-progress mb-3">
                    <Circularprogressbar
                      Linecap="rounded"
                      trailstroke="#ddd"
                      strokewidth="8px"
                      value={65}
                      stroke="#EA6A12"
                      style={{ width: "150px", height: "150px" }}
                    >
                      <img
                        src={lay13}
                        className="img-fluid  rounded-circle card-img rotete-infinite"
                        alt="image1"
                      />
                    </Circularprogressbar>
                  </div>
                  <div className="text-center">
                    <p className="mb-2">65%</p>
                    <h6 className="heading-title fw-bolder">Pasta Pizza</h6>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Card.Body>
          </Card>
          <div
            className="card"
            data-iq-gsap="onStart"
            data-iq-opacity="0"
            data-iq-position-y="-40"
            data-iq-duration=".6"
            data-iq-delay="1"
            data-iq-trigger="scroll"
            data-iq-ease="none"
          >
            <Card.Body>
              <Row>
                <Col xl="4" md="6">
                  <Chart
                    id="admin-chart-2"
                    options={chart6.options}
                    series={chart6.series}
                    type="area"
                    height="60"
                  />
                </Col>
                <Col xl="3" md="6">
                  <p className="mb-1 mt-3 mt-lg-0">Food</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="heading-title fw-bolder">Paneer Chilly</h6>
                    <p className="mb-0 text-success">+0.26%</p>
                  </div>
                </Col>
                <Col xl="4" md="12" className="mt-3 mt-lg-0">
                  <div className="flex-grow-1">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h6 className="heading-title fw-bolder">Available</h6>
                      <h6 className="heading-title">85%</h6>
                    </div>
                    <Progress
                      softcolors="primary"
                      color="primary"
                      className="shadow-none w-100"
                      value={85}
                      minvalue={0}
                      maxvalue={100}
                      style={{ height: "6px" }}
                    />
                  </div>
                </Col>
                <Col lg="1" className="d-none d-block align-self-center">
                  <Dropdown className="float-end">
                    <svg
                      width="5"
                      role="img"
                      height="20"
                      viewBox="0 0 5 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      id="dropdownMenuLink1"
                      data-bs-toggle="dropdown"
                    >
                      <circle cx="2.5" cy="3" r="2.5" fill="#07143B" />
                      <circle cx="2.5" cy="10" r="2.5" fill="#07143B" />
                      <circle cx="2.5" cy="17" r="2.5" fill="#07143B" />
                    </svg>
                    <Dropdown.Menu aria-labelledby="dropdownMenuLink1">
                      <li>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#">
                          Something else here
                        </Dropdown.Item>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Card.Body>
          </div>
          <div
            className="card"
            data-iq-gsap="onStart"
            data-iq-opacity="0"
            data-iq-position-y="-40"
            data-iq-duration=".6"
            data-iq-delay="1"
            data-iq-trigger="scroll"
            data-iq-ease="none"
          >
            <Card.Body>
              <Row>
                <Col xl="4" md="6">
                  <Chart
                    id="admin-chart-3"
                    options={chart7.options}
                    series={chart7.series}
                    type="area"
                    height="50"
                  />
                </Col>
                <Col xl="3" md="6">
                  <p className="mb-1 mt-3 mt-lg-0">Food</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="heading-title fw-bolder">Paneer Chilly</h6>
                    <p className="mb-0 text-success">+0.26%</p>
                  </div>
                </Col>
                <Col xl="4" md="12" className="mt-3 mt-lg-0">
                  <div className="flex-grow-1">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <h6 className="heading-title fw-bolder">Available</h6>
                      <h6 className="heading-title">85%</h6>
                    </div>
                    <Progress
                      softcolors="primary"
                      color="primary"
                      className="shadow-none w-100"
                      value={85}
                      minvalue={0}
                      maxvalue={100}
                      style={{ height: "6px" }}
                    />
                  </div>
                </Col>
                <Col lg="1" className="d-none d-block align-self-center">
                  <Dropdown className="float-end">
                    <svg
                      width="5"
                      role="img"
                      height="20"
                      viewBox="0 0 5 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      id="dropdownMenuLink2"
                      data-bs-toggle="dropdown"
                    >
                      <circle cx="2.5" cy="3" r="2.5" fill="#07143B" />
                      <circle cx="2.5" cy="10" r="2.5" fill="#07143B" />
                      <circle cx="2.5" cy="17" r="2.5" fill="#07143B" />
                    </svg>
                    <Dropdown.Menu
                      className=""
                      aria-labelledby="dropdownMenuLink2"
                    >
                      <li>
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                      </li>
                      <li>
                        <Dropdown.Item href="#">
                          Something else here
                        </Dropdown.Item>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Card.Body>
          </div>
          <div
            className="card overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="600"
            data-iq-gsap="onStart"
            data-iq-opacity="0"
            data-iq-position-y="-40"
            data-iq-duration=".6"
            data-iq-delay="1"
            data-iq-trigger="scroll"
            data-iq-ease="none"
          >
            <div className="card-header border-0 pb-0">
              <div className="header-title">
                <h4 className="card-title">User List</h4>
              </div>
            </div>
            <Card.Body className="py-0">
              <div className="table-responsive">
                <Table
                  id="id"
                  columns={columns}
                  data={data}
                  tableclass="table mb-0 iq-table user-list-table"
                  tdclass="align-items-center"
                  imgclass="bg-soft-primary rounded img-fluid avatar-40 me-3"
                />
              </div>
            </Card.Body>
          </div>
        </Col>
        <Col lg="5" xl="4">
          <div
            className="card card-primary"
            data-iq-gsap="onStart"
            data-iq-opacity="0"
            data-iq-position-y="-40"
            data-iq-duration=".6"
            data-iq-delay=".8"
            data-iq-trigger="scroll"
            data-iq-ease="none"
          >
            <Card.Body className="d-flex align-items-center justify-content-between">
              <Col>
                <p className="text-white mt-3 mb-4">Total earning</p>
                <h2 className="text-white mb-4">$ 4,585,963 </h2>
                <Link to="#" className="btn bg-white rounded-pill">
                  View More
                </Link>
              </Col>
              <Card className="col-2 mb-0 bg-white card-body">
                <div>
                  <h6 className="heading-title mb-3 text-center">
                    Total Profit
                  </h6>
                </div>
                <div className=" text-center">
                  <Chart
                    id="admin-chart-8"
                    options={chart2.options}
                    series={chart2.series}
                    type="line"
                    width="130"
                    height="70"
                  />
                </div>
                <h6 className="heading-title text-primary text-center mt-3">
                  +0.4%
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.77083 3.54199L9.77083 16.042"
                      stroke="#EA6A12"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.75213 8.58301L9.77213 3.54134L14.793 8.58301"
                      stroke="#EA6A12"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </h6>
              </Card>
            </Card.Body>
          </div>
          <div
            className="card"
            data-iq-gsap="onStart"
            data-iq-opacity="0"
            data-iq-position-y="-40"
            data-iq-duration=".6"
            data-iq-delay="1"
            data-iq-trigger="scroll"
            data-iq-ease="none"
          >
            <div className="card-header">
              <h4 className="card-title">Last Transaction</h4>
            </div>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div className="d-flex align-items-center">
                  <img
                    src={admin01}
                    className="img-fluid rounded-pill avatar-50"
                    alt="1"
                  />
                  <div className="ms-3">
                    <h6 className="heading-title fw-bolder mb-2">
                      Sausage Pizza
                    </h6>
                    <p className="mb-0">20.01.2021</p>
                  </div>
                </div>
                <h6 className="heading-title">-$115,00</h6>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div className="d-flex align-items-center">
                  <img
                    src={admin02}
                    className="img-fluid rounded-pill avatar-50"
                    alt="2"
                  />
                  <div className="ms-3">
                    <h6 className="heading-title fw-bolder mb-2"> Noodles</h6>
                    <p className="mb-0">20.01.2021</p>
                  </div>
                </div>
                <h6 className="heading-title">-$115,00</h6>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div className="d-flex align-items-center">
                  <img
                    src={admin03}
                    className="img-fluid rounded-pill  avatar-50"
                    alt="3"
                  />
                  <div className="ms-3">
                    <h6 className="heading-title fw-bolder mb-2">Pasta</h6>
                    <p className="mb-0">20.01.2021</p>
                  </div>
                </div>
                <h6 className="heading-title">-$115,00</h6>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div className="d-flex align-items-center">
                  <img
                    src={admin04}
                    className="img-fluid rounded-pill  avatar-50"
                    alt="4"
                  />
                  <div className="ms-3">
                    <h6 className="heading-title fw-bolder mb-2">Burger</h6>
                    <p className="mb-0">20.01.2021</p>
                  </div>
                </div>
                <h6 className="heading-title">-$115,00</h6>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-5">
                <div className="d-flex align-items-center">
                  <img
                    src={admin05}
                    className="img-fluid rounded-pill  avatar-50"
                    alt="5"
                  />
                  <div className="ms-3">
                    <h6 className="heading-title fw-bolder mb-2">
                      Sausage Pizza
                    </h6>
                    <p className="mb-0">20.01.2021</p>
                  </div>
                </div>
                <h6 className="heading-title">-$115,00</h6>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src={admin06}
                    className="img-fluid rounded-pill avatar-50"
                    alt="6"
                  />
                  <div className="ms-3">
                    <h6 className="heading-title fw-bolder mb-2">
                      Cheese Pizza
                    </h6>
                    <p className="mb-0">20.01.2021</p>
                  </div>
                </div>
                <h6 className="heading-title">-$115,00</h6>
              </div>
            </Card.Body>
          </div>
          <div
            className="card"
            data-iq-gsap="onStart"
            data-iq-opacity="0"
            data-iq-position-y="-40"
            data-iq-duration=".6"
            data-iq-delay="1"
            data-iq-trigger="scroll"
            data-iq-ease="none"
          >
            <Card.Header className="align-items-center">
              <div>
                <h4 className="card-title mb-2">Earning Categories</h4>
                <p className="mb-0">Heist Earnings Categories </p>
              </div>
              <Dropdown className="float-end">
                <Dropdown.Toggle as={Button} variant="" href="#">
                  This Month
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-end rounded">
                  <li>
                    <Dropdown.Item href="#">This Week</Dropdown.Item>
                  </li>
                  <li>
                    <Dropdown.Item href="#">This Year</Dropdown.Item>
                  </li>
                </Dropdown.Menu>
              </Dropdown>
            </Card.Header>
            <Card.Body>
              <Chart
                id="admin-chart-6"
                options={chart8.options}
                series={chart8.series}
                type="area"
                height="300"
              />
              <Row className="row-cols-md-12 row-cols-lg-3 g-3 g-lg-3 ">
                <Col>
                  <div
                    className="card bg-soft-primary menu-card mb-lg-0"
                    data-iq-gsap="onStart"
                    data-iq-opacity="0"
                    data-iq-position-y="-40"
                    data-iq-duration=".6"
                    data-iq-delay="1"
                    data-iq-trigger="scroll"
                    data-iq-ease="none"
                  >
                    <div className="card-body">
                      <img
                        src={lay6}
                        className="avatar-45 img-fluid mb-3"
                        alt="img"
                      />
                      <h6 className="heading-title">Food</h6>
                      <p className="mb-0">$450</p>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div
                    className="card bg-soft-primary mb-0 menu-card-2 mb-lg-0"
                    data-iq-gsap="onStart"
                    data-iq-opacity="0"
                    data-iq-position-y="-40"
                    data-iq-duration=".6"
                    data-iq-delay="1"
                    data-iq-trigger="scroll"
                    data-iq-ease="none"
                  >
                    <Card.Body>
                      <img
                        src={lay7}
                        className="avatar-45 img-fluid mb-3"
                        alt="img"
                      />
                      <h6 className="heading-title"> Drink</h6>
                      <p className="mb-0">$100</p>
                    </Card.Body>
                  </div>
                </Col>
                <Col>
                  <div
                    className="card col bg-soft-primary mb-0 menu-card-3 mb-lg-0"
                    data-iq-gsap="onStart"
                    data-iq-opacity="0"
                    data-iq-position-y="-40"
                    data-iq-duration=".6"
                    data-iq-delay="1"
                    data-iq-trigger="scroll"
                    data-iq-ease="none"
                  >
                    <Card.Body>
                      <img
                        src={lay39}
                        className="avatar-45 img-fluid mb-3"
                        alt="img"
                      />
                      <h6 className="heading-title">Desert</h6>
                      <p className="mb-0">$100</p>
                    </Card.Body>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </div>
          <div
            data-iq-gsap="onStart"
            data-iq-opacity="0"
            data-iq-position-y="-40"
            data-iq-duration=".6"
            data-iq-delay=".9"
            data-iq-trigger="scroll"
            data-iq-ease="none"
          >
            <div className="card-header">
              <h4 className="card-title">Top Menu Items</h4>
            </div>
            <Card.Body>
              <div className="d-flex align-items-center mb-5">
                <div className="me-3">
                  <img
                    src={admin07}
                    className="img-fluid rounded-pill  avatar-50"
                    alt=""
                  />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h6 className="heading-title fw-bolder">Veg Cripsy</h6>
                    <h6 className="heading-title">67%</h6>
                  </div>
                  <Progress
                    softcolors="primary"
                    color="primary"
                    className="shadow-none w-100"
                    value={67}
                    minvalue={0}
                    maxvalue={100}
                    style={{ height: "6px" }}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div className="me-3">
                  <img
                    src={admin08}
                    className="img-fluid rounded-pill  avatar-50"
                    alt=""
                  />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h6 className="heading-title fw-bolder">Paneer Chilly</h6>
                    <h6 className="heading-title">40%</h6>
                  </div>
                  <Progress
                    softcolors="primary"
                    color="primary"
                    className="shadow-none w-100"
                    value={40}
                    minvalue={0}
                    maxvalue={100}
                    style={{ height: "6px" }}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div className="me-3">
                  <img
                    src={admin09}
                    className="img-fluid rounded-pill  avatar-50"
                    alt=""
                  />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h6 className="heading-title fw-bolder">Creamy Nachos</h6>
                    <h6 className="heading-title">90%</h6>
                  </div>
                  <Progress
                    softcolors="primary"
                    color="primary"
                    className="shadow-none w-100"
                    value={90}
                    minvalue={0}
                    maxvalue={100}
                    style={{ height: "6px" }}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div className="me-3">
                  <img
                    src={admin10}
                    className="img-fluid rounded-pill  avatar-50"
                    alt=""
                  />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h6 className="heading-title fw-bolder">Veg kholapuri</h6>
                    <h6 className="heading-title">50%</h6>
                  </div>
                  <Progress
                    softcolors="primary"
                    color="primary"
                    className="shadow-none w-100"
                    value={50}
                    minvalue={0}
                    maxvalue={100}
                    style={{ height: "6px" }}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center mb-5">
                <div className="me-3">
                  <img
                    src={admin11}
                    className="img-fluid rounded-pill  avatar-50"
                    alt=""
                  />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h6 className="heading-title fw-bolder">
                      Hot and Sour soup
                    </h6>
                    <h6 className="heading-title">37%</h6>
                  </div>
                  <Progress
                    softcolors="primary"
                    color="primary"
                    className="shadow-none w-100"
                    value={37}
                    minvalue={0}
                    maxvalue={100}
                    style={{ height: "6px" }}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <img
                    src={admin12}
                    className="img-fluid rounded-pill  avatar-50"
                    alt=""
                  />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h6 className="heading-title fw-bolder">
                      Hot and Sour soup
                    </h6>
                    <h6 className="heading-title">37%</h6>
                  </div>
                  <Progress
                    softcolors="primary"
                    color="primary"
                    className="shadow-none w-100"
                    value={37}
                    minvalue={0}
                    maxvalue={100}
                    style={{ height: "6px" }}
                  />
                </div>
              </div>
            </Card.Body>
          </div>
        </Col>
      </Row> */}
    </section>
  );
};

export default Admin;
