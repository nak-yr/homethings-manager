export const ADD = 'ADD'
export const EDIT = 'EDIT'
export const REMOVE = 'REMOVE'
export const CLOSE = `CLOSE`

//Actionの定義では、使用する要素を定義していく
//ここで定義した要素は、reducerに「action」として纏めてインポートされる

//ADDは新規追加なので、カードに必要な要素を引数にとる
export const add = ( name, location, memo, num ) => ({
    type: ADD,
    newName: name,
    newLocation: location,
    newMemo: memo,
    newNum: num
})

export const edit = () => ({
    type: EDIT
})

//REMOVEでは削除する要素を引数に取る
export const remove = ( thing ) => ({
    type: REMOVE,
    removeThing: thing
})

export const close = () => ({
    type: CLOSE
})