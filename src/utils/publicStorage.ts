import {PUBLIC_STORAGE_URL} from 'src/env.ts';

export const publicStorage = (url: string) => {
  return PUBLIC_STORAGE_URL + ('/' + url).replace('//', '/');
};
