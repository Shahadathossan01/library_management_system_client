import axios from "axios"
const apiUrl=import.meta.env.VITE_API_URL

const createBookIssue=async({bookId,status='pending',token})=>{
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
        return {success:true,message:data.message,bookIssueId:data.data._id}
    }catch(error){
        console.log(error)
          const message =
      error?.response?.data?.message ||
      error?.message ||
      'Something went wrong';

    return { success: false, message };
    }
}

const getSingleBookIssue=async({id,token})=>{
    if(!id) return null

    try{
        const {data}=await axios.get(`${apiUrl}/bookIssues/${id}?expand=book%2Cauthor`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        return data;

    }catch(error){
        console.log(error)
    }
}

const getBookIssuesByUserId=async({params,token,id})=>{
    const {page,limit,sort_by,sort_type}=params

    try{
        const query=`?page=${page}&limit=${limit}&sort_type=${sort_type}&sort_by=${sort_by}`;

        const {data}=await axios.get(`${apiUrl}/users/${id}/bookIssues/${query}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return data
    }catch(error){
        console.log(error)
    }
}

const deleteBookIssueApi=async({id,token})=>{

    try{
        const {data}=await axios.delete(`${apiUrl}/bookIssues/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return data;

    }catch(error){
        console.log(error)
    }
}

const getAllBookIssues=async({params,token})=>{
    const {page,limit,sort_by,sort_type,search}=params

    try{
        let query = `?page=${page}&limit=${limit}&sort_type=${sort_type}&sort_by=${sort_by}`;

        if (search) {
            query += `&search=${encodeURIComponent(search)}`;
        }

        const {data}=await axios.get(`${apiUrl}/bookIssues/${query}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data;
    }catch(error){
        console.log(error)
    }
}

const updateStatusApi=async({id,status,token})=>{
    try{
        const {data}=await axios.patch(`${apiUrl}/bookIssues/${id}`,{status},{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return data
    }catch(error){
        console.log(error)
    }
}

export {
    createBookIssue,
    getSingleBookIssue,
    getBookIssuesByUserId,
    deleteBookIssueApi,
    getAllBookIssues,
    updateStatusApi
}