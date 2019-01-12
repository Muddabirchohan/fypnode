import { FETCH_PRODUCTS,GET_SINGLE_PRODUCT,ADD_TO_CART } from '../actions/types';

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

                case GET_SINGLE_PRODUCT:
            console.log(action.obj);
            return {
                ...state,
                description: action.obj
            }

        case ADD_TO_CART:
        console.log("helllo", state.cart)
            return {
                ...state,
                cart: [...state.cart, action.mycart]
                // addedIds: [...state.addedIds, action.mycart],
                // totalPrice: [...state.cartPrices, action.mycart.price],
                // cartCounter: state.cartCounter + 1
            }


        // case REMOVE_POST:
        //     return {
        //         ...state,
        //         cart: state.cart.filter(item => item !== action.object),
        //         cartCounter: state.cartCounter - 1
        //     }

        default:
            return state;
    }
}