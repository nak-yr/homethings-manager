import { ADD, EDIT, REMOVE } from '../actions'

const initialState = { 
    thingsList: [ { name:'foo', location: 'bar', memo:'baz' } ]
}

export default (state = initialState, action) => {
    const { type, newName, newLocation, newMemo, removeThing} = action
    switch (type) {
        case ADD:
            return ({ thingsList: state.thingsList.concat({
                name: newName.value,
                location: newLocation.value,
                memo: newMemo.value
            })})
        case EDIT:
            return state
        case REMOVE:
            return ({ thingsList: state.thingsList.filter(list => list !== removeThing) })
        default:
            return state
    }
}