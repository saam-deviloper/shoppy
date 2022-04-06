export const quantityCount = (state, prodId) => {
  const indexSelected = state.selectedItems.findIndex(
    (item) => item.id === prodId
  );
  if (indexSelected === -1) {
    return false;
  } else {
    return state.selectedItems[indexSelected].quantity;
  }
};
