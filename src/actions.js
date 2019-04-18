import C from './constants'
import { v4 } from 'uuid'

export const updateNames = (names) => {
    return ({
        type: C.UPDATE_NAMES,
        names: names.split("\n").filter(n => n.trim().)
    })
}

export const changeLanguage = greeting =>
    ({
        type: C.UPDATE_GREETING,
        greeting: greeting
    })