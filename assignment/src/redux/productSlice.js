// import { createSlice } from "@reduxjs/toolkit";

// const productSlice = createSlice({
//   name: "products",
//   initialState: {
//     list: [],
//   },
//   reducers: {
//     setProducts: (state, action) => {
//       state.list = action.payload;
//     },
//     addProduct: (state, action) => {
//       state.list.push(action.payload);
//     },
//     deleteProduct: (state, action) => {
//       state.list = state.list.filter((p) => p.id !== action.payload);
//     },
//     updateProduct: (state, action) => {
//       const index = state.list.findIndex((p) => p.id === action.payload.id);
//       if (index !== -1) {
//         state.list[index] = action.payload;
//       }
//     },
//   },
// });

// export const { setProducts, addProduct, deleteProduct, updateProduct } =
//   productSlice.actions;
// export default productSlice.reducer;
