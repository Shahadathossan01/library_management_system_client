import axios from "axios"
const apiUrl=import.meta.env.VITE_API_URL
const token=localStorage.getItem('access_token')

const createBookIssue=async({bookId,status='pending'})=>{
    if(!bookId) return null

    try{
        const {data}=await axios.post(`${apiUrl}/bookIssues`,{
            bookId,
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

export {
    createBookIssue
}