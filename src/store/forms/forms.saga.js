import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import api from '../../api';
import { SUBMIT_FORM_TO_SERVER_START, submitFormFailure, submitFormSuccess } from './forms.actions';

// const URL = 'http://web-server.oleg-dev.com:6565/send-email';

// const emailsend = async (url, data) => {
//   const resp = await axios.post(url, data);
//   return request;
// }
function* sendMessageSaga({payload}) {
 try {
  console.log('saga paylosd: ', payload);
  const { data, status } = yield call(api.sendemail, payload);
  if (status === 200) {
    yield console.log('server response', data)
    yield put(submitFormSuccess('Successs'))
  } else {
    put(submitFormFailure('Not good'))
  }
 } catch(err) {
   console.log('error in saga sendmessage', err.message);
   yield put(submitFormFailure(err));
 }
}

export default [
  takeLatest(SUBMIT_FORM_TO_SERVER_START, sendMessageSaga),
];
