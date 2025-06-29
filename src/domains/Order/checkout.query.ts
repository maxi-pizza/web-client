import axios from 'axios';

export const CHECKOUT_QUERY_KEY = 'checkout';

export const checkoutQuery = {
  queryKey: [CHECKOUT_QUERY_KEY],
  queryFn: async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/checkout`);
    return res.data;
  },
};
