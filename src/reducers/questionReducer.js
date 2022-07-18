const initialState = {
    questions:[] // Array of objects: [{},{},..]
}
/* NOTE: answers key of questions state will be array of objects 
 */
const Questions = (state=initialState,action)=>{
    const {type,payload} = action
    switch(type){
        case 'POST_QUESTION_SUCCESS':
            return payload
        case 'POST_QUESTION_FAILED':
            return payload
        case 'LOAD_QUESTIONS_SUCCESS':
            return payload
        case 'LOAD_QUESTIONS_FAILED':
            return payload
        case 'LIKED_POST_SUCCESS':
            return payload
        case 'LIKED_POST_FAILED':
            return payload
        case 'SEARCH_QUERY':
            // state = {questions:[{},{},..],search:true,searchResult:}
            return {...state,search:payload.search,searchResult:payload.searchResult}
        default:
            return state
    }  
}
export default Questions