import {productReducer} from './productReducer'
import {anotherReducer} from './anotherReducer'

const combineReducer = [productReducer, anotherReducer]

export const mainReducer = (state, action) => combineReducer
    .reduce((state, reducer) => reducer(state, action), state)
