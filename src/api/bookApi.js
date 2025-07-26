import axios from "axios"

const apiUrl=import.meta.env.VITE_API_URL
const token=localStorage.getItem('access_token') || null;

const getBooks=async(params)=>{
    const {page,limit,sort_by,sort_type,search}=params

   try{
        let query = `?page=${page}&limit=${limit}&sort_type=${sort_type}&sort_by=${sort_by}`;

        if (search) {
            query += `&search=${encodeURIComponent(search)}`;
        }

        const {data}=await axios.get(`${apiUrl}/books${query}`)
        return data
   }catch(error){
        console.log(error)
   }
}

const getBookById=async({id,reviews})=>{

    try{
        let url=`${apiUrl}/books/${id}`
        if(reviews){
            url +=`?expand=reviews`
        }
        const {data}=await axios.get(url)

        return data
    }catch(error){
        console.log(error)
    }
}

const deleteBookApi=async({id})=>{
    try{
        const {data}=await axios.delete(`${apiUrl}/books/${id}`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        return data
    }catch(error){
        console.log(error)
    }
}

const createBookApi=async({formData})=>{
    try{
        const {data}=await axios.post(`${apiUrl}/books`,formData,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        return data
    }catch(error){
        console.log(error)
    }
}

const editBookApi=async({id,formData})=>{
    try{
        const {data}=await axios.patch(`${apiUrl}/books/${id}`,formData,{
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
    getBooks,
    getBookById,
    deleteBookApi,
    createBookApi,
    editBookApi
}