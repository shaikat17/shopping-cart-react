const reducer = (state, action) => {
  if (action.type === "Clear_Cart") {
    // console.log('clean cart')
    return { ...state, cart: [] };
  }
  if (action.type === "Remove") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }

  if (action.type === "Increase") {
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === "Decrease") {
    const tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === "Get_Total") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        let { price, amount } = cartItem;

        cartTotal.total += price * amount;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );

    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }

  if (action.type === "Loading") {
    return { ...state, loading: true };
  }

    if (action.type === "Display_Items") {
      return { ...state, cart: action.payload, loading: false };
    }

    if (action.type === "TOGGLE_AMOUNT") {
      let tempCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.type === "inc") {
              return { ...cartItem, amount: cartItem.amount + 1 };
            }
            if (action.payload.type === "dec") {
              return { ...cartItem, amount: cartItem.amount - 1 };
            }
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return { ...state, cart: tempCart };
    }

  throw new Error("no matching action type");
};

export default reducer;
