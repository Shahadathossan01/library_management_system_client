import { createContext, useReducer } from "react"

const initialState={
    book:null,
}

const reducer=(state,action)=>{
    switch (action.type){
        case 'GET_SINGLE_BOOK':
            return {
                ...state,
                book: action.payload
            }
        
    }
}


export const BookDetailsContext=createContext({state:initialState,dispatch:()=>{}})

export const BookDetailsProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)

    return(
        <BookDetailsContext.Provider value={{state,dispatch}}>
            {children}
        </BookDetailsContext.Provider>
    )
}