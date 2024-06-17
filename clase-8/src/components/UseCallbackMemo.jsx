import { useState, useCallback, useMemo } from 'react';

const HeavyCalculationComponent = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  
  // Función costosa que queremos memoizar
  const expensiveCalculation = (input) => {
    console.log('Realizando cálculo costoso...');
    // Supongamos que esta función realiza un cálculo costoso basado en la entrada
    return input.toUpperCase();
  };
  
  // Memoizamos la función costosa para evitar recálculos innecesarios
  const memoizedExpensiveCalculation = useMemo(() => expensiveCalculation(inputValue), [inputValue]);
  
  // Definimos una función de manejo de evento utilizando useCallback
  const handleChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);
  
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Texto ingresado: {inputValue}</p>
      <p>Resultado del cálculo costoso: {memoizedExpensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar contador: {count}</button>
    </div>
  );
};

export default HeavyCalculationComponent;
