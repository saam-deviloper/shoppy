export const loginValidation = (userValue, serverValue) => {
  const userIndex = serverValue.findIndex(
    (item) => item.username === userValue.UserName
  );
  if (serverValue[userIndex]["password"] === userValue.passWord) return true;
  else return false;
};
