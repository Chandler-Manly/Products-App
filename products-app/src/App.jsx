import React from 'react'
import './App.css'
import Home from './screens/Home/Home'
import Products from './screens/Products/Products'
import ProductDetail from './screens/ProductDetail/ProductDetail'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductDetail} />
      </Switch>
    </div>
  )
}

export default App

// what is the difference between exact and switch layouts is it repetitive?
// we want to keep the app.jsx as minimal as possible 
// because it is the parent component in the hierarchy and will always be rendered whenever you go to the website  
// use switch for best practice when laying out routes and exact as well 
// react is a single page application so refer to these as screens from the code perspective: products, product details, product edit screen, product create screen
// whenever building react app ^^ start with the screen look at the design and determine what are the screens
// screens are going to drive everything front and back-end 
// using styled components because it encapsulates 
// what is the difference between .jsx and .js -- vs code knows that we are making a javascript react file --- be explicit here 
// try, catch, throw for axios calls 
// typically take all of axios requests and put them in one file call it an 'axios library'/ service library 
// anytime working with third party cannever trust it so use trycatch
// small, easy to read, and uses full CRUD 
// react is a UI library so think about it from that perspective 
// <> = react fragment use when we have multiple returns one element 
// layout 
// foreach map reduce array 
// what is a higher order function takes an argument or outputs a function 
// callback function 
// software engineering = taking complexity and simplifying it 
// higher order component is a react component that takes in one or more react components 
// props.children (a react feature) is whatever between layout tags??? 
// use NavLink in lieu vs Link styled using a 
// autofocus on search form
// onChange={}