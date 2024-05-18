import React, { useEffect, useState } from "react";
import shape from "../Images/Shape.svg";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import {
  createCustomer,
  singleCustomer,
  updateCustomer,
} from "../app/customerSlice";

const EditForm = ({ heading, btnName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [profile_pic, setProfilePic] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [filename, setFileName] = useState("");

  const { id } = useParams();
  const singleCustomer = () => {
    try {
      fetch("http://127.0.0.1:5000/api/" + id, {
        method: "GET",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json(); // Convert the response to JSON
        })
        .then((data) => {
          const customer = data.customer;
          setProfilePic(customer.profile_pic);
          setName(customer.name);
          setUsername(customer.username);
          setEmail(customer.email);
          setFileName(customer.filename);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    singleCustomer();
  }, []);

  const handleFormSubmit = async (data) => {
    let formData = new FormData();
    formData.append("profile_pic", data.profile_pic);
    formData.append("name", data.name);
    formData.append("username", data.username);
    formData.append("email", data.email);

    try {
      await dispatch(updateCustomer({ id, formData }));
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit({ profile_pic, name, username, email });
    navigate("/");
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setFileName(file.name);
    } else {
      setProfilePic("");
      setFileName("");
    }
  };

  return (
    <div>
      <div
        className="py-3 "
        style={{
          background: "linear-gradient(45deg, #57BC90, #004B40)",
          borderRadius: "15px  15px 0 0 ",
        }}
      >
        <div className="text-end mx-4">
          <Link to="/">
            <img src={shape} height={20} width={13} />
          </Link>
        </div>
        <div className="text-center " style={{ padding: "0 4rem" }}>
          <h1 style={{ fontSize: "1.8rem" }} className="mt-3 m-auto">
            Edit Customer
          </h1>
        </div>
      </div>
      <form
        className="py-4 px-4 text-black "
        onSubmit={handleSubmit}
        enctype="multipart/form-data"
        style={{
          background: "#FBFCFC",
          borderRadius: "0 0 15px 15px",
        }}
      >
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="name"
        />
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          placeholder=" username"
        />
        <Input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          placeholder="Email"
        />
        <Input
          type="file"
          name="profile_pic"
          placeholder1="Upload Photo"
          id="uploadbtn"
          onChange={(e) => handleChange(e)}
          filename={filename}
        />
        <button type="submit" className="form-button">
          Edit Customer
        </button>
      </form>
    </div>
  );
};

export default EditForm;
