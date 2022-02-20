import {
  selectOperator,
  selectResult,
  selectSecondTerm,
  setDisplayResult,
} from '../features/calculator/calculatorSlice';

const displayMiddleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    const value = action.payload;
    const operatorNow = selectOperator(getState());
    const secondTerm = selectSecondTerm(getState());
    const result = selectResult(getState());
    operatorNow &&
      secondTerm &&
      !result &&
      action.type === 'calculator/setFirstTerm' &&
      dispatch(setDisplayResult(value));
    // calculated by equal sign
    action.type === 'calculator/setResult' && dispatch(setDisplayResult(value));
    return next(action);
  };

export default displayMiddleware;
