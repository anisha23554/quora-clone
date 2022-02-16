import { Box, Button,Flex, Heading,Input } from "@chakra-ui/react"
import { useSelector,useDispatch } from "react-redux"
import { useState,useEffect } from "react";
import AddQuestion from "../actions/quesAns/AddQuestion";

// import store from "../store";

// import ReactQuill from "react-quill"

// question:{userId,content,answers,isAnonymous,date}

const Home = ()=>{
    const {userId} = useSelector(state=>state.Auth);
    const [content,setContent] = useState('');
    const {questions} = useSelector(state=>state.Questions)
    const dispatch = useDispatch() 
    // const state = store.getState()
    // console.log(state)
    
    const intialiseState = ()=>{
      let localStorageData = localStorage.getItem('Questions')?true:false;
      let payload;
       if(localStorageData){
         payload = {questions:JSON.parse(localStorage.getItem("Questions"))}
       }
       else{
         payload = {questions:[]}
       }
       dispatch({
         type:'LOAD_DATA',
         payload
       })
    }
    useEffect(()=>{
       intialiseState()
    },[])    

    const addQuestion = ()=>{
      // console.log(content)
      const users = JSON.parse(localStorage.getItem("users"))
      users.forEach(user => {
         if(user.userId === userId){
           user.questionsPosted = [...user.questionsPosted,content]
         }
      });
      localStorage.setItem("users",JSON.stringify(users))
       const today = new Date()
       const date = today.getDate()+"-"+today.getMonth()+1+"-"+today.getFullYear()
       const data = JSON.parse(localStorage.getItem("Questions"))??[];
       const question = {userId,content,answers:[],isAnonymous:false,date,upvotes:0}
       const updatedQuestions = [...data,question]
       localStorage.setItem("Questions",JSON.stringify(updatedQuestions))
       dispatch(AddQuestion(userId,date,question.isAnonymous,content,question.answers,question.upvotes,questions))
      //  const {payload} = AddQuestion(userId,date,question.isAnonymous,content,question.answers,questions);
      //  console.log(payload)
       setContent("")  
    }
    return <Box>
        <Flex marginTop={100} alignItems={'center'} flexDirection={'column'} justifyContent={'space-evenly'}>
         <Heading width={'100%'} textAlign='center' p={4}>Ask your Queries here and connect to the world Today !!</Heading>
         <Flex m={10} justifyContent={{base:'space-around',sm:'space-around',md:'space-between'}} alignItems={'center'} flexDirection={{base:'column',sm:'column',md:'row'}}>
           {/* <ReactQuill style={{height:200}}></ReactQuill> */}
           <Input value={content} onChange={(e)=>{setContent(e.target.value)}} height={100} width={400} fontSize={25} placeholder="Your Question here.." bg={'whitesmoke'}></Input>
           <Button onClick={addQuestion} width={160} _hover={{bg:"green.400"}} fontSize={18} p={6} m={10} rounded={50} bg="green" h={8} color={'whitesmoke'}>Ask Question</Button>
         </Flex>
       </Flex>
    </Box>
}
export default Home 
// h={{base:400,md:150}}
//  h={{base:450,md:400}}