import { Provider } from 'react-redux'
import { UpdateNames } from '../../../src/components/containers'
const {mount } = Enzyme

jest.mock('../../../src/components/ui/MultiLineText')

describe("<MultiLineText> container", () => {
    let wrapper
    const _store = {
        dispatch: jest.fn(),
        subscribe: jest.fn(),
        getState: jest.fn(() =>
            ({
                names: ["name1", "name2"],
                greeting: ""
            })
        )
    }

    beforeAll(() => wrapper = mount(
        <Provider store={_store}>
            <UpdateNames />
        </Provider>
    ))

    afterEach(() => jest.resetAllMocks())

    it("renders two names", () => {
        expect(wrapper
            .find('MultiLineText')
            .props()
            .names
            .length
        ).toBe(2)
    })
    
    it("dispatches a onChange event", () => {
        wrapper.find('MultiLineText')
            .props()
            .onChange({ target: { value: "name1\nname2\nname3"}})

        expect(_store.dispatch.mock.calls[0][0])
            .toEqual({
                names: ["name1", "name2", "name3"],
                type: 'UPDATE_NAMES'
            })
    })
})