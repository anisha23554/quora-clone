import axios from 'axios'
import toast from 'react-hot-toast'

const editDescription = (description,user,token)=>async(dispatch)=>{
     try{
       const data = {userId:user._id,description}
       const res = await axios.post('http://localhost:2000/api/auth/profile/edit',data)
       console.log(res.data)
  
       if(res.data.status === 'SUCCESS'){
        console.log(res.data.user)
        dispatch({
            type:'EDIT_DESCRIPTION_SUCCESS',
            payload:{token,user:res.data.user}
        })
        toast('Your status updated')
       }
       else{
         dispatch({
            type:'EDIT_DESCRIPTION_FAILED',
            payload:{token,user}
         })
       }
     }
     catch(e){
        dispatch({
            type:'EDIT_DESCRIPTION_FAILED',
            payload:{token,user}
         })
     }
}

export default editDescription