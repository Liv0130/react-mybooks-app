import { Action, createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
import { LoginReqType } from "../../types";
import UserService from "../../services/UserService";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const prefix = "my-books/auth";

// const {액션생성함수} = createActions("액션 이룸", "액션 이름", {액션 앞에 붙을 말})
export const {pending, success, fail} = createActions(
  "PENDING", 
  "SUCCESS", 
  "FAIL", 
  {prefix}
  );

// 아래 그냥 액션을 작성해버리면 밑에 빨간 밑줄들이 생기는데 이해를 못해서 발생하는 것으로 제대로 인자들의 타입을 정의해줘야함 그래서 <>안에 작성해줌
const reducer = handleActions<AuthState, string>({
  // 처음에 들어가는 인자는 객체데이터로 위에 작성한 액션들의 타입이 들어가게 됨
  PENDING: (state) => ({
    // pending은 state를 받아서 state를 출력하고 loading을 true로 바꾸며 error는 null임
    ...state,
    loading: true,
    error: null
  }),
  SUCCESS: (state, action) => ({
    // 성공했을 경우에는 action의 payload로 token이 들어오기 때문에 action을 인자로 받아옴
    token: action.payload,
    // token의 타입은 string
    loading: false,
    error: null
  }),
  FAIL: (state, action:any) => ({
    // pending은 state를 받아서 state를 출력하고 loading을 true로 바꾸며 error는 null임
    ...state,
    loading: false,
    error: action.payload
    // error의 타입은 error
  }),
}, initialState, { prefix });

export default reducer;

// saga
export const { login, logout } = createActions("LOGIN", "LOGOUT", { prefix });

function* loginSaga(action: Action<LoginReqType>) {
  try {
    yield put(pending());
    const token:string = yield call(UserService.login, action.payload);
    // localstorage
    yield put(success(token));
    // push
} catch (error: any) {
  yield put(fail(new Error(error?.response?.data?.error || 'UNKNOWN_ERROR')))
}
}
function* logoutSaga() {

}
export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga);
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}