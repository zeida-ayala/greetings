import MultiLineText from '../../../src/components/ui/MultiLineText'
const { shallow} = Enzyme

describe ("<MultiLineText UI Component/>", () => {

    describe("Rendering the UI", () => {
        it("renders default value", () =>
        expect(shallow(<MultiLineText names={[]}/>).find('textarea.multiline-text').length)
            .toBe(1))
    })

    it("OnChange event dont cause error", () => {
        shallow(<MultiLineText names={[]} />).find('textarea.multiline-text').simulate('change')
    })

    it("invokes onChange", () => {
        const _change = jest.fn()
        shallow(<MultiLineText names={[]} onChange={_change} />)
            .find('textarea.multiline-text')
            .simulate('change')
        expect(_change).toBeCalled()
    })
})
