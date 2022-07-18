import axios from "axios"

const getUser = async(userId)=>{
   try{
     const res = await axios.post(`http://localhost:2000/api/auth/user/${userId}`) 
     return res.data.user[0]
  }
  catch(e){
    console.log(e.message)
    return {}
  }
}

export default getUser