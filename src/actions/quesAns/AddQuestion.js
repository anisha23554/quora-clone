//  this function returns an action to add a question to redux store

// { questions:{} }

const AddQuestion = (userId,date,isAnonymous,content,answers,upvotes,questions)=>{
    try{
      const question = {
        userId,
        date,
        isAnonymous,
        content,
        answers,
        upvotes
     }
      const payload = {questions:[...questions,question]}
      const action = {
        type:"ADD_QUESTION",
        payload
      }
    return action
    }
    catch(error){
        console.log(error.message)
    }
}
export default AddQuestion