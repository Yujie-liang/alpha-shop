import axios from 'axios';
const baseUrl = 'http://localhost:3004';

export const getProducts = async () => {
  try {
    const res = await axios.get(`${baseUrl}/products`);
    return res.data;
  } catch (error) {
    console.error('[Get Products failed]: ', error);
    return [];
  }
}