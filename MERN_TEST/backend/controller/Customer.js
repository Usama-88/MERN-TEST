const Customer = require("../models/Customer");

module.exports.createCustomer = async (req, res) => {
  try {
    const { name, email, username } = req.body;

    // Check if username or email already exists
    const existingUser = await Customer.findOne({
      $or: [{ email: email }, { username: username }],
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Username or email already exists",
      });
    }

    // Create new customer
    const newUser = new Customer({
      profile_pic: req.file.filename,
      name,
      username,
      email,
    });

    await newUser.save();

    return res.status(200).json({
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Fetch customers with sorting
module.exports.fetchCustomers = async (req, res) => {
  try {
    // Get sort parameters from query
    const sortField = req.query.sortBy;
    const sortOrder = req.query.order === "desc" ? -1 : 1;

    // Define the sort object
    let sort = {};
    if (sortField) {
      sort[sortField] = sortOrder;
    }

    // Fetch sorted customers
    const customers = await Customer.find().sort(sort);

    return res.status(200).json(customers);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Fetch customers with sorting
module.exports.getSingleCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    if (!customer) {
      return res.status(404).json({ message: "customer not found" });
    }

    return res.status(200).json({ customer });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.updateCustomer = async (req, res) => {
  try {
    const id = req.params.id;

    await Customer.findByIdAndUpdate(
      id,
      {
        profile_pic: req.file.filename,
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
      },
      { useFindAndModify: false }
    )
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Customer not found.`,
          });
        } else {
          res.status(200).json({ message: "Customer updated successfully." });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);

    if (!customer) {
      return res.status(404).json({ message: "customer not found" });
    }

    return res.status(200).json({
      message: "Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
