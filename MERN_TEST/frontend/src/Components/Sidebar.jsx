import { Link } from "react-router-dom";
import Logo from "../Images/images.png";
import Icon from "../Images/icon.png";
import "../Components/style.css";

const Sidebar = () => {
  return (
    <div
      className="sidebar py-3 pe-5 ps-3  vh-100 "
      style={{
        background: "#015249",
        borderRadius: "0px 20px 20px 0px",
      }}
    >
      <div className="w-100">
        <div className="mt-3 mb-5">
          <img src={Logo} height={55} width={230} />
        </div>
        <ul
          className="nav nav-pills  flex-column "
          style={{ marginTop: "5rem" }}
        >
          <li className="list-item-style nav-item d-flex align-items-center ">
            <Link
              to={"/"}
              className="p-3  mx-auto text-white"
              style={{ textDecoration: "none" }}
            >
              <img src={Icon} className="me-4 " height={23} width={23} />
              <span style={{ fontSize: "16px" }}>CUSTOMERS</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
