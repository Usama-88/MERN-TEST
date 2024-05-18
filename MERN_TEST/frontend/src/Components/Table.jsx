import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Table = ({ columns, data }) => {
  return (
    <div className=" w-100 ">
      <div
        className="table-header py-2  text-center"
        style={{ borderRadius: "10px" }}
      >
        {columns.map((column, index) => (
          <span className="span" key={index}>
            {column}
          </span>
        ))}
      </div>

      {data.map((row, rowIndex) => (
        <div
          className="table-body bg-white d-flex align-items-center justify-between px-2 py-2 w-100"
          style={{ borderRadius: "10px" }}
        >
          {Object.entries(row).map(([key, value], index) => (
            <React.Fragment key={index}>
              {key === "image" ? ( // Assuming "image" is the key for the image URL
                <img src={value} alt="Image" className="mr-2 image" />
              ) : (
                <span className="list-items mx-auto ">{value}</span>
              )}
            </React.Fragment>
          ))}
          <Link to={`/edit-customer/${row?.id}`}>
            <button className="edit-button">Edit</button>
          </Link>
          <Link to="/delete-customer">
            <button className="delete-button">Delete</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Table;
