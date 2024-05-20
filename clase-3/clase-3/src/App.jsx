import { Cover } from './components/Cover/Cover';
import { useFetch } from './hook/useFetch';


function App() {

  const result = useFetch();
  const { loading, data } = result;

  const { reading_log_entries: books } = data;

  console.log(data);

  const book2 = {
    img: 'https://covers.openlibrary.org/b/id/240727-S.jpg',
    book: 'Name',
    author: 'Autho'
  }

  return (
    <>
      {loading ?
        <h1>Cargando</h1> :
        books.map((book, index) => {
          return <Cover key={index} {...book2}/>
        })
      }
      
    </>
  )
}

export default App
