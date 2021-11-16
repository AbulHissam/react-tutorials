import React from "react";
import numeral from "numeral";
import { Table } from "react-bootstrap";
import "./Table.css";
function CasesByCountrieTable({ countries }) {
  return (
    <div className="table-container">
      <Table striped responsive="md">
        <tbody>
          {countries.map(({ country, cases }, index) => {
            return (
              <tr key={index}>
                <td>{country}</td>
                <td>
                  <strong>{numeral(cases).format()}</strong>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default CasesByCountrieTable;
