import C from './constants'
export const updateNames = (names) => {
    return ({
        type: C.UPDATE_NAMES,
        names: names
    })
}

export const changeLanguage = greeting =>
    ({
        type: C.UPDATE_GREETING,
        greeting: greeting
    })