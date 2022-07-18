import axios from 'axios'

const signupuser = async(firstName,lastName,email,password)=>{
    try{
        console.log(firstName)
        const data = {firstName,lastName,email,password}
        const res = await axios.post("http://localhost:2000/api/auth/signup",data)
        console.log(res.data)
        if(res.data.status === "SUCCESS"){
            return({
                status:'SUCCESS',
                message:res.data.message
            })
        }
        else{
            return({
                status:'FAILED',
                message:res.data.message
            })
        }
    }
    catch(error){
        console.log(error.message)
        return {status:'FAILED',message:error.message}
    }
}
export default signupuser