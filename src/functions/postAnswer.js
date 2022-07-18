import axios from 'axios'

const postAnswer = async(userId,questionId,content)=>{
    try{
      const data = {userId,questionId,content}
      const res = await axios.post("http://localhost:2000/api/answer/add",data)
      if(res.data.status==="SUCCESS"){
        return {status:'SUCCESS',message:res.data.message,answer:res.data.answer}
      }
      else{
        return {status:'FAILED',message:res.data.message}
      }
    }
    catch(e){
        console.log(e.message)
        return {status:'FAILED',message:e.message}
    }
}

export default postAnswer