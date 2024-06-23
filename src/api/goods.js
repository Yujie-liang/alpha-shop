import axios from 'axios';
const baseUrl = ' http://localhost:3004';

export const getGoods = async () => {
  try {
    const res = await axios.get(`${baseUrl}/goods`);
    return res.data;
  } catch (error) {
    console.error('[Get Goods failed]: ', error);
    return [];
  }
}