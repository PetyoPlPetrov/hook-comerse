import React, {useCallback} from 'react'
import {
    Container,
    Row
} from 'reactstrap'
import {
    compose,
    sortBy,
    map,
    prop
} from 'ramda'
import {useProducts} from '../hooks/'
import Product from './Product'

function ViewProducts({editMode}) {
    const [products] = useProducts()

    const printProducts = useCallback(() => {
        return compose(map(prod => <Product key={prod.id} {...prod}
                                            editMode={editMode}/>), sortBy(prop('created')))(products)
    }, [products, editMode])

    return <Container>
        {editMode ? <h1>Edit Products</h1> : <h1>View Products</h1>}
        <Row>
            {printProducts()}
        </Row>
    </Container>
}

export default ViewProducts