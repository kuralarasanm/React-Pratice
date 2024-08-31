export const totalItem = (cart) => {
    return cart.reduce((sum, product) => sum + product.quantity , 0)
}

export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.quantity * product.price , 0)
}


// const CartReducer = (state, action) => {
//     switch(action.type) {
//         case "Add":
//             return [...state, action.product]

//         case "Remove":
//             return state.filter( p => p.id !== action.id)

//         case "Increase":
//             const IndexI = state.findIndex( p => p.id === action.id)
//             state[IndexI].quantity += 1 
//             return [...state]

//         case "Decrease":
//             const IndexD = state.findIndex( p => p.id === action.id)
//             state[IndexD].quantity -= 1 
//             return [...state]

//         default: 
//             state;
//     }
// }

// export default CartReducer


const CartReducer = (state, action) => {
    switch(action.type) {
        case "Add":
            return [...state, action.product];

        case "Remove":
            return state.filter(p => p.id !== action.id);

        case "Increase":
            const IndexI = state.findIndex(p => p.id === action.id);
            if (IndexI !== -1) {
                const updatedProduct = { ...state[IndexI], quantity: state[IndexI].quantity + 1 };
                return [...state.slice(0, IndexI), updatedProduct, ...state.slice(IndexI + 1)];
            }
            return state;

        case "Decrease":
            const IndexD = state.findIndex(p => p.id === action.id);
            if (IndexD !== -1) {
                const updatedProduct = { ...state[IndexD], quantity: state[IndexD].quantity - 1 };
                return [...state.slice(0, IndexD), updatedProduct, ...state.slice(IndexD + 1)];
            }
            return state;

        default: 
            return state; // Explicitly return the state
    }
}

export default CartReducer;
