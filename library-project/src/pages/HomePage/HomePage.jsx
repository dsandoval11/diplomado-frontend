import { useEffect, useReducer } from 'react';
import { useFetch } from '../../hook/useFetch';
import { URL_API_BOOKS } from '../../utils/constants';
import { useState } from 'react';
import { Cover } from '../../components/Cover/Cover';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/animations/loading2.json'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MainLayout } from '../../layouts/MainLayout';
import './HomePage.css';
import { Grid } from '@mui/material';
import { Pagination } from '../../components/Pagation/Pagination';
import { PAGINATION_ACTIONS, paginationReducer } from '../../utils/reducers/paginationReducer';

export const HomePage = () => {
  const { data, loading, req } = useFetch();
  const [ books, setBooks ] = useState([]);
  const [ pagination, dispatch ] = useReducer(paginationReducer, { page: 0, rowsPerPage: 10 });
  const navigate = useNavigate();

  useEffect(()=> {
    req({ 
      URL: `${URL_API_BOOKS}?limit=${pagination.rowsPerPage}&page=${pagination.page + 1}`,
      headers: {}
    });
  }, [pagination]);

  useEffect(()=> {
    if(data) {
      const { reading_log_entries } = data;
      const booksData = reading_log_entries.map(({ work }) => {
        return {
          img: `https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`,
          book: work.title,
          author: work.author_names.join(', '),
          key: work.key
        }
      });
      setBooks(booksData);
    }
  }, [data]);

  return (
    <MainLayout>
      {loading ? (
        <Grid container justifyContent='center' alignItems='center'
          sx={{ minHeight: '90vh' }}>
          <Lottie animationData={loadingAnimation} />
        </Grid>
      ) : (
        <>
          <Helmet>
            <title>Library | Home</title>
          </Helmet>
          <Grid container justifyContent='center'>
            <Grid display='grid' gridTemplateColumns="repeat(5, 1fr)" gap={2}>
              {books.map((book, index) => {
                return (
                  <Cover
                    key={index}
                    info={book}
                    onBookClick={(id) => navigate(`/book/${id}`)}
                  />
                );
              })}
            </Grid>
          </Grid>
          <Pagination 
            page={pagination.page}
            count={data.numFound}
            rowsPerPage={pagination.rowsPerPage}
            changePage={(page)=>{ 
              dispatch({ type: PAGINATION_ACTIONS.CHANGE_PAGE, payload: page })
            }}
            changeRowsPerPage={(rowsPerPage)=>{
              dispatch({ type: PAGINATION_ACTIONS.CHANGE_ROWS_PER_PAGE, payload: rowsPerPage })
            }}
          />
        </>
      )}
    </MainLayout>
  );
}
