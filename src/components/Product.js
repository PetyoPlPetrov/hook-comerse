import React from 'react'
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
} from 'reactstrap'
import { Link } from 'react-router-dom'

function Product({ title, desc, price, id, editMode, ...rest }) {
    return <>
        <Card className='product'  {...rest}>
            <CardBody>
                <CardTitle>{<h3>{title}</h3>}</CardTitle>
                <CardText>{desc}</CardText>
                <CardText>{`Price: ${price}$`}</CardText>
                <CardText>{`Created at ${rest.created}`}</CardText>
                {editMode && <Link to={`/products/edit/${id}`}>Edit {title}</Link>}
            </CardBody>
        </Card>
    </>


}

export default Product