import {ADD, EDIT} from "../constants";

export const createProduct = (value)=>({type: ADD,value})
export const editProduct = (value)=>({type: EDIT,value})