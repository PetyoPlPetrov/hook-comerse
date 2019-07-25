import {
    useEffect,
    useReducer
} from 'react'
import { productReducer } from '../reducers/'

export const useProducts = () => {
    const initialProducts = JSON.parse(window.localStorage.getItem('products')) || []
    const [products, dispatch] = useReducer(productReducer, initialProducts)

    useEffect(() => {
        window.localStorage.setItem('products', JSON.stringify(products))
    }, [products])

    return [products, dispatch]
}

export const useAlert = ({ mergeState, successful, title, desc, price }) => {
    useEffect(() => {
        if (successful) {
            setTimeout(() => mergeState({ successful: false, old: { title, desc, price } }), 2000)
        }
    }, [successful])
}