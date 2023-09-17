
import axios from "axios";
axios.defaults.baseURL = "https://6506b75e3a38daf4803ea05e.mockapi.io";

export async function fetchCars() {
  const response = await axios.get("/catalog");
  return response;
}



// export async function updateFollowers(updatedFollowers) {
//   const response = await axios.put("/catalog/:id ", updatedFollowers);
//   return response;
// }

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://6506b75e3a38daf4803ea05e.mockapi.io';

// export const fetchCars = createAsyncThunk(
//   'catalog/fetchAll',
//   async (_, thunkApi) => {
//     try {
//       const responce = await axios.get('/catalog');
//       return responce.data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );



// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// const BASE_URL = 'https://6506b75e3a38daf4803ea05e.mockapi.io/catalog';
// const limitPerPage = 8;

// export const fetchCars = createAsyncThunk(
//   'catalog/fetchAll',
//   async ({page}, thunkAPI) => {
//     try {
//       const response = await axios.get(`${BASE_URL}/adverts/?page=${page}&limit=${limitPerPage}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );