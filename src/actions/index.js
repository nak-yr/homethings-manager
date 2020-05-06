export const ADD = 'ADD'
export const EDIT = 'EDIT'
export const REMOVE = 'REMOVE'
export const CLOSE = `CLOSE`
export const LOAD = `LOAD`

export const add = () => ({
    type: ADD
})

export const edit = () => ({
    type: EDIT
})

export const remove = ( thing ) => ({
    type: REMOVE,
    thing
})

export const close = () => ({
    type: CLOSE
})

export const load = () => ({
    type: LOAD
})