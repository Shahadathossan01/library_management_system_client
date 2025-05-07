import { createContext, useReducer } from "react"

const initialState={
    books:[],
    page:1,
    limit:8,
    sort_type:'dsc',
    sort_by:'updatedAt',
    search:'',
    pagination:{}
}

const reducer=(state,action)=>{
    switch (action.type){
        case 'GETBOOKS':
            return {
                ...state,
                books: action.payload.books,
                pagination: action.payload.pagination
            }
        case 'UPDATE_PAGE':
            return {
                ...state,
                page: action.payload
            }
    }
}

export const BookContext=createContext({state:initialState,dispatch:()=>{}})

export const BookProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)

    return(
        <BookContext.Provider value={{state,dispatch}}>
            {children}
        </BookContext.Provider>
    )
}