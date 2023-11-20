import React from "react";

import Card from "../card";

const DataPerPage = (props) => {
  const { handleShowItemChange } = props;

  return (
    <div className="col-md-2">
      <div className="dataTables_length" id="user-list-table_length">
        <label style={{ padding: "0.75rem 1.5rem", display: "flex" }}>
          Show
          <select
            name="user-list-table_length"
            aria-controls="user-list-table"
            className="custom-select custom-select-sm form-control form-control-sm"
            style={{ width: "60px" }}
            onChange={handleShowItemChange}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          entries
        </label>
      </div>
    </div>
  );
};

const FilterDate = (props) => {
  const { handleChangeForDate, handleClearFilter } = props;

  return (
    <div className="col-md-6">
      <div>
        <label htmlFor="startdate">Start Date:</label>
        <input
          type="date"
          name="startdate"
          id="startdate"
          className="startEndDateFilter"
          onChange={handleChangeForDate}
          required
        />
        <label htmlFor="enddate" className="filterDate">
          End Date:
        </label>
        <input
          type="date"
          name="enddate"
          id="enddate"
          className="startEndDateFilter"
          onChange={handleChangeForDate}
          required
        />
        <button className="clearBtn" onClick={handleClearFilter}>
          clear
        </button>
      </div>
    </div>
  );
};

const TableWrapper = (props) => {
  const {
    title,
    buttonTitle,
    buttonAction,
    children,
    handleShowItemChange,
    handleChangeForDate,
    inputHandler,
    handleClearFilter,
    isData,
    isFromOrderList,
  } = props;

  return (
    <Card>
      {!props.isDashBoard && (
        <Card.Header>
          <Card.Header.Title>
            <h4 className="card-title">{title}</h4>
          </Card.Header.Title>

          {buttonTitle ? (
            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary rounded-pill"
                onClick={buttonAction}
              >
                {buttonTitle}
              </button>
            </div>
          ) : null}
        </Card.Header>
      )}
      {!props.isDashBoard > 0 ? (
        <div
          className="row align-items-center"
          style={{ justifyContent: "space-between" }}
        >
          <DataPerPage handleShowItemChange={handleShowItemChange} />
          {isFromOrderList ? (
            <FilterDate
              handleChangeForDate={handleChangeForDate}
              handleClearFilter={handleClearFilter}
            />
          ) : null}
          <div
            className="input-group search-input col-md-3"
            style={{ marginRight: "22px" }}
          >
            <span className="input-group-text" id="search-input">
            </span>
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              name="search"
              onChange={inputHandler}
            />
          </div>
        </div>
      ) : null}

      <Card.Body className="px-0">{children}</Card.Body>
    </Card>
  );
};

export default TableWrapper;
