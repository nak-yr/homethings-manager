import { ADD, EDIT, REMOVE } from '../actions'

const initialState = { thingsList: [], showEdit: false }

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return alert('ADD')
        case EDIT:
            return alert('EDIT')
        case REMOVE:
            return alert('REMOVE')
        default:
            return state
    }
}