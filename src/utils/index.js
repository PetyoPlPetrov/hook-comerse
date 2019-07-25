import React from "react";
import {
    compose,
    equals,
    filter,
    head,
    map,
    prop,
    sortBy
} from 'ramda'
import Product from "../components/Product";

const getHash = c => c.title + c.desc + c.price + ''

export const hasChange = (old, curr) => {
    let firstHash = getHash(old)
    let secondHash = getHash(curr)
    return equals(firstHash, secondHash)
}

const findById = id => e => e.id === id

export const findProductToEdit = (id, products) => compose(head, filter(findById(id)))(products)

const mapProduct = mode => prod => <Product key={prod.id} {...prod} editMode={mode}/>

export const createProductsSortedByDate = mode => compose(map(mapProduct(mode)), sortBy(prop('created')))

