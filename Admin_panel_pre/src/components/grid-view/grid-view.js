import React from "react";
import { useExpanded, useTable } from "react-table";

const GridView = ({ columns, data, RowSubComponent }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { expanded },
  } = useTable(
    {
      columns,
      data,
    },
    useExpanded
  );

  return (
    <table
      className="table table-striped"
      role="grid"
      data-toggle="data-table"
      {...getTableProps()}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className="text-center" {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td className="text-center" {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
              {RowSubComponent ? (
                // <tr {...row.getRowProps()} style={{ display: row?.isExpanded ? "table-row" : "none" }}>
                <RowSubComponent row={row} />
              ) : // </tr>
              null}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GridView;
