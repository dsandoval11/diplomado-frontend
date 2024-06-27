import { useParams } from 'react-router-dom';
import { NavBar } from '../../components/NavBar';
import { useFetch } from '../../hook/useFetch';
import { useEffect } from 'react';
import { MainLayout } from '../../layouts/MainLayout';

export const BookDetailPage = () => {
  const { id } = useParams();
  const {data, error, loading, req} = useFetch();
  
  useEffect(() => {
    req({
      URL: `https://openlibrary.org/works/${id}.json`,
      headers: {}
    })
  }, []);

  return (
    <MainLayout>
      <div>{id}</div>
    </MainLayout>
  )
}
