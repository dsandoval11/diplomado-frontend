import { Cover } from './components/Cover/Cover';
import { useFetch } from './hook/useFetch';
import './App.css';

const serializeBook = ({ work }) => {
  return {
    img: `https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`,
    book: work.title,
    author: work.author_names.join(', '),
    key: work.key
  }
}

function App() {
  const result = useFetch();
  const { loading, data } = result;
  const { reading_log_entries: books } = data;

  const onBookClick = (id) => {
    console.log(id);
  }

  return (
    <>
      {loading ?
        <h1>Cargando</h1> :
        <div className='book-list'>
          {books.map((book, index) => {
            return <Cover key={index} info={serializeBook(book)} onBookClick={onBookClick}/>
          })}
        </div>
      }
    </>
  )
}

export default App
