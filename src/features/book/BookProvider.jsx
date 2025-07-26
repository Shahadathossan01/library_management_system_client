import { createContext, useReducer } from "react"

const initialState={
    books:[],
    book:null,
    page:1,
    limit:8,
    sort_type:'dsc',
    sort_by:'updatedAt',
    search:'',
    pagination:{},
    isDeleted:null,
    createBook:null,
    editBook:null
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
        
        case 'GET_SINGLE_BOOK':
            return {
                ...state,
                book:action.payload
            }
        
        case 'DELETE_BOOK':
            return {
                ...state,
                isDeleted: Date.now() 
            }
        
        case 'CREATE_BOOK':
            return {
                ...state,
                createBook:action.payload
            }

        case 'EDIT_BOOK':
            return {
                ...state,
                editBook:action.payload
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