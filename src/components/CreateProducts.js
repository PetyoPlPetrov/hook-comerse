import React, {
    useState,
    useCallback
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
import { useProducts } from '../hooks/'
import { createProduct } from '../reducers/actionCreator'

function CreateProducts() {
    const [{ title, desc, price, successful }, setState] = useState({ title: '', desc: '', price: '' })
    const [, dispatch] = useProducts()
    const mergeState = next => setState((prev) => ({ ...prev, ...next }))
    const onSubmit = useCallback(() => {
        dispatch(createProduct({ title, desc, price }))
        mergeState({ successful: true })

    }, [title, desc, price])
    return <Container>
        <h1>CreateProducts</h1>
        <Form>
            <FormGroup>
                <Label for="exampleEmail">Title</Label>
                <Input onChange={({ target: { value: title } }) => mergeState({ title })} value={title} type="text"
                       name="title" id="title" placeholder="Enter product title"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Description</Label>
                <Input onChange={({ target: { value: desc } }) => mergeState({ desc })} value={desc} type="text"
                       name="desc" id="desc" placeholder="Enter product description"/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Price</Label>
                <Input onChange={({ target: { value: price } }) => mergeState({ price })} value={price} on type="text"
                       name="price" id="price" placeholder="Enter product price"/>
            </FormGroup>
        </Form>
        <Button color='primary' disabled={!(title && desc && price)} onClick={onSubmit}>Create product</Button>
        {successful && <Alert color="success">
            Successful creation of product
        </Alert>}
    </Container>

}

export default CreateProducts