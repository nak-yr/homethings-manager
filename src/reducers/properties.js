import { ADD, REMOVE, READ_THINGS } from '../actions'

//reducerではactionsでプロトタイピングした動作の内容を記述する
//初期値はinitialStateとして定義
const initialState = { 
    thingsList: [ { name:'foo', location: 'bar', memo:'baz', num:1 } ]
}

export default (state = initialState, action) => {
    //必要な変数をactionから割り当て
    const { type, newName, newLocation, newMemo, newNum, removeThing} = action
    //actionの種類によって動作を分ける
    switch (type) {
        //ADDなら、フォームの入力値であるnewName,newLocation,newMemo,newNumをthingsListに追加する
        case ADD:
            console.log(newNum.value)
            return ({ thingsList: state.thingsList.concat({
                name: newName.value,
                location: newLocation.value,
                memo: newMemo.value,
                num: parseInt(newNum.value, 10),
            })})
        //REMOVEなら、削除するリストであるremoveThing(引数として渡されている)をfilterする
        case REMOVE:
            return ({ thingsList: state.thingsList.filter(list => list !== removeThing) })
        case READ_THINGS:
            return state
        //どれにも該当しないときはstateを返す
        default:
            return state
    }
}