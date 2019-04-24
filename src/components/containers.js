import { connect } from 'react-redux'
import MultiLineText from './ui/MultiLineText'
import Dropdown from './ui/Dropdown'
 import Tags from './ui/Tags'
import {updateNames, changeLanguage} from '../actions'

export const UpdateNames = connect(
    state =>
        ({
            names: state.names
        }),
    dispatch =>
        ({
            onChange(event) {
                const names = event.target.value.split('\n').filter(n => n.trim())
                dispatch(updateNames(names))
            }
        })
)(MultiLineText)

export const UpdateLanguage = connect(
    state =>
        ({
            greeting: state.greeting
        }),
    dispatch =>
        ({
            onSelect(event) {
                dispatch(changeLanguage(event.target.value))
            }
        })
)(Dropdown)

export const UpdateTags= connect(
    state =>
        ({
            names: state.names,
            greeting: state.greeting
        })
)(Tags)
