import React, {
    useEffect,
    useReducer,
} from 'react'
import { productReducer } from '../reducers/'

export const useProducts = () => {
    const initialProducts = JSON.parse(window.localStorage.getItem('products'))|| []
    const [products, dispatch] = useReducer(productReducer, initialProducts)

    useEffect(()=>{
        window.localStorage.setItem('products',JSON.stringify(products))
    },[products])

    return [products, dispatch]
}