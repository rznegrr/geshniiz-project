import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit"

const initialCartState = {
    item: [],
    quantity: 0,
    totalAmount: 0
}

const shopCartSlice = createSlice({
    name: 'shopCart',
    initialState: initialCartState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.item.find(item => item.id === newItem.id)
            state.quantity++
            if (!existingItem) {
                state.item.push({
                    key: newItem.id,
                    id: newItem.id,
                    name: newItem.name,
                    image: newItem.image,
                    price: newItem.price,
                    detail: newItem.detail,
                    calcPrice: newItem.calcPrice,
                    quantity: 1
                })
            } else {
                existingItem.quantity++
            }

            state.totalAmount += newItem.calcPrice 
        },
        removeFromCart(state, action) {
            const id = action.payload
            const existingItem = state.item.find(item => item.id === id)
            state.quantity--
            if (existingItem.quantity === 1) {
                state.item = state.item.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
            }
            
            state.totalAmount -= existingItem.calcPrice
        }
    }
})

const store = configureStore({
    reducer: { shopCart: shopCartSlice.reducer }
})

export const cartSliceAction = shopCartSlice.actions

export default store