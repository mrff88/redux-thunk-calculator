import { useDispatch } from 'react-redux';
import {
  calculateResult,
  resetCalculator,
  setTerm,
  verifySetOperator,
} from '../redux/features/calculator/calculatorSlice';

const Pad = () => {
  const dispatch = useDispatch();

  const handleNumberButtonClick = (e) => {
    dispatch(setTerm(e.target.value));
  };
  const handleOperatorButtonClick = (e) => {
    dispatch(verifySetOperator(e.target.value));
  };
  const HandleGetResultClick = () => {
    dispatch(calculateResult());
  };
  const HandleClearClick = () => {
    dispatch(resetCalculator());
  };

  return (
    <div className="calculator__pad">
      {/* first row */}
      <button
        value={'7'}
        onClick={handleNumberButtonClick}
        className="pad__button"
      >
        7
      </button>
      <button
        value={'8'}
        onClick={handleNumberButtonClick}
        className="pad__button"
      >
        8
      </button>
      <button
        value={'9'}
        onClick={handleNumberButtonClick}
        className="pad__button"
      >
        9
      </button>
      <button
        value={'÷'}
        onClick={handleOperatorButtonClick}
        className="pad__button"
      >
        ÷
      </button>
      {/* second row */}
      <button
        value={'4'}
        onClick={handleNumberButtonClick}
        className="pad__button"
      >
        4
      </button>
      <button
        value={'5'}
        onClick={handleNumberButtonClick}
        className="pad__button"
      >
        5
      </button>
      <button
        value={'6'}
        onClick={handleNumberButtonClick}
        className="pad__button"
      >
        6
      </button>
      <button
        value={'×'}
        onClick={handleOperatorButtonClick}
        className="pad__button"
      >
        ×
      </button>
      {/* third row */}
      <button
        value={'1'}
        onClick={handleNumberButtonClick}
        className="pad__button"
      >
        1
      </button>
      <button
        value={'2'}
        onClick={handleNumberButtonClick}
        className="pad__button"
      >
        2
      </button>
      <button
        value={'3'}
        onClick={handleNumberButtonClick}
        className="pad__button"
      >
        3
      </button>
      <button
        value={'-'}
        onClick={handleOperatorButtonClick}
        className="pad__button"
      >
        -
      </button>
      {/* fourth row */}
      <button onClick={HandleClearClick} className="pad__button">
        C
      </button>
      <button
        value={'0'}
        onClick={handleNumberButtonClick}
        className="pad__button"
      >
        0
      </button>
      <button onClick={HandleGetResultClick} className="pad__button">
        =
      </button>
      <button
        value={'+'}
        onClick={handleOperatorButtonClick}
        className="pad__button"
      >
        +
      </button>
    </div>
  );
};

export default Pad;
