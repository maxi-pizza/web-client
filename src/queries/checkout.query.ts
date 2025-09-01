import axios from 'axios';
import {API_BASE_URL} from 'src/env.ts';

export const CHECKOUT_QUERY_KEY = 'checkout';

export const checkoutQuery = {
  queryKey: [CHECKOUT_QUERY_KEY],
  queryFn: async () => {
    const res = await axios.get(`${API_BASE_URL}/checkout`);
    return res.data;
  },
};
