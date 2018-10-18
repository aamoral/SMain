import { serverLogin } from '../server';

interface iState {
  name: string;
  loadType: number;
}

enum LoadType {
  SUCCESS = 1, ERROR = 2, LOADING = 3
}

export default {
  namespace: "user",
  state: {
    name: null,
    loadType: LoadType.SUCCESS
  },

  effects: {
    //用户登录
    *login({ payload }: any, { call, put }: any) {
      yield put({ type: "setParams", payload: { loadType: LoadType.LOADING } });
      const data = yield call(serverLogin, payload);

      switch(data.type) {
        case LoadType.ERROR:
          yield put({ type: "setParams", payload: { loadType: LoadType.ERROR } });
          break;
        case LoadType.SUCCESS:
          yield put({ type: "setParams", payload: { name:payload.name, loadType: LoadType.SUCCESS } });
          break;
      }
    }
  },

  reducers: {
    setParams(state: iState, { payload }: any) {
      return {
        ...state,
        ...payload
      };
    }
  }
};
