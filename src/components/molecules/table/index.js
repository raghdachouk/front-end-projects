import React, { useState } from "react";
import getValue from "../../../utils/getValue";

import { WrapperTable } from "./table.styles";

const Table = ({ title, data, columns }) => {
  const [clicked, setClicked] = useState(null);
  return (
    <WrapperTable>
      <div className="container-projects">
        <div className="container-projects__title">{title}</div>
        <div className="container-projects__details">
          {data.map((el) => (
            <div className="container-projects__details__project" key={el.name}>
              <div
                className="container-projects__details__project__header"
                onClick={() =>
                  setClicked((prv) => (prv === el.name ? null : el.name))
                }
              >
                <div>{el.name}</div>
                <div>TOTAL: {el.total} USD</div>
              </div>
              {clicked === el.name && (
                <table className="container-projects__details__project__body">
                  <thead>
                    <tr>
                      {columns.map((elt) => (
                        <th key={elt.header}>{elt.header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {el.details.map((item) => (
                      <tr
                        className="container-projects__details__project__body__values"
                        key={item.date + item.transactionId}
                      >
                        {columns.map((elt) => (
                          <td key={elt.accessor}>
                            {getValue(item, elt.accessor, "")}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ))}
        </div>
      </div>
    </WrapperTable>
  );
};

export default Table;
