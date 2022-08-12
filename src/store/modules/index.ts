import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import user from "./user/user";

// 루트 리듀서
// const rootReducer = combineReducers({ user });

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    user,
  })(state, action);
};
export default rootReducer;

// 루트 리듀서의 반환값를 유추해줍니다
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.
export type RootState = ReturnType<typeof rootReducer>;
