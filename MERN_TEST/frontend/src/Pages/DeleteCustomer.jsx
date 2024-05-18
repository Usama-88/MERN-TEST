import { Link, useNavigate, useParams } from "react-router-dom";
import bin from "../Images/bin.svg";
import shape from "../Images/BlackShape.svg";
import { useDispatch } from "react-redux";
import { deleteCustomer } from "../app/customerSlice";

const DeleteCustomer = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const deleteUser = async (id) => {
    try {
      await dispatch(deleteCustomer(id));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div
      className="vh-100 w-100 text-white d-flex align-items-center justify-content-center"
      style={{ background: "#252525" }}
    >
      <div
        className="py-4 text-black text-center"
        style={{
          background: "#FBFCFC",
          borderRadius: "15px",
        }}
      >
        <div className="text-end mx-4">
          <Link to="/">
            <img
              src={shape}
              height={15}
              width={15}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
        <div style={{ padding: "0 4rem" }}>
          <div>
            <img src={bin} height={65} width={65} />
            <h1
              style={{ fontSize: "25px", fontWeight: "700", marginTop: "1rem" }}
            >
              Are you sure?
            </h1>
            <p>
              Do you really want to delete this customer? <br /> This process
              can not be undone.
            </p>
          </div>
          <div className="d-flex align-items-center mt-5">
            <Link to="/">
              <button
                style={{
                  border: "none",
                  padding: "8px 35px",
                  background: "#A5A5AF",
                  color: "white",
                  borderRadius: "5px",
                  fontSize: "14px",
                  marginRight: "2rem",
                }}
              >
                CANCEL
              </button>
            </Link>
            <button
              onClick={() => {
                deleteUser(params?.id);
              }}
              style={{
                border: "none",
                padding: "8px 35px",
                background: "#D80000",
                color: "white",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                DELETE
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCustomer;
