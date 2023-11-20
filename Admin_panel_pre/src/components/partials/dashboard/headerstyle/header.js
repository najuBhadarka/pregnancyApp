import React, { useEffect } from "react";
import { Container, Nav, Dropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CustomToggle from "../../../dropdowns";
import Logo from "../../components/logo";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions as auth } from "../../../../redux/auth/authAction";
import { actions as user } from "../../../../redux/user/userAction";

//img
import defaultImage from "../../../../assets/images/avatars/default-user-img.png";

// icons
import { ReactComponent as RightIcon } from "../../../../assets/images/icons/Right-Arrow-2.svg";

import { API_URL } from "../../../../utils/api";
import Cookies from "js-cookie";

const Header = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('token');
    navigate("/auth/sign-in");
    // props.actions.logOut({
    //   callback: () => {
    //   },
    // });
  };

  const minisidebar = () => {
    document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
  };

  const token = document?.cookie
    ?.split("; ")
    ?.find((row) => row.startsWith("token="))
    ?.split("=")[1];

  useEffect(() => {
    props.actions.getUser(token);
  }, [props.actions, token]);

  const navigateToUserProfile = () => {
    navigate("/user/profile");
  };

  const userData = props?.user?.data;

  let role_type = "";

  switch (userData?.role_id) {
    case 1:
      role_type = "Admin";
      break;

    case 2:
      role_type = "Restaurant Admin";
      break;

    case 3:
      role_type = "Customer";
      break;

    case 4:
      role_type = "Delivery Partner";
      break;

    default:
      break;
  }

  return (
    <Navbar expand="lg" variant="light" className="nav iq-navbar">
      <Container fluid className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <Logo />
        </Link>
        <div
          className="sidebar-toggle"
          data-toggle="sidebar"
          data-active="true"
          onClick={minisidebar}
        >
          <i className="icon">
            <RightIcon />
          </i>
        </div>
        {/* <div className="input-group search-input">
          <span className="input-group-text" id="search-input">
            <SearchIcon />
          </span>
          <input
            type="search"
            className="form-control"
            placeholder="Search..."
          />
        </div> */}

        <Navbar.Collapse id="navbarSupportedContent">
          <Nav
            as="ul"
            className="navbar-nav ms-auto align-items-center navbar-list mb-2 mb-lg-0"
          >
            {/* <Dropdown as="li" className="nav-item">
              <Dropdown.Toggle
                as={CustomToggle}
                variant="search-toggle nav-link"
              >
                <NotificationIcon />
                <span className="bg-danger dots"></span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="sub-drop dropdown-menu-end p-0">
                <Card className="shadow-none m-0">
                  <Card.Header className="bg-primary mx-0 px-4">
                    <Card.Header.Title>
                      <h5 className="mb-0 text-white">All Notifications</h5>
                    </Card.Header.Title>
                  </Card.Header>
                  <Card.Body className="p-0">
                    <Link to="#" className="iq-sub-card">
                      <div className="d-flex align-items-center">
                        <img
                          className="avatar-40 rounded-pill"
                          src={lay01}
                          alt=""
                        />
                        <div className="ms-3 w-100">
                          <h6 className="mb-0 ">Emma Watson Bni</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">95 MB</p>
                            <small className="float-end font-size-12">
                              Just Now
                            </small>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to="#" className="iq-sub-card">
                      <div className="d-flex align-items-center">
                        <div>
                          <img
                            className="avatar-40 rounded-pill"
                            src={lay02}
                            alt=""
                          />
                        </div>
                        <div className="ms-3 w-100">
                          <h6 className="mb-0 ">New customer is join</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">Cyst Bni</p>
                            <small className="float-end font-size-12">
                              5 days ago
                            </small>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to="#" className="iq-sub-card">
                      <div className="d-flex align-items-center">
                        <img
                          className="avatar-40 rounded-pill"
                          src={lay03}
                          alt=""
                        />
                        <div className="ms-3 w-100">
                          <h6 className="mb-0 ">Two customer is left</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">Cyst Bni</p>
                            <small className="float-end font-size-12">
                              2 days ago
                            </small>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link to="#" className="iq-sub-card">
                      <div className="d-flex align-items-center">
                        <img
                          className="avatar-40 rounded-pill"
                          src={lay04}
                          alt=""
                        />
                        <div className="w-100 ms-3">
                          <h6 className="mb-0 ">New Mail from Fenny</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">Cyst Bni</p>
                            <small className="float-end font-size-12">
                              3 days ago
                            </small>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Card.Body>
                </Card>
              </Dropdown.Menu>
            </Dropdown> */}

            <Dropdown as="li" className="nav-item">
              <Dropdown.Toggle
                as={CustomToggle}
                href="#"
                variant="nav-link py-0 d-flex align-items-center"
                id="mail-drop"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={
                    userData.image
                      ? `${API_URL}/static/profile/${userData.image}`
                      : defaultImage
                  }
                  alt="User-Profile"
                  className="img-fluid avatar avatar-50 avatar-rounded"
                />
                <div className="caption ms-3  d-md-block ">
                  <h6 className="mb-0 caption-title">
                    {userData?.first_name} {userData?.last_name}
                  </h6>
                  <p className="mb-0 caption-sub-title">{role_type}</p>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu
                as="ul"
                className="dropdown-menu-end"
                aria-labelledby="mail-drop"
              >
                <li>
                  <Dropdown.Item onClick={navigateToUserProfile}>
                    Profile
                  </Dropdown.Item>
                </li>
                <li>
                  <Dropdown.Divider />
                </li>
                <li>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </li>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: { ...bindActionCreators({ ...user, ...auth }, dispatch) },
});

const mapStateToProps = (state) => ({
  user: state.user,
  auth: state.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
