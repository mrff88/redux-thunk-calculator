import { useSelector } from 'react-redux';
import {
  selectFirstTerm,
  selectSecondTerm,
  selectOperator,
  selectDisplayResult,
} from '../redux/features/calculator/calculatorSlice';

const Display = () => {
  const firstTerm = useSelector(selectFirstTerm);
  const secondTerm = useSelector(selectSecondTerm);
  const operator = useSelector(selectOperator);
  const displayResult = useSelector(selectDisplayResult);

  return (
    <div className="calculator__display">
      <span className="display__operation">{`${firstTerm} ${operator} ${secondTerm}`}</span>
      <span className="display__result">{displayResult || '0'}</span>
    </div>
  );
};

export default Display;
