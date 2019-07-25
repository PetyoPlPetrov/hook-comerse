import React, {useCallback} from 'react'
import {
    Container,
    Row
} from 'reactstrap'
import {useProducts} from '../hooks/'
import {createProductsSortedByDate} from "../utils";


function ViewProducts({editMode}) {
    const [products] = useProducts()

    const printProducts = useCallback(
        createProductsSortedByDate(editMode)
        , [products, editMode]
    )

    return <Container>
        {editMode ? <h1>Edit Products</h1> : <h1>View Products</h1>}
        <Row>
            {printProducts(products)}
        </Row>
    </Container>
}

export default ViewProducts