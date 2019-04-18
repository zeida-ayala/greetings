import C from '../constants'

export const names = (state = [], action={ type: null }) => {
    switch (action.type) {
        case C.UPDATE_NAMES:
            return action.names
        default :
            return state
    }
}

export const greeting = (state = null, action={ type: null }) => {
    switch (action.type) {
        case C.UPDATE_GREETING :
            return action.greeting
        default:
            return state
    }
}
