import { equals } from 'ramda'

const getHash = c => c.title + c.desc + c.price + ''

export const hasChange = (old, curr) => {
    let firstHash = getHash(old)
    let secondHash = getHash(curr)
    return equals(firstHash, secondHash)
}