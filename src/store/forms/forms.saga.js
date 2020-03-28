import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import api from '../../api';
import { SUBMIT_FORM_TO_SERVER_START, submitFormFailure, submitFormSuccess } from './forms.actions';

export function* sendMessageSaga(payload) {
 try {
  const result = yield call(api.sendemail(payload));
  yield put(submitFormSuccess(result))
 } catch(err) {
   console.log('error in saga sendmessage', err);
   yield put(submitFormFailure(err));
 }
}

export default takeLatest(SUBMIT_FORM_TO_SERVER_START, sendMessageSaga);
