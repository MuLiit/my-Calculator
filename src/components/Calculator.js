import React from 'react';
import './Calculator.css';

function Calculator() {
    const [output, setOutput] =  React.useState('0');

    const appendToOutput = (value) => {
        output === '0' ? setOutput(value) : setOutput(output+value);
    };
    const clearOutput = () => {
        setOutput('0');
    };

    const BackSpace = () => {
        output > 1 ? setOutput(output.slice(0, -1)) : setOutput('0');
    };

    const Calculate1 = (operator) => {
      if (output.includes(operator)) {
        const parts = output.split(operator);
        if (parts.length === 2) {
          if (isNaN(parts[1])) {
            setOutput('无效输入');
          } else {
          setOutput('无效输入');
          }
        }
      }
    }

    const calculate = () => {
        if (output.includes('√')) {
            const num = output.substring(1);
            setOutput(String(Math.sqrt(Number(num))));
        }

        else if (output.includes('/')) {
            const parts = output.split('/');
            if (parts.length === 2) {
              const numerator = parseFloat(parts[0]);
              const denominator = parseFloat(parts[1]);
              if (!isNaN(numerator) && !isNaN(denominator)) {
                if (denominator === 0) {
                  setOutput('除数不能为0');
                } else {
                  setOutput(String(numerator / denominator));
                }
              } else {
                setOutput('无效输入');
              }
            } else {
              setOutput('无效输入');
            }
          }

          else if (output.includes('*')) {
            const parts = output.split('*');
            Calculate1('*');
            if (!output.includes('无效输入')){
              setOutput(String(parts[0] * parts[1]));
            }
          }

          else if (output.includes('-')) {
            const parts = output.split('-');
            Calculate1('*');
            if (!output.includes('无效输入')){
              setOutput(String(parts[0] - parts[1]));
            }
          }
          else if (output.includes('+')) {
            const parts = output.split('+');
            Calculate1('*');
            if (!output.includes('无效输入')){
              setOutput(String(parts[0] + parts[1]));
            }
          }
        else {
            setOutput(String(eval(output)));
        }
    };
    return (
        <div className="container">
            <div className="output" id="output">
                {output}
            </div>
                <button className="buttonOfAD" onClick={clearOutput}>AC</button>
                <button className="buttonOfAD" onClick={BackSpace}>DEL</button>
                <button className="buttonOfOperation" onClick={() => appendToOutput('%')}>%</button>
                <button className="buttonOfOperation" onClick={() => appendToOutput('√')}>√</button>
                <button className="button" onClick={() => appendToOutput('7')}>7</button>
                <button className="button" onClick={() => appendToOutput('8')}>8</button>
                <button className="button" onClick={() => appendToOutput('9')}>9</button>
                <button className="buttonOfOperation" onClick={() => appendToOutput('/')}>/</button>
                <button className="button" onClick={() => appendToOutput('4')}>4</button>
                <button className="button" onClick={() => appendToOutput('5')}>5</button>
                <button className="button" onClick={() => appendToOutput('6')}>6</button>
                <button className="buttonOfOperation" onClick={() => appendToOutput('*')}>*</button>
                <button className="button" onClick={() => appendToOutput('1')}>1</button>
                <button className="button" onClick={() => appendToOutput('2')}>2</button>
                <button className="button" onClick={() => appendToOutput('3')}>3</button>
                <button className="buttonOfOperation" onClick={() => appendToOutput('-')}>-</button>
                <button className="button" onClick={() => appendToOutput('.')}>.</button>
                <button className="button" onClick={() => appendToOutput('0')}>0</button>
                <button className="button equals" onClick={calculate}>=</button>
                <button className="buttonOfOperation" onClick={() => appendToOutput('+')}>+</button>
        </div>
    );
}

export default Calculator;
