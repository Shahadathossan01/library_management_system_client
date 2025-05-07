import axios from "axios"

const apiUrl=import.meta.env.VITE_API_URL

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



export {
    getBooks,
    getBookById
}