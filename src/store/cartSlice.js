import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDataFromJson = createAsyncThunk('cart/getDataFromJson', async () => {
  const response = await fetch('/data.json');
  const data = await response.json();

  return data.cars;
})


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
    status: 'idle'
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          quantity: 1,
          name: newItem.name,
          carClass: newItem.carClass,
          image: newItem.image
        });
      } else {
        existingItem.quantity++;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    removeAll(state) {
      state.items = [];
      state.totalQuantity = 0;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataFromJson.pending, state => state.status = 'loading')
      .addCase(getDataFromJson.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload
      })
      .addCase(getDataFromJson.rejected, state => state.status = 'failed')
  }
})

export const cartActions = cartSlice.actions;

export default cartSlice;