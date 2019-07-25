import React, {
    useEffect,
    useReducer,
    useState
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

export const useAlert = (show)=>{
    const [{visible}, setVisibility] = useState({visible:false})
    if(show && !visible){
        setVisibility({visible:true})
        setTimeout(()=>{
            console.log('hide it')
            setVisibility({visible:false})
        },2000)
    }


    return visible
}