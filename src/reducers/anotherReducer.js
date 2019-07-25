import {ADD, EDIT} from "../constants";

export const anotherReducer = (state, {type, value}) => {
    switch (type) {
        case ADD: {
            return state
        }
        case EDIT: {

            console.log('EDIT from second')
            return state
        }
        default: {
            return state
        }
    }
}
