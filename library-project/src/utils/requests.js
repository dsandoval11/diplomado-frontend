import { URL_API } from './constants';

export const  requestApi = async () => {
  const resp = await fetch(URL_API);
  const data = await resp.json();
  return data;
}
