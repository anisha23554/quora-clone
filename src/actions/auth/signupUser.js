import { v4 as uuidv4 } from 'uuid';

export const signupUser = (firstName,lastName,email,password)=>{
    try{
     const users = JSON.parse(localStorage.getItem("users"))??[]
     const user = {
         firstName:firstName,
         lastName:lastName,
         email:email,
         password:password,
         questionsPosted:[], // Array of strings:["","",...]
         answersPosted:[], // Array of objects:[{},{},...]
         userId:uuidv4(),
         followers:0
     }
    // adding signup validation
    if(user.firstName!="" && user.email!="" && user.password!=""){
        const updatedData = [...users,user]
        console.log(updatedData)
        localStorage.setItem("users",JSON.stringify(updatedData))
        return {signup:true,message:"Signup succesfull!"}
    }
    else{
        return {signup:false,message:"validation failed"}
    }
  }
   catch(error){
       console.log(error)
   }
}