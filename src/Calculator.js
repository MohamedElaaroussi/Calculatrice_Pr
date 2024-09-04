import React, { useState, useCallback } from 'react';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleClick = useCallback((value) => {
    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clear();
    } else {
      setInput((prevInput) => prevInput + value);
    }
  }, []);

  const calculate = useCallback(() => {
    if (input.trim() === '') return;

    try {
      const resultValue = eval(input);
      setResult(resultValue);
      setInput(String(resultValue));
    } catch (error) {
      setResult('Erreur');
      setInput('');
    }
  }, [input]);

  const clear = useCallback(() => {
    setInput('');
    setResult(0);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="calculator font-mono">
        <div className="display">
          <span>{input.length > 0 ? input : result}</span>
        </div>
        <div className="buttons">
          <button className="btn" onClick={() => handleClick('7')}>7</button>
          <button className="btn" onClick={() => handleClick('8')}>8</button>
          <button className="btn" onClick={() => handleClick('9')}>9</button>
          <button className="btn operator" onClick={() => handleClick('/')}>/</button>
          <button className="btn" onClick={() => handleClick('4')}>4</button>
          <button className="btn" onClick={() => handleClick('5')}>5</button>
          <button className="btn" onClick={() => handleClick('6')}>6</button>
          <button className="btn operator" onClick={() => handleClick('*')}>*</button>
          <button className="btn" onClick={() => handleClick('1')}>1</button>
          <button className="btn" onClick={() => handleClick('2')}>2</button>
          <button className="btn" onClick={() => handleClick('3')}>3</button>
          <button className="btn operator" onClick={() => handleClick('-')}>-</button>
          <button className="btn" onClick={() => handleClick('0')}>0</button>
          <button className="btn" onClick={() => handleClick('.')}>.</button>
          <button className="btn operator" onClick={calculate}>=</button>
          <button className="btn operator" onClick={clear}>C</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;