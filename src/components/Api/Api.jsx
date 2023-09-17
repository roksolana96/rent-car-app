
import axios from "axios";
axios.defaults.baseURL = "https://6506b75e3a38daf4803ea05e.mockapi.io";

export async function fetchCars() {
  const response = await axios.get("/advert");
  return response;
}