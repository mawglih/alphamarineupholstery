import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
// import products from './products/products.reducer';
import forms from './forms/forms.reducer';

export default combineReducers({
  // products,
  form: FormReducer,
  forms,
});