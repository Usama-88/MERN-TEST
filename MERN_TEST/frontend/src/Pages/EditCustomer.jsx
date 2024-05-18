import React from "react";
import Form from "../Components/Form";
import EditForm from "../Components/EditForm";

const EditCustomer = () => {
  return (
    <div
      className="vh-100 w-100 text-white d-flex align-items-center justify-content-center"
      style={{ background: "#252525" }}
    >
      <div>
        <EditForm />
      </div>
    </div>
  );
};

export default EditCustomer;
