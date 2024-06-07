import { useParams } from 'react-router-dom';

export const BookDetailPage = () => {

  const { id } = useParams();

  console.log(id);

  return (
    <div>BookDetailPage</div>
  )
}
