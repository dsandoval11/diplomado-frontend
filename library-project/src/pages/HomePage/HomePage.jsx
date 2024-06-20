import { useContext, useEffect } from 'react';
import { useFetch } from '../../hook/useFetch';
import { URL_API_BOOKS } from '../../utils/constants';
import { useState } from 'react';
import { Cover } from '../../components/Cover/Cover';
import Lottie from 'lottie-react';
import './HomePage.css';
import loadingAnimation from '../../assets/animations/loading2.json'
import { NavBar } from '../../components/NavBar';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ModeContext } from '../../context/ModeContext/ModeContext'
import { Helmet } from 'react-helmet-async';

export const HomePage = () => {
  const { data, loading, req } = useFetch();
  const [ books, setBooks ] = useState([]);
  const navigate = useNavigate();
  const { toggleMode } = useContext(ModeContext);

  useEffect(()=> {
    req({ 
      URL: URL_API_BOOKS,
      headers: {}
    });
  }, []);

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
    <>
      {loading ? (
        <Lottie animationData={loadingAnimation} />
      ) : (
        <>
          <Helmet>
            <title>Library | Home</title>
          </Helmet>
          <Button onClick={toggleMode}>cambiar modo</Button>
          <NavBar />
          <div className="book-list">
            {books.map((book, index) => {
              return (
                <Cover
                  key={index}
                  info={book}
                  onBookClick={(id) => navigate(`/book/${id}`)}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
