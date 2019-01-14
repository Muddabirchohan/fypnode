import { FETCH_PRODUCTS,GET_SINGLE_PRODUCT,ADD_TO_CART,REMOVE_FROM_CART } from '../actions/types';

const initialState = {

    items: [],
    description: {},
    item: {},
    cart: [],
    quantity: 1,
    addedIds: [],
    itemremoved: [],
    totalPrice: [],
    cartPrices: [],
    cartCounter: 0,
    username: '',
    password: ''

};


export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                items: action.payload
            }
            case ADD_TO_CART:
            console.log("redux" , state.cart);
            return {
                ...state,
                cart: [...state.cart, action.product]
                
            }

                case GET_SINGLE_PRODUCT:
            console.log(action.obj);
            return {
                ...state,
                description: action.obj
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item !== action.object),
                // cartCounter: state.cartCounter - 1
            }

        default:
            return state;
    }
}