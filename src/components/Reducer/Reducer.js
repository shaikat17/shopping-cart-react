const reducer = (state, action) => {
    if (action.type === 'Clear_Cart') {
        // console.log('clean cart')
        return {...state, cart: []}
    }
    if (action.type === "Remove") {
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
      };
    }

    return state
}

export default reducer