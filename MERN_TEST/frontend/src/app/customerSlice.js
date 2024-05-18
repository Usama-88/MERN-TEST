import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCustomers = createAsyncThunk("fetchCustomers", async () => {
  const response = await fetch("http://127.0.0.1:5000/api/");
  return response.json();
});
export const singleCustomer = createAsyncThunk("singleCustomer", async (id) => {
  const response = await fetch(
    "http://127.0.0.1:5000/api/update-customer" + id
  );
  return response.json();
});
export const deleteCustomer = createAsyncThunk("deleteCustomer", async (id) => {
  const response = await fetch(`http://127.0.0.1:5000/api/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
});

export const createCustomer = createAsyncThunk(
  "createCustomer",
  async (formData) => {
    const response = await fetch(`http://127.0.0.1:5000/api/create-customer`, {
      method: "POST",
      body: formData,
    });
    return response.json();
  }
);
export const updateCustomer = createAsyncThunk(
  "updateCustomer",
  async ({ id, formData }) => {
    const response = await fetch(
      `http://127.0.0.1:5000/api/update-customer/${id}`,
      {
        method: "PUT",
        body: formData,
      }
    );
    return response.data.customer;
  }
);

export const customerSlice = createSlice({
  name: "customer",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCustomers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCustomers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCustomers.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
    builder.addCase(deleteCustomer.fulfilled, (state, action) => {
      const customerId = action.payload;
      state?.filter((customer) => customer?.id !== customerId);
    });
    builder.addCase(createCustomer.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(singleCustomer.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(updateCustomer.fulfilled, (state, action) => {
      const updatedCustomer = action.payload;
      state.customers = state.customers.map((customer) =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer
      );
      state.singleCustomer = updatedCustomer;
    });
  },
});

// Action creators are generated for each case reducer function
export const { customerList } = customerSlice.actions;

export default customerSlice.reducer;
