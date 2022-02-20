import {
  setFirstTerm,
  setResult,
} from '../redux/features/calculator/calculatorSlice';

const operate = (operator, firstTerm, secondTerm, byOperator, dispatch) => {
  switch (operator) {
    case '+':
      byOperator && dispatch(setFirstTerm(`${firstTerm + secondTerm}`));
      !byOperator && dispatch(setResult(`${firstTerm + secondTerm}`));
      break;
    case '-':
      byOperator && dispatch(setFirstTerm(`${firstTerm - secondTerm}`));
      !byOperator && dispatch(setResult(`${firstTerm - secondTerm}`));
      break;
    case '×':
      byOperator && dispatch(setFirstTerm(`${firstTerm * secondTerm}`));
      !byOperator && dispatch(setResult(`${firstTerm * secondTerm}`));
      break;
    case '÷':
      byOperator &&
        dispatch(
          setFirstTerm(
            `${parseFloat(firstTerm / secondTerm)
              .toFixed(2)
              .replace(/[.,]00$/, '')}`
          )
        );
      !byOperator &&
        dispatch(
          setResult(
            `${parseFloat(firstTerm / secondTerm)
              .toFixed(2)
              .replace(/[.,]00$/, '')}`
          )
        );
      break;

    default:
      break;
  }
};

export default operate;
