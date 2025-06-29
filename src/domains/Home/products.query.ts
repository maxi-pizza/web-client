import axios from 'axios';

export const productsQuery = {
  queryKey: ['products'],
  queryFn: async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products`);
    return res.data;
  },
};
