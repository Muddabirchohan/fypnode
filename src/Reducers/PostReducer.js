import { FETCH_PRODUCTS,GET_SINGLE_PRODUCT,ADD_TO_CART,REMOVE_FROM_CART,DIRECT_BUY } from '../actions/types';

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
    password: '',
    buy: {}

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
                cart: [...state.cart, action.products],
                cartCounter: state.cartCounter+1,
                addedIds: [...state.addedIds,action.addedId]
            }

                case GET_SINGLE_PRODUCT:
            console.log(action.payload);
            return {
                ...state,
                description: action.payload
            }

                 case REMOVE_FROM_CART:

                 {
                    var newCart = state.cart.map(elm =>{
                        if(elm._id !== action.productID){
                            return elm;
                        }
                    });
                    var myids = state.addedIds.map(obj=>{
                       
                        if(obj !== action.productID){
                            return obj;
                        }
                    });
                   
                    newCart = newCart.filter(elm=> elm !== undefined);
                    myids = myids.filter(elm=> elm !== undefined);
                    
                    
                    return {
                    ...state,
                    cart: newCart,
                    addedIds: myids
                }}


                case DIRECT_BUY:
                console.log("number ",action.product);
                return {
                    ...state,
                    buy: action.product
                }

        //      {
        //         var newCart = state.cart.filter(item => item !== action.object),
        //         cartCounter =  state.cartCounter-1
            
        //         newCart = newCart.filter(elm=> elm != undefined);
                
        //         return {
        //         ...state,
        //         cart: newCart,
        //         cartCounter
        //     }
        // }

               default:
            return state;
    }
}