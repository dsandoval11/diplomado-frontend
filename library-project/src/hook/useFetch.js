import { useEffect, useState } from 'react';
import { requestApi } from '../utils/requests';

export const useFetch = () => {
  const [state, setState] = useState({
    data: {},
    loading: true
  });

  useEffect(()=> {
    requestApi().then((data) => {
      setState({
        data,
        loading: false
      })
    })
  }, []);

  return state;
}