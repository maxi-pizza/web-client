import axios from 'axios';

export const productsQuery = {
  queryKey: ['products'],
  queryFn: async () => {
    const res = await axios.get('http://localhost:8080/api/products');
    return res.data;
  },
};
