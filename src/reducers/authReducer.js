const initialState = {
    token:null,
    user:null
}
const Auth = (state=initialState,action)=>{
    const {payload,type} = action
    switch(type){
        case 'LOGIN_SUCCESS':
            return payload
        case 'LOGIN_FAILED':
            return payload
        case 'EDIT_DESCRIPTION_SUCCESS':
            return payload;
        case 'EDIT_DESCRIPTION_FAILED':
            return payload
        case 'LOGOUT':
            return payload
        default:
            return state
    }  
}
export default Auth