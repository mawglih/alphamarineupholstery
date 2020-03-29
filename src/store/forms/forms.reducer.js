import {
  SUBMIT_FORM_TO_SERVER_SUCCESS,
} from './forms.actions';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, { type, payload} ) => {
  switch(type) {
    case SUBMIT_FORM_TO_SERVER_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    default:
    return state;
  }
};
