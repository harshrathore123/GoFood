import React, { createContext, useContext, useReducer } from 'react'

//global variable create
const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state,action) => {
    switch(action.type){
        case "ADD":
            return [...state,{id:action.id,name:action.name,quantity:action.quantity,price:action.price,size:action.size,img:action.img}];

        case "REMOVE":
            let newArr = [...state]
            newArr.splice(action.index,1)
            return newArr;
        
        case "UPDATE":
            let arr = [...state]
            arr.find((food,index)=>{
                if(food.id === action.id)
                {
                    console.log(food.quantity,parseInt(action.quantity),action.price + food.price)
                    arr[index] = {...food,quantity: parseInt(action.quantity) + food.quantity,price:action.price+food.price}
                }
                return arr
            })

            return arr
        
        case "DROP":
            let arr1 = []
            return arr1

        default:
            console.log("Error in Reducer")
    }
}
export const CartProvider = ({children}) =>{

    const[state,dispatch] = useReducer(reducer,[])
  return (
    <CartDispatchContext.Provider value = {dispatch}>
        <CartStateContext.Provider value = {state}>
            {children}
        </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export const useCart = () =>useContext(CartStateContext);
export const useDispatchCart = () =>useContext(CartDispatchContext);
