export const  requestApi = async (URL_API, config = {}) => {
  const resp = await fetch(URL_API, config);
  const data = await resp.json();
  return data;
}
