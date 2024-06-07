import './Cover.css';

export const Cover = ({info , onBookClick }) => {

  const bookID = info.key.substring(7);

  return (
    <div className="cover" onClick={() => onBookClick(bookID)}>
      <img src={info.img} alt="" />
      <b>{info.book}</b>
      <span className='author'>{info.author}</span>
    </div>
  )
}
