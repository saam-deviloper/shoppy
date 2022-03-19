import React, { createContext, useReducer } from "react";
//create context
export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const initialState = {
    selectedItems: [],
    count: 0,
    total: 0,
    isCheckOut: false,
  };
  //get sum of order and total price
  const sumCount = items => {
    const totalCount = items.reduce((total, product) => total + product.quantity,0);
    const totalPrice = items
      .reduce((total, product) => total + product.price * product.quantity,0)
      .toFixed(2)
    // console.log(totalCount, totalPrice);
    return { totalCount, totalPrice };
  };

  const cartReducer = (state, action) => {
    console.log(state);
    switch (action.type) {
      case "ADD_VALUE":
        if (
          !state.selectedItems.find((item) => item.id === action.payload.id)
        ) {
          state.selectedItems.push({ ...action.payload, quantity: 1 });
        }
        return {
          ...state,
          selectedItems: [...state.selectedItems],
          ...sumCount(state.selectedItems),
          isCheckOut: false,

        };
      case "REMOVE_VALUE":
        const newSelectedItems = state.selectedItems.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          selectedItems: [...newSelectedItems],
          ...sumCount(newSelectedItems),
        };
      case "INCREASE":
        const IndexI = state.selectedItems.findIndex(
          (item) => item.id === action.payload.id
        );
        state.selectedItems[IndexI].quantity++;
        return {
          ...state,
          ...sumCount(state.selectedItems),
        };
      case "DECREASE":
        const IndexD = state.selectedItems.findIndex(
          (item) => item.id === action.payload.id
        );
        state.selectedItems[IndexD].quantity--;
        return {
          ...state,
          ...sumCount(state.selectedItems),
        };
      case "CHECKOUT":
        return {
          selectedItems: [],
          count: 0,
          total: 0,
          isCheckOut: true,
        };
      case "CLEAR":
        return {
          selectedItems: [],
          count: 0,
          total: 0,
          isCheckOut: false,
        };

      default:
        return { ...state };
    }
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
