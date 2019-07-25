import moment from 'moment'
import {
    filter,
    reject,
    compose,
    head
} from 'ramda'
import {
    ADD,
    EDIT,
    DATE_FORMAT
} from '../constants/'

const findById = id => e => e.id === id

export const productReducer = (state, {type, value}) => {
    switch (type) {
        case ADD: {
            const created = moment().format(DATE_FORMAT)
            const nextId = state.reduce((acc, curr) => Math.max(acc, curr.id), 0)
            const newProduct = {...value, created, id: nextId + 1}
            return state.concat(newProduct)
        }
        case EDIT: {
            let id = value.id
            let old = compose(head, filter(findById(id)))(state)
            const editedProduct = {...old, ...value}
            let removed = reject(findById(id))(state)
            return removed.concat(editedProduct)
        }
        default: {
            return state
        }
    }
}