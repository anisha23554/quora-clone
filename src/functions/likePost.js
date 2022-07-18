import axios from 'axios'

const likePost = (quesId,questions)=>async(dispatch)=>{
   try{
     const res = await axios.post('http://localhost:2000/api/question/like',{quesId})
     if(res.data.status==='SUCCESS'){
        questions.filter(ques=>ques._id===quesId)
        console.log(questions)
        const updatedQuestions = [...questions,res.data.question]
        console.log(updatedQuestions)
        dispatch({
            type:'LIKED_POST_SUCCESS',
            payload:{questions:updatedQuestions}
        })
     }
     else{
        console.log(res.data.message)
        dispatch({
            type:'LIKED_POST_FAILED',
            payload:{questions}
        })
     }
   }
   catch(error){
    console.log(error.message)
    dispatch({
        type:'LIKED_POST_FAILED',
        payload:{questions}
    })
   }
}
export default likePost