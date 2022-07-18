import axios from 'axios'

const loadQuestions = ()=>async(dispatch)=>{
    try{
       const res = await axios.get("http://localhost:2000/api/question/all")
       if(res.data.status === "SUCCESS"){
        dispatch({
            type:'LOAD_QUESTIONS_SUCCESS',
            payload:{questions:res.data.questions}
        })
       }
       else{
         dispatch({
            type:'LOAD_QUESTIONS_FAILED',
            payload:{questions:[]}
         })
       }
    }
    catch(e){
        console.log(e.message)
        dispatch({
            type:'LOAD_QUESTIONS_FAILED',
            payload:{questions:[]}
         })
    }
}
export default loadQuestions