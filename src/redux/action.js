export const setCurrentUser = user =>
({

type :'SET_CURRENT_USER' ,
payload: user

})
export const CartActionType = () =>( {

    type : 'TOGGLE_CART_HIDDEN'

})

export const addItem = (item) =>( {

    type : 'ADD_ITEM',
    payload :item

})


export const clearItem = (item) =>( {

    type : 'CLEAR_ITEM',
    payload :item

})

export const decreseItem = (item) =>( {

    type : 'DEC_ITEM',
    payload :item

})