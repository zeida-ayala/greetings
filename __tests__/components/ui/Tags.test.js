
import Tags from '../../../src/components/ui/Tags'
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

const { shallow, mount } = Enzyme

jest.mock('../../../src/components/ui/Tag', () =>
    ({tag, greeting}) =>
        <div className="mockTag">
        </div>
)

describe("<Tags> UI Component", () => {
    afterAll(() => jest.resetAllMocks())

    describe("Rendering UI", () => {
        it("Defaults properties correctly", () => {
            expect(mount(<Tags />).find("div.mockTag").length).toBe(0)
        })

        it("Renders properties correctly", () => {
            expect(mount(<Tags names={["name1", "name2"]}/>).find("div.mockTag").length).toBe(2)
        })
    })
})