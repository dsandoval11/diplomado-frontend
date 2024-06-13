import './Cover.css';

export const Cover = ({info , onBookClick }) => {

  const id = info.key.substring(7);

  return (
    <div className="cover" onClick={() => onBookClick(id)}>
      <img src={info.img} alt="" />
      <b>{info.book}</b>
      <span className='author'>{info.author}</span>
    </div>
  )
}
