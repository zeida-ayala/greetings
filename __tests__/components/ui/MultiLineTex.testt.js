import toJSON from 'enzyme-to-json'
import { compose } from 'redux'
import AddColorForm from '../../../src/components/ui/MultiLineText'
import { isTSAnyKeyword } from '@babel/types';

const { shallow, mount } = Enzyme

describe ("<MultiLineText UI Component/>", () => {
    let wrapper

    describe("Rendering the UI", () => {
        it("renders correctly", () => {
            compose(expect, ToJSON, shallow)(<MultiLineText />)
                .toMatchSnapshot()
        })
    })
})
