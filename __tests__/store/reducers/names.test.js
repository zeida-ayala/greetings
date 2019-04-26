import Constants from '../../../src/constants'
import {names} from '../../../src/store/reducers'
import deepFreeze from 'deep-freeze'

describe("names reducer",() => {

    it("UPDATE_NAMES success", () => {
        const state = {};
        const action = {
            type: Constants.UPDATE_NAMES,
            names: ["name1", "name2"]
        }
        deepFreeze(state)
        deepFreeze(action)
        expect(names(state, action)).toEqual(action.names);
    })

    it("defaults to UPDATE_NAMES", () =>
        expect(names()).toEqual([]))
})