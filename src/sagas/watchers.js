import { all, takeLatest } from "redux-saga/effects"
import { HAS_LOGGED_IN, HAS_LOGGED_OUT } from "../actions/user"

export function* watchUser() {
  yield all([
    takeLatest(HAS_LOGGED_IN, console.log("has logged in")),
    takeLatest(HAS_LOGGED_OUT, console.log("has logged out"))
  ])
}