import { Children, createContext, useReducer } from "react"

const initialState={
    users:[],
    page:1,
    limit:10,
    sort_type:'dsc',
    sort_by:'updatedAt',
    search:'',
    pagination:{},
    isDeleted:null,

}

const reducer=(state,action)=>{
    switch (action.type){
        case 'GET_ALL_USERS':
            return {
                ...state,
                users:action.payload.users,
                pagination:action.payload.pagination
            }
        
        case 'UPDATE_PAGE':
            return {
                ...state,
                page:action.payload
            }
        
        case 'UPDATE_SEARCH_VALUE':
            return {
                ...state,
                search:action.payload,
                page:1
            }

        case 'DELETE_USER':
            return {
                ...state,
                isDeleted: Date.now() 
            }
    }
}

export const UserContext=createContext({state:initialState,dispatch:()=>{}})

export const UserProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)

    return (
        <UserContext.Provider value={{state,dispatch}}>
            {children}
        </UserContext.Provider>
    )
}