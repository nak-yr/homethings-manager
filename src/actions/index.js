export const ADD = 'ADD'
export const EDIT = 'EDIT'
export const REMOVE = 'REMOVE'
export const CLOSE = `CLOSE`

export const add = ( nameElement, locationElement, memoElement ) => ({
    type: ADD,
    newName: nameElement,
    newLocation: locationElement,
    newMemo: memoElement
})

export const edit = () => ({
    type: EDIT
})

export const remove = ( thing ) => ({
    type: REMOVE,
    removeThing: thing
})

export const close = () => ({
    type: CLOSE
})