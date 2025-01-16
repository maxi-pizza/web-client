import axios from 'axios';

export const CHECKOUT_QUERY_KEY = 'checkout';

export const checkoutQuery = {
  queryKey: [CHECKOUT_QUERY_KEY],
  queryFn: async () => {
    const res = await axios.get('http://localhost:8080/api/checkout');
    return res.data;
  },
};
