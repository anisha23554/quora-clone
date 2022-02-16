 const initialState = {
    questions:[] // Array of objects: [{},{},..]
}
/* NOTE: answers key of questions state will be array of objects 
 */
const Questions = (state=initialState,action)=>{
    const {type,payload} = action
    console.log(payload)
    switch(type){
        case "ADD_QUESTION":
            return payload
        case "LOAD_DATA":
            return payload
        default:
            return state
    }  
}
export default Questions