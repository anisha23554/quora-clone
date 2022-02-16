const loginUser = (email,password)=>{
    try{
       const users = JSON.parse(localStorage.getItem("users"))??[]
       const foundeduser = users.find(user=>user.email===email)
       if(foundeduser){
         if(foundeduser.password === password){
            //  generate token
            const token = `SECRET${email}@token`
            const userId = foundeduser.userId
            return {
                type:"LOGIN_SUCCESS",
                payload:{
                   token,
                   userId
               }
            }
         }
         else{
             return {
                type:"LOGIN_FAILED",
                payload:{
                   token:null,
                   userId:null 
                 }
             }
          }
       }
       else{
           console.log("Account not found,Sign up if not have an account!")
           return {
            type:"LOGIN_FAILED",
            payload:{token:null,userId:null}
         }
       }
    }
    catch(error){
        console.log(error.message)
    }
}
export default loginUser