import {
    useEffect,
    useReducer
} from 'react'
import { mainReducer } from '../reducers/'

export const useProducts = () => {
    const initialProducts = JSON.parse(window.localStorage.getItem('products')) || []
    const [products, dispatch] = useReducer(mainReducer, initialProducts)

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