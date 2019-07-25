import {
    compose,
    equals,
    filter,
    head
} from 'ramda'

const getHash = c => c.title + c.desc + c.price + ''

export const hasChange = (old, curr) => {
    let firstHash = getHash(old)
    let secondHash = getHash(curr)
    return equals(firstHash, secondHash)
}

const findById = id => e => e.id === id
export const findProductToEdit = (id,products) =>compose(head, filter(findById(id)))(products)
