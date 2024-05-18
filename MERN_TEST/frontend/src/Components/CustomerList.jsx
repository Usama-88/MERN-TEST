import React, { useEffect, useState } from "react";
import "./style.css";
import PlusIcon from "../Images/plus.png";
import { Link } from "react-router-dom";
import Table from "./Table";
import img from "../Images/img.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers, deleteCustomer } from "../app/customerSlice";

const Main = () => {
  const columns = ["Name", "Age", "Location"];
  const dispatch = useDispatch();
  const data = useSelector((state) => state.customerSlice.data) || [];

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  return (
    <div className="px-lg-5 px-md-5 px-sm-0 container mt-5">
      <div>
        <Link
          className="button py-3"
          to="create-customer"
          style={{ textDecoration: "none" }}
        >
          <img src={PlusIcon} height={14} width={15} />
          <span className="px-3 ">ADD NEW CUSTOMER</span>
        </Link>
      </div>
      <div className=" mt-5 ">
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

          {data.length > 0 ? (
            data?.map((row, rowIndex) => (
              <div
                className="table-body bg-white d-flex align-items-center justify-between px-2 py-2 w-100"
                style={{ borderRadius: "10px" }}
              >
                <img
                  src={"http://127.0.0.1:5000" + "/uploads/" + row?.profile_pic}
                  alt="Image"
                  style={{ borderRadius: "10px" }}
                  className="mr-2 image"
                />
                <div className="">
                  <span className="list-items ">{row?.name}</span>
                  <span className="list-items   ">{row?.username}</span>
                  <span className="list-items  ">{row?.email}</span>
                </div>
                <Link to={`/edit-customer/${row?._id}`}>
                  <button className="edit-button">Edit</button>
                </Link>
                <Link to={`/delete-customer/${row?._id}`}>
                  <button className="delete-button">Delete</button>
                </Link>
              </div>
            ))
          ) : (
            <h1 className="text-center mt-5">No Customers</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
