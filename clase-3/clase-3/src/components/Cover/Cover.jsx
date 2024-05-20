import './Cover.css';

export const Cover = ({img, book, author }) => {
  
  return (
    <div className="cover">
      <img src={img} alt="" />
      <span>{book}</span>
      <span>{author}</span>
    </div>
  )
}
