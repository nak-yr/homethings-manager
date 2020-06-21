import { ADD, REMOVE, READ_THINGS, CREATE_THINGS, REMOVE_THINGS } from "../actions";

//reducerではactionsでプロトタイピングした動作の内容を記述する
//初期値はinitialStateとして定義
const initialState = {
  thingsList: [{ name: "foo", location: "bar", memo: "baz", num: 1 }],
};

export default (state = initialState, action) => {
  //必要な変数をactionから割り当て
  const { type, addThing, removeThing } = action;
  //actionの種類によって動作を分ける
  switch (type) {
    //ADDなら、フォームの入力値であるaddThingをthingsListに追加する
    case ADD:
      return { thingsList: state.thingsList.concat(addThing) };
    //REMOVEなら、削除するリストであるremoveThing(引数として渡されている)をfilterする
    case REMOVE:
      return { thingsList: state.thingsList.filter((list) => list !== removeThing) };
    case READ_THINGS:
      //console.log(_.mapKeys(action.response.data, '_id'))
      return { thingsList: action.response.data };
    case CREATE_THINGS:
      return { thingsList: action.response.data };
    case REMOVE_THINGS:
      return state;
    //どれにも該当しないときはstateを返す
    default:
      return state;
  }
};
