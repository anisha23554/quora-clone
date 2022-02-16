const initialState = {
    token:null,
    userId:null
}
const Auth = (state=initialState,action)=>{
    const {payload,type} = action
    switch(type){
        case 'LOGIN_SUCCESS':
            return payload
        case 'LOGIN_FAILED':
            return payload
        case 'LOGOUT':
            return payload
        default:
            return state
    }  
}
export default Auth