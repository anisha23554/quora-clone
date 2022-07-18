import axios from "axios";
import toast from 'react-hot-toast'

const postQuestion = (userId,content,questions)=>async(dispatch)=>{
   try{
        const data = {userId,content}
        const res = await axios.post("http://localhost:2000/api/question/add",data)
        if(res.data.status === "SUCCESS"){
            dispatch({
              type:'POST_QUESTION_SUCCESS',
              payload:{questions:[...questions,res.data.question]}
            })
            toast('Question Posted successfully!')
        }
        else{
            console.log(res.data.message)
            dispatch({
                type:'POST_QUESTION_FAILED',
                payload:{questions:questions}
              })
            
        }
    }
    catch(e){
        console.log(e.message)
        dispatch({
            type:'POST_QUESTION_FAILED',
            payload:{questions:questions}
          })
        
    }
}

export default postQuestion