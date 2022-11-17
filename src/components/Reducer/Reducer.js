const reducer = (state, action) => {
    if (action.type = 'Clear_Cart') {
        return {...state, cart: []}
    }
    return state
}

export default reducer