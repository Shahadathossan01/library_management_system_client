import axios from "axios"

const apiUrl=import.meta.env.VITE_API_URL

const token=localStorage.getItem('access_token') || null;
const user=localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')):null;
const id=user?._id

const getUserProfile=async()=>{

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

const updateProfileApi=async({formData})=>{
    
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

const getAllUsers=async(params)=>{
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

const deleteUserApi=async({id})=>{
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