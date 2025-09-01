import axios from 'axios';

export const bannersQuery = {
  queryKey: ['banners'],
  queryFn: async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/banners`);
    return res.data;
  },
};
