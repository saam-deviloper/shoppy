import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const fetchApi = async () => {
  const response = await axios
    .get(`${BASE_URL}/products`)
    .catch((err) => console.log(err));
  return response.data;
}
