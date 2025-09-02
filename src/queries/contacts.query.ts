import axios from 'axios';
import {API_BASE_URL} from 'src/env.ts';

type Contacts = {
  phones: string[];
  instagram_display_text: string;
  instagram_app: string;
  instagram_web: string;
  delivery_and_payment_info: string;
};

export const contactsQuery = {
  queryKey: ['contacts'],
  queryFn: async () => {
    const res = await axios.get<Contacts>(`${API_BASE_URL}/contacts`);
    return res.data;
  },
};
