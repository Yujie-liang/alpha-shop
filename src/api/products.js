import axios from 'axios';
const baseUrl = 'http://192.168.50.172:3004';
// const baseUrl = 'https://us-central1-alpha-shop-api.cloudfunctions.net/api';

export const getProducts = async () => {
  try {
    const res = await axios.get(`${baseUrl}/products`);
    return res.data;
  } catch (error) {
    console.error('[Get Products failed]: ', error);
    return [];
  }
}