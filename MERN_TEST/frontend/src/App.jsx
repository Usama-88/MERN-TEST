import "bootstrap/dist/css/bootstrap.min.css";
import Customer from "./Pages/Customer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateCustomer from "./Pages/CreateCustomer";
import EditCustomer from "./Pages/EditCustomer";
import DeleteCustomer from "./Pages/DeleteCustomer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Customer />} />
          <Route path="/create-customer" element={<CreateCustomer />} />
          <Route path="/edit-customer/:id" element={<EditCustomer />} />
          <Route path="/delete-customer/:id" element={<DeleteCustomer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
