import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import * as auth from "../app/modules/Auth/_redux/authRedux";
import parameterReducer from "../app/pages/paramater/paramaterSlice";

export const rootReducer = combineReducers({
  auth: auth.reducer,
  parameter: parameterReducer,

});

export function* rootSaga() {
  yield all([auth.saga()]);
}
