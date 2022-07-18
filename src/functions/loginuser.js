import axios from 'axios'

const loginuser = (email,password)=>async(dispatch)=>{
  try{
    const data = {email,password}
    const res = await axios.post("http://localhost:2000/api/auth/login",data)
    if(res.data.token){
      dispatch({
        type:'LOGIN_SUCCESS',
        payload:{
          token:res.data.token,
          user:res.data.user
        }
      })
      // toast({
      //   status:'SUCCESS',
      //   title:res.data.message
      // })
    }
    else{
      console.log(res.data.message)
      dispatch({
        type:'LOGIN_FAILED',
        payload:{
          token:null,
          user:null
        }
      })
      // toast({
      //   status:'error',
      //   title:res.data.message
      // })
    }
  }
  catch(e){
    console.log(e.message)
    dispatch({
      type:'LOGIN_FAILED',
      payload:{
        token:null,
        user:null
      }
    })
    // toast({
    //   status:'error',
    //   title:e.message
    // })
  }
}
export default loginuser