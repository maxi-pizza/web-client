import axios from 'axios';
import {API_BASE_URL} from 'src/env.ts';

export const productsQuery = {
  queryKey: ['products'],
  queryFn: async () => {
    const res = await axios.get(`${API_BASE_URL}/products`);
    return res.data;
  },
};
