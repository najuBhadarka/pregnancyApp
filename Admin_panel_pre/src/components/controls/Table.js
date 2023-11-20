import React from "react";

const Table = ({ id, columns, data, tableclass, tdclass, imgclass }) => {
  return (
    <table className={tableclass}>
      <thead>
        <tr>
          {columns.map(({ path, name }) => (
            <th key={path}>{name}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((rowData) => (
          <tr key={rowData[id]}>
            {columns.map(({ path }) => (
              <>
                <td className={tdclass} key={path}>
                  {path === "Customer" ? (
                    <>
                      {rowData?.profileImg ? (
                        <img
                          className={imgclass}
                          src={rowData?.profileImg}
                          alt="profile"
                        />
                      ) : null}
                      {rowData[path]}
                    </>
                  ) : (
                    rowData[path]
                  )}
                </td>
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
