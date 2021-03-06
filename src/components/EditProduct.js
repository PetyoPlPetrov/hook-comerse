import React, {
    useState,
    useCallback,
    useEffect
} from 'react'
import {
    Container,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Alert
} from 'reactstrap'
import {
    compose,
    isEmpty,
    either,
    isNil
} from 'ramda'
import {
    useAlert,
    useProducts
} from '../hooks/'
import {editProduct} from '../reducers/actionCreator'
import {hasChange, findProductToEdit} from '../utils/'

const hasProductToEdit = compose(either(isNil, isEmpty))

function EditProduct(props) {
    const [{title, desc, price, error, disabled, successful, old}, setState] = useState({
        title: '',
        desc: '',
        price: '',
        old: {}
    })
    const [products, dispatch] = useProducts()
    let id = parseInt(props.match.params.id)
    const mergeState = next => setState((prev) => ({...prev, ...next}))

    const fillFieldsWithProductInfo = () => {

        const productToEdit = findProductToEdit(id, products)

        if (!hasProductToEdit(productToEdit)) {
            mergeState({
                title: productToEdit.title,
                desc: productToEdit.desc,
                price: productToEdit.price,
                old: productToEdit
            })
        } else {
            mergeState({disabled: true, error: 'No such product id'})
        }
    }

    useEffect(fillFieldsWithProductInfo, [])

    const onSubmit = useCallback(() => {
        dispatch(editProduct({title, desc, price, id}))
        mergeState({successful: true})
    }, [title, desc, price])

    const change = hasChange(old, {title, desc, price})
    const isDisabled = disabled || change

    useAlert({mergeState, successful, title, desc, price})

    return <Container>
        <h1>Edit a Product</h1>
        <Form>
            <FormGroup>
                <Label>Title</Label>
                <Input onChange={({target: {value: title}}) => mergeState({title})} value={title} type="text"
                       name="title" id="title" placeholder="Enter product title"/>
            </FormGroup>
            <FormGroup>
                <Label>Description</Label>
                <Input onChange={({target: {value: desc}}) => mergeState({desc})} value={desc} type="text"
                       name="desc" id="desc" placeholder="Enter product description"/>
            </FormGroup>
            <FormGroup>
                <Label>Price</Label>
                <Input onChange={({target: {value: price}}) => mergeState({price})} value={price} on type="text"
                       name="price" id="price" placeholder="Enter product price"/>
            </FormGroup>
        </Form>
        <Button disabled={isDisabled} color='primary' onClick={onSubmit}>Edit
            product</Button>
        {disabled && <span>{error}</span>}
        {successful && <Alert color="success">
            Successful edit of product
        </Alert>}
    </Container>

}

export default EditProduct