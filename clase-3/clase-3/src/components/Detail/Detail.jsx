import { useFetch } from '../../hook/useFetch';
import './Detail.css';
import PropTypes from 'prop-types';

export const Detail = ({ book }) => {
  const result = useFetch();
  const { loading } = result;

  return (
    <>
      { loading ?
        <h1>Cargando</h1> :
        <div className="container">
          <img className="cover" src="" alt="Cover"  />
          <div className="info">
            <h2>{book.title} <span className="value">({book.genre})</span></h2>
            <hr className="divider"/>
            <h4>Autor del libro: <span className="value">{book.author}</span></h4>
            <h4>Editorial: <span className="value">{book.publisher}</span></h4>
            <h4>Año de publicacion: <span className="value">{book.year}</span></h4>
          </div>
        </div>
      }
    </>
  )
}

Detail.propTypes = {
  book: PropTypes.exact({
    title: PropTypes.string,
    image: PropTypes.string,
    genre: PropTypes.string,
    publisher: PropTypes.string,
    author: PropTypes.string,
    year: PropTypes.number,
  }).isRequired
}
