import { createContext, useReducer } from "react"

const initialState={
    reviews:[],
    page:1,
    limit:2,
    pagination:{},
    updatedData:null,
    deletedData:null,
    createData:null
}

const reducer=(state,action)=>{
    switch (action.type) {
        case 'GET_REVIEWS_BY_BOOKID':
            return {
                ...state,
                reviews:action.payload.reviews || [],
                pagination: action.payload.pagination
            }
        
        case 'UPDATE_REVIEW':
            return {
                ...state,
                updatedData:action.payload
            }

        case 'DELETE_REVIEW':
            return {
                ...state,
                deletedData:action.payload
            }

        case 'CREATE_VEVIEW':
            return {
                ...state,
                createData:action.payload
            }

        case 'UPDATE_PAGE':
            return {
                ...state,
                page: action.payload
            }
    }
}

export const ReviewContext=createContext({state:initialState,dispatch:()=>{}})

export const ReviewProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)

    return (
        <ReviewContext.Provider value={{state,dispatch}}>
            {children}
        </ReviewContext.Provider>
    )
}