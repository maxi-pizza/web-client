import axios from 'axios';
import {Banner} from 'src/types.ts';
import {API_BASE_URL} from 'src/env.ts';

export const bannersQuery = {
  queryKey: ['banners'],
  queryFn: async () => {
    const res = await axios.get<Banner[]>(`${API_BASE_URL}/banners`);
    return res.data;
  },
};
