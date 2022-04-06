export const isInCart = (state, prodId) => {
  //2ta attention meghdare find ro true false mikone
  const result = !!state.selectedItems.find((item) => item.id === prodId);
  return result;
};
