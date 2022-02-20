import Display from './Display';
import Pad from './Pad';
import './_Calculator.scss';

const Calculator = () => {
  return (
    <div className="container">
      <h1 className="title">Calculadora con Redux</h1>
      <div className="calculator">
        <span className="calculator__brand">CASMIO</span>
        <Display />
        <Pad />
      </div>
    </div>
  );
};

export default Calculator;
