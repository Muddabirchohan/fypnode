import {FETCH_PRODUCTS ,GET_SINGLE_PRODUCT,ADD_TO_CART} from './types';
// import Posts from '../Components/Posts';
import { bindActionCreators } from 'redux';

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


export const addToCart = (product, _id) => dispatch => {
    // console.log(product)
    dispatch({
        type: ADD_TO_CART,
        mycart: product,
        // addedId: _id
    })
}



// export const removeFromCart = (obj) => dispatch => {
//     dispatch({
//         type: REMOVE_POST,
//         object: obj
//     })
// }


// export const getQuantity = (obj) => dispatch => {

//     dispatch({
//         type: GET_QUANTITY,
//         myid: obj._id,
//         myquantity: obj.price
//     })
// }


// export const userAuthentication = (useremail, upassword) => dispatch => {

//     dispatch({
//         type: USER_AUTHENTICATION,
//         email: useremail,
//         password: upassword
//     })
// }


// export const createPosts = (postData) => dispatch => {
//     fetch('https://greencommunitylaundry.herokuapp.com/api/auth/local', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(postData)
//     })
//         .then(res => res.json())
//         .then(post => dispatch({
//             type: NEW_POST,
//             payload: post
//         }))
// }


