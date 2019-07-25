import React from 'react'
import {
    Switch,
    Route,
    Link,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import ViewProducts from './components/ViewProducts'
import CreateProducts from './components/CreateProducts'
import EditProduct from './components/EditProduct'

function App() {

    return (
        <div className="App">
            <h1>Hooks Commerce</h1>
            <h4>Hook up for your products</h4>
            <nav>
                <ul>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/create">Create products</Link></li>
                    <li><Link to="/edit">Edit Products</Link></li>
                </ul>
            </nav>

            <Switch>
                <Route exact path="/" component={ViewProducts}/>
                <Route path="/create" component={CreateProducts}/>
                <Route path="/edit" render={(props) => <ViewProducts {...props} editMode/>}/>
                <Route path="/products/edit/:id" component={EditProduct}/>
            </Switch>
        </div>
    )
}

export default App
