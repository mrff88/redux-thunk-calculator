import { createSlice } from '@reduxjs/toolkit';
import operate from '../../../utils/operate';

const initialState = {
  firstTerm: '0',
  operator: '',
  secondTerm: '',
  result: '',
  displayResult: '0',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setFirstTerm: (state, { payload: value }) => {
      state.firstTerm = value;
    },
    setOperator: (state, { payload: value }) => {
      state.operator = value;
    },
    setSecondTerm: (state, { payload: value }) => {
      state.secondTerm = value;
    },
    setResult: (state, { payload: value }) => {
      state.result = value;
    },
    setDisplayResult: (state, { payload: value }) => {
      state.displayResult = value;
    },
    resetCalculator: () => {
      return initialState;
    },
  },
});

export const {
  setFirstTerm,
  setOperator,
  setSecondTerm,
  setResult,
  setDisplayResult,
  resetCalculator,
} = calculatorSlice.actions;

// Selectors

export const selectFirstTerm = (state) => state.calculator.firstTerm;
export const selectOperator = (state) => state.calculator.operator;
export const selectSecondTerm = (state) => state.calculator.secondTerm;
export const selectResult = (state) => state.calculator.result;
export const selectDisplayResult = (state) => state.calculator.displayResult;

// Thunks

export const setTerm = (term) => (dispatch, getState) => {
  const operator = selectOperator(getState());
  const firstTerm = selectFirstTerm(getState());
  const secondTerm = selectSecondTerm(getState());
  const result = selectResult(getState());
  // put term first if there is no operator and no result (first operation)
  if (!operator && !result) {
    firstTerm === '0' && dispatch(setFirstTerm(term));
    firstTerm !== '0' && dispatch(setFirstTerm(`${firstTerm}${term}`));
    // put term in second if no result
  } else if (operator && !result) {
    secondTerm === '0' && dispatch(setSecondTerm(term));
    secondTerm !== '0' && dispatch(setSecondTerm(`${secondTerm}${term}`));
    // if operator, second term and result exists, replace first term and erase operator, second term and resukt
  } else if (operator && secondTerm && result) {
    dispatch(setFirstTerm(term));
    dispatch(setOperator(''));
    dispatch(setSecondTerm(''));
    dispatch(setResult(''));
  }
};

export const verifySetOperator = (operator) => (dispatch, getState) => {
  const firstTerm = selectFirstTerm(getState());
  const operatorNow = selectOperator(getState());
  const secondTerm = selectSecondTerm(getState());
  const result = selectResult(getState());
  // first time operating or after clear
  !operatorNow && !secondTerm && !result && dispatch(setOperator(operator));
  // to change operator if second term is not yet sets
  operatorNow &&
    operatorNow !== operator &&
    !secondTerm &&
    dispatch(setOperator(operator));
  // to operate result and continue with operation
  if (operatorNow && secondTerm && !result) {
    operate(
      operatorNow,
      parseFloat(firstTerm),
      parseFloat(secondTerm),
      true,
      dispatch
    );
    dispatch(setOperator(operator));
    dispatch(setSecondTerm(''));
  }
  // to continue operating on the result
  else if (operatorNow && secondTerm && result) {
    dispatch(setFirstTerm(result));
    dispatch(setOperator(operator));
    dispatch(setSecondTerm(''));
    dispatch(setResult(''));
  }
};

export const calculateResult = () => (dispatch, getState) => {
  const operator = selectOperator(getState());
  const firstTerm = parseFloat(selectFirstTerm(getState()));
  const secondTerm = parseFloat(selectSecondTerm(getState()));
  const result = parseFloat(selectResult(getState()));
  if (secondTerm && operator && !result)
    operate(operator, firstTerm, secondTerm, false, dispatch);
};

export default calculatorSlice.reducer;
