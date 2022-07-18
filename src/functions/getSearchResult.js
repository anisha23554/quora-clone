import axios from 'axios'

const getSearchResult = async(questions,searchContent)=>{
    try{
      const query = searchContent.toLowerCase()
      const matchedQuestions = [] // array of question Id's
      const searchResult = []
      questions.forEach(question => {
         question.content = question.content.toLowerCase()
         if(question.content === query){
          matchedQuestions.push({content:question.content,questionId:question._id})
         }
      });
      if(matchedQuestions.length != 0){
          //  fetch answers from the db
          matchedQuestions.forEach(async(question)=>{
            try{
             const res = await 
               axios.post(`http://localhost:2000/api/answer/${question.questionId}`)
              if(res.data.answers){
                searchResult.push({answers:res.data.answers})
              }
            }
            catch(e){
              console.log(e.message)
              return {status:'FAILED',message:e.message}
            }
         })
      } 
      console.log(searchResult)
      return searchResult
    }
    catch(e){
      return {status:'FAILED',message:e.message}
    }
}
export default getSearchResult