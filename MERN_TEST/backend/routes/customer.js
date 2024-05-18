const express = require("express");
const router = express.Router();
const {
  createCustomer,
  fetchCustomers,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controller/Customer");
const { uploadFile } = require("../services/upload.services");

router.post(
  "/create-customer",
  uploadFile.single("profile_pic"),
  createCustomer
);

router.get("/", fetchCustomers);
router.get("/:id", getSingleCustomer);
router.put(
  "/update-customer/:id",
  uploadFile.single("profile_pic"),
  updateCustomer
);
router.delete("/:id", deleteCustomer);

module.exports = router;
