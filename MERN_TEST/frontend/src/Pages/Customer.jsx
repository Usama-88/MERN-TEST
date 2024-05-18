import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import CustomerList from "../Components/CustomerList";

const Customer = () => {
  return (
    <div className="d-flex " style={{ background: "#F3F3F3" }}>
      <div className="w-auto">
        <Sidebar />
      </div>
      <div className="col vh-100">
        <Navbar />
        <CustomerList />
      </div>
    </div>
  );
};

export default Customer;
