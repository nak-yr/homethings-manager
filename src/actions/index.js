import axios from "axios";

export const ADD = "ADD";
export const EDIT = "EDIT";
export const REMOVE = "REMOVE";
export const CLOSE = `CLOSE`;
export const READ_THINGS = `READ_THINGS`;
export const CREATE_THINGS = "CREATE_THINGS";
export const REMOVE_THINGS = "REMOVE_THINGS";

const ROOT_URL = "https://nk-htmapi.herokuapp.com/api/";

//axios.defaults.withCredentials = false

//Actionの定義では、使用する要素を定義していく
//ここで定義した要素は、reducerに「action」として纏めてインポートされる

//ADDは新規追加なので、カードに必要な要素を引数にとる
export const add = (thing) => ({
  type: ADD,
  addThing: thing,
});

export const edit = () => ({
  type: EDIT,
});

//REMOVEでは削除する要素を引数に取る
export const remove = (thing) => ({
  type: REMOVE,
  removeThing: thing,
});

export const close = () => ({
  type: CLOSE,
});

export const readThings = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}`);
  //console.log(response.data)
  dispatch({ type: READ_THINGS, response });
};

export const createThings = (thing) => async (dispatch) => {
  const params = {
    name: thing.name,
    location: thing.location,
    memo: thing.memo,
    num: thing.num,
  };
  const response = await axios.post(`${ROOT_URL}`, params).then(alert("リストに追加しました"));
  console.log(response);
  dispatch({ type: CREATE_THINGS, response });
};

export const removeThings = (id) => async (dispatch) => {
  const strId = id.toString();
  const url = `${ROOT_URL}` + strId;
  const response = await axios.delete(url).then(alert("リストから削除しました"));
  dispatch({ type: REMOVE_THINGS, response });
};
