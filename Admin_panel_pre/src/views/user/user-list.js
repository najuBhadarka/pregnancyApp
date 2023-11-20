import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

import { API_URL } from "../../utils/api";
import { actions as user } from "../../redux/user/userAction";
import TableWrapper from "../../components/wrapper/table-wrapper";

const UserList = (props) => {
  const [showItems, setShowItems] = useState(10);
  const [inputText, setInputText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: "", sortDirection: "" });
  const [toggleSort, setToggleSort] = useState(true);
  const [allUser, setAllUser] = useState([]);

  const navigate = useNavigate();


  console.log("🚀 ~ file: user-list.js:27 ~ useEffect ~ props:", props)
  useEffect(() => {
    const userList = props?.user?.userData;
    setAllUser(userList);
  }, [props?.user?.userData]);

  const nameSort = () => {
    setToggleSort(!toggleSort);
    setSortConfig({ sortDirection: toggleSort });
    let newMenuItems = [...props?.user?.userData];
    const sortedUsers = newMenuItems?.sort((a, b) => {
      return sortConfig.sortDirection
        ? a?.first_name?.toLowerCase()?.charCodeAt() -
            b?.first_name?.toLowerCase()?.charCodeAt() ||
            a?.last_name?.toLowerCase()?.charCodeAt() -
              b?.last_name?.toLowerCase()?.charCodeAt()
        : b?.first_name?.toLowerCase()?.charCodeAt() -
            a?.first_name?.toLowerCase()?.charCodeAt() ||
            b?.last_name?.toLowerCase()?.charCodeAt() -
              a?.last_name?.toLowerCase()?.charCodeAt();
    });

    setAllUser(sortedUsers);
  };

  const nameSorts = (key) => {
    setToggleSort(!toggleSort);
    setSortConfig({ sortDirection: toggleSort });
    let newMenuItems = [...props?.user?.userData];
    const sortedArrr = newMenuItems?.sort((a, b) => {
      return sortConfig.sortDirection
        ? a?.[key]?.toLowerCase()?.localeCompare(b?.[key]?.toLowerCase())
        : b?.[key]?.toLowerCase()?.localeCompare(a?.[key]?.toLowerCase());
    });
    setAllUser(sortedArrr);
  };

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const filteredData = allUser?.filter((user) => {
    const firstName = user?.firstName?.toLowerCase();
    const lastName = user?.lastName?.toLowerCase();
    const email = user?.email?.toLowerCase();

    if (!inputText) {
      return user;
    } else {
      return (
        firstName?.includes(inputText.toLowerCase()) ||
        lastName?.includes(inputText.toLowerCase()) ||
        email?.includes(inputText.toLowerCase())
      );
    }
  });

  const NUM_OF_RECORDS = filteredData?.length;
  const currentData = filteredData

  useEffect(() => {
    if (currentData?.length < 1) {
      setCurrentPage(1);
    }
  }, [currentData]);

  const handleShowItemChange = (e) => {
    setShowItems(e.target.value);
  };

  useEffect(() => {
    props.actions.getUserList({ role_type: "customer" });
  }, [props.actions]);

  const handleClick = (user) => {
    navigate(`/user/details/${user.id}`);
  };

  return (
    <Row>
      <Col sm="12">
        <TableWrapper
          title="User List"
          handleShowItemChange={handleShowItemChange}
          inputHandler={inputHandler}
          isData={allUser?.length}
        >
          <div className="table-responsive image-tbl">
            <table
              id="user-list-table"
              className="table table-striped"
              role="grid"
              data-toggle="data-table"
            >
              {props?.user?.loading ? (
                <div
                className="spinner-border"
                  style={{
                    position: "fixed",
                    left: "600px",

                    width: "2rem",
                    height: " 2rem",
                    zIndex: "9999",
                  }}
                ></div>
              ) : !filteredData?.length ? (
                <tbody>
                  <tr
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <td>
                      <h3>No Record Found</h3>
                    </td>
                  </tr>
                </tbody>
              ) : (
                <>
                  <thead>
                    <tr className="ligth">
                      <th className="text-center col-2">Profile</th>
                      <th className="text-center">
                        Name
                      </th>
                      <th className="text-center">
                        Email
                      </th>
                      <th className="text-center">
                        Phone No
                       </th>
                      <th className="text-center">
                        userName
                       </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData?.map((item) => (
                      <tr key={item?.id}>
                        <td className="text-center ">
                          {!item.image ? (
                            <div className=" bg-soft-primary rounded img-fluid avatar-40 me-3">
                              <span>{item?.firstName[0]?.toUpperCase()}</span>
                            </div>
                          ) : (
                            <Image
                              className="bg-soft-primary rounded img-fluid avatar-40 me-3"
                              src={`${API_URL}/static/profile/${item.image}`}
                            />
                          )}
                        </td>

                        <td className="text-center">
                          {item?.firstName + " " + item?.lastName}
                        </td>
                        <td className="text-center">{item?.email}</td>
                        <td className="text-center">{item?.contact == null ? '-':item?.contact}</td>
                        <td className="text-center">{item?.userName == null ? '-': item?.userName}</td>

                      </tr>
                    ))}

                    {props?.user?.error ? (
                      <span
                        style={{
                          color: "Red",
                          fontSize: "smaller",
                        }}
                      >
                        {props?.user?.error}
                      </span>
                    ) : null}
                  </tbody>
                </>
              )}
            </table>
          </div>
        </TableWrapper>
      </Col>

      {filteredData?.length > showItems ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span className="col-md-6">
            Showing {(currentPage - 1) * showItems + 1} to{" "}
            {currentData?.length < showItems
              ? NUM_OF_RECORDS
              : parseInt((currentPage - 1) * showItems) +
                parseInt(showItems)}{" "}
            of {NUM_OF_RECORDS} entries
          </span>
        </div>
      ) : null}
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: { ...bindActionCreators(user, dispatch) },
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
