import storeFactory from '../src/store'
import { updateNames, changeGreeting } from '../src/actions'

describe("Actions Updates", () => {
    let store
    describe("updateNames", () => {
        const names = ["Name1", "Name2"];
        
        beforeEach(() => {
            store = storeFactory({names});
            store.dispatch(updateNames(["Name1", "Name2", "Name3"]))
        })
        afterEach(() => global.localStorage['redux-store'] = false)

        it("should update the names", () =>
            expect(store.getState().names.length).toBe(3))

    })

    describe("updateGreeting", () => {
        const greeting = "Hello";

        beforeEach(() => {
            store = storeFactory({greeting});
            store.dispatch(changeGreeting("Ciao"))
        })
        afterEach(() => global.localStorage['redux-store'] = false)

        it("should update the greeting", () =>
            expect(store.getState().greeting).toBe("Ciao"))

    })
})