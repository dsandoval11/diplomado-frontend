import { useState } from 'react';
import { URL_API_USER } from '../utils/constants';

export const useFetch = (path = '') => {
  const [state, setState] = useState({
    data: undefined,
    error: undefined,
    loading: true
  });

  const req = async ({
    URL = URL_API_USER,
    body,
    method = 'GET',
    headers
  }) => {
    const resp = await fetch(URL + path, {
      method,
      headers: (headers || {
        'Content-Type': 'application/json',
      }),
      ...(body && { body: JSON.stringify(body) } )
    })
    const data = await resp.json();
    if(resp.status >= 400) {
      setState({
        error: data,
        loading: false
      })
    } else {
      setState({
        data,
        loading: false
      })
    }
  }

  return {...state, req};
}
