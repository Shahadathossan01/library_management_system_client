import axios from "axios"
const apiUrl=import.meta.env.VITE_API_URL

const getReviewById=async({id,page=1,limit=10})=>{
    try{
        const {data}=await axios.get(`${apiUrl}/books/${id}/reviews?page=${page}&limit=${limit}`)
        return data
    }catch(error){
        console.log(error)
    }
}

const updateReview=async({id,content,status,token})=>{
    try{
        const {data}=await axios.patch(`${apiUrl}/reviews/${id}`,{
            content,
            status
        },{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        return data
    }catch(error){
        console.log(error)
    }
}
const createReview=async({id,content,token})=>{
    try{
        const {data}=await axios.post(`${apiUrl}/books/${id}/reviews`,{
            content,
        },{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        return data
    }catch(error){
        console.log(error)
    }
}

const deleteReview=async({id,token})=>{
    try{
        const {data}=await axios.delete(`${apiUrl}/reviews/${id}`,{
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
    getReviewById,
    updateReview,
    deleteReview,
    createReview
}