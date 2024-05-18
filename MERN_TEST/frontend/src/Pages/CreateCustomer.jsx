import React from "react";
import Form from "../Components/Form";
import { createCustomer } from "../app/customerSlice";
import { useDispatch } from "react-redux";

const CreateCustomer = () => {
  return (
    <div
      className="vh-100 w-100 text-white d-flex align-items-center justify-content-center"
      style={{ background: "#252525" }}
    >
      <div>
        <Form heading={"ADD NEW CUSTOMER"} btnName="Create Customer" />
      </div>
    </div>
  );
};

export default CreateCustomer;
