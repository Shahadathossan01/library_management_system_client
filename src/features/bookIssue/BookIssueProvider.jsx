import { Children, createContext, useReducer } from "react"

const initialState={
    bookIssues:[],
    book:null,
    bookIssue:null,
    createdData:null
}

const reducer=(state,action)=>{
    switch (action.type) {
        case 'CREATE_BOOKISSUE':
            return {
                ...state,
                createdData: action.payload
            }
        case 'GET_SINGLE_BOOK':
            return {
                ...state,
                book:action.payload
            }
    }
}


export const BookIssueContext=createContext({state:initialState,dispatch:()=>{}})

export const BookIssueProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)

    return (
        <BookIssueContext.Provider value={{state,dispatch}}>
            {children}
        </BookIssueContext.Provider>
    )
}