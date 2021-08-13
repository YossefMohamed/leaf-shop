

export const CheckCart = (cartItems , newItem ) => {
    const exist = cartItems.find(
        cartitems => cartitems.id === newItem.id
        )

        if(exist){
            return cartItems.map(item =>  
                item.id === newItem.id 
                ? {...item , quantity : item.quantity +1 }
                : item
                )

        }
        return [...cartItems , {...newItem , quantity : 1}]


} 

export const decrease = (cartItems , newItem ) => {
    const exist = cartItems.find(
        cartitems => cartitems.id === newItem.id
       )

        if(exist.quantity === 1){
           return (cartItems.filter(item => item.id !== newItem.id))
        }
        return (cartItems.map(item =>  
            item.id === newItem.id 
            ? {...item , quantity : item.quantity - 1 }
            : item
            )
)

} 