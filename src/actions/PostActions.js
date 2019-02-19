import {FETCH_PRODUCTS ,GET_SINGLE_PRODUCT,ADD_TO_CART,REMOVE_FROM_CART} from './types';
// import Posts from '../Components/Posts';

export const fetchproducts = () => dispatch => {
    fetch('http://localhost:7000/products/getproducts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_PRODUCTS,
            payload: posts
        }))
}


export const getSingleProduct = (id) => dispatch => {

    dispatch({
        type: GET_SINGLE_PRODUCT,
        obj: id
    })
}


export const addToCart = (product,id) =>  ({
    // console.log(product)
        type: ADD_TO_CART,
        products: product,
        addedId: id
})



export const removeFromCart = (productID) => ({  
        type: REMOVE_FROM_CART,
        productID: productID
    })



