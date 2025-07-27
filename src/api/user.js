import axios from "axios"

const apiUrl=import.meta.env.VITE_API_URL


const getUserProfile=async({token,id})=>{

    try{
        const {data}=await axios.get(`${apiUrl}/users/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        return data
    }catch(error){
        console.log(error)
    }
}

const updateProfileApi=async({formData,token,id})=>{
    
    try{
        const {data}=await axios.patch(`${apiUrl}/users/${id}`,formData,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        return data
    }catch(error){
        console.log(error)
    }
}

const getAllUsers=async({params,token})=>{
    const {page,limit,sort_by,sort_type,search}=params

    try{
        let query=`?page=${page}&limit=${limit}&sort_type=${sort_type}&sort_by=${sort_by}`;

        if(search){
            query += `&search=${encodeURIComponent(search)}`
        }
        const {data}=await axios.get(`${apiUrl}/users${query}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        return data;
    }catch(error){
        console.log(error)
    }
}

const deleteUserApi=async({id,token})=>{
    try{
        const {data}=await axios.delete(`${apiUrl}/users/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        return data
    }catch(error){
        console.log(error)
    }
}

export {
    getUserProfile,
    updateProfileApi,
    getAllUsers,
    deleteUserApi
}