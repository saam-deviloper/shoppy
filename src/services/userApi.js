import axios from "axios";
export const userApi = async () => {
  const users = await axios
    .get("https://fakestoreapi.com/users")
    .catch((err) => console.log(err));
  return users;
};
