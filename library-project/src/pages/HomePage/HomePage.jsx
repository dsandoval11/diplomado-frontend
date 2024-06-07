import { useEffect, useState } from 'react';
import { Cover } from '../../components/Cover';
import { useFetch } from '../../hook/useFetch';
import { URL_API_BOOKS } from '../../utils/constants';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => {
  const {data, loading, req } = useFetch();
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    req({
      URL: URL_API_BOOKS,
      headers: {}
    })
  }, []);

  useEffect(() => {
    if(data) {
      const { reading_log_entries } = data;
      const booksData = reading_log_entries.map(({work}) => {
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

      {loading ?
        <h1>Cargando</h1> :
        <div className='book-list'>
          {books.map((book, index) => {
            return <Cover key={index} info={book} onBookClick={(bookID) => {navigate(`/book/${bookID}`)}}/>
          })}
        </div>
      }
    </>
  )
}
