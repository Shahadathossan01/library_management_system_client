import { Children, createContext, useReducer } from "react"

const initialState={
    profileData:null,
    updatedData:null,
}

const reducer=(state,action)=>{
    switch (action.type){
        case 'GET_PROFILEDATA':
            return {
                ...state,
                profileData:action.payload
            }
        case 'UPDATE_PROFILE':
            return {
                ...state,
                updatedData:action.payload
            }

    }
}

export const ProfileContext=createContext({state:initialState,dispatch:()=>{}})


export const ProfileProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)

    return(
        <ProfileContext.Provider value={{state,dispatch}}>
            {children}
        </ProfileContext.Provider>
    )
}