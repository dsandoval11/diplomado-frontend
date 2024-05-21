import './Cover.css';

export const Cover = ({info , onBookClick }) => {

  return (
    <div className="cover" onClick={() => onBookClick(info.key)}>
      <img src={info.img} alt="" />
      <b>{info.book}</b>
      <span className='author'>{info.author}</span>
    </div>
  )
}
