import axios from "./instance";

const customerList = async () => {
  try {
    const response = await axios.get("/");

    return response;
  } catch (error) {
    throw new Error("Failed to fetch event");
  }
};

exports = {
  customerList,
};
