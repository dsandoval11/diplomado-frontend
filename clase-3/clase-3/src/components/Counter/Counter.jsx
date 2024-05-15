import { useState } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

export const Counter = ({ title }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="title">{ title }</h1>
      <h3>Contador: {count}</h3><br />
      <button className="button" onClick={() => setCount(count + 1)}>+1</button>
    </>
  )
}

Counter.propTypes = {
  title: PropTypes.string.isRequired
}