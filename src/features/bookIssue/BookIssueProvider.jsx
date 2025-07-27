import {createContext, useReducer } from "react"

const initialState={
    bookIssues:[],
    book:null,
    bookIssue:null,
    createdData:null,
    page:1,
    limit:10,
    sort_type:'dsc',
    sort_by:'updatedAt',
    search:'',
    pagination:{},
    isDeleteBookIssue:null,
    allBookIssuesForAdminData:[],
    allBookIssuesForAdminPagination:{},
    isUpdateStatus:null
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

        case 'UPDATE_SEARCH_VALUE':
            return {
                ...state,
                search:action.payload,
                page:1
            }
            
        case 'GET_SINGLE_BOOKISSUE':
            return {
                ...state,
                bookIssue:action.payload
            }
        case 'GET_ALL_BOOKISSUE':
            return {
                ...state,
                bookIssues: action.payload.bookIssues,
                pagination: action.payload.pagination
            }
        case 'UPDATE_PAGE':
            return {
                ...state,
                page: action.payload

            }
        case 'DELETE_BOOKISSUE':
            return {
                ...state,
                isDeleteBookIssue: Date.now()
            }
        
        case 'ALL_BOOK_ISSUES_FOR_ADMIN':
            return {
                ...state,
                allBookIssuesForAdminData:action.payload.data,
                allBookIssuesForAdminPagination:action.payload.pagination
            }
        
        case 'UPDATE_STATUS':
            return {
                ...state,
                isUpdateStatus:action.payload
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