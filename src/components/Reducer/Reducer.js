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

    if (action.type === 'Increase') {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return {...cartItem, amount: cartItem.amount + 1}
        }
        return cartItem
      })
      return {...state, cart: tempCart}
    }

    if (action.type === "Decrease") {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      }).filter((cartItem) => cartItem.amount !== 0)
      return { ...state, cart: tempCart };
    }

    return state
}

export default reducer