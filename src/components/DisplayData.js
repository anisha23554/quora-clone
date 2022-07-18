import React from 'react';
import { Box, Heading,Text,Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayAnswer from './DisplayAnswer';
import getUser from '../functions/getUser';
import User from './User';
import axios from 'axios'

const DisplayData = (props)=>{
  //  props = {question:{}}
   const [answers,setAnswers] = useState([])
   const [user,setUser] = useState({}) 
   const fetchAnswers = async()=>{
    try{
       const user = await getUser(props.question.userId)
       if(user){setUser(user)}
       const res = await 
           axios.post(`http://localhost:2000/api/answer/${props.question._id}`)
       if(res.data.status==="SUCCESS"){
          setAnswers(res.data.answers)
       }
       else{
          return console.log(res.data.message)
       }
    }
    catch(e){
      console.log(e.message)
    }
  }

   useEffect(()=>{
      fetchAnswers()
   },[]) 
   // console.log(answers)
   return (
      <Box m={10} p={5} bg={'whitesmoke'}>
          <Flex alignItems={'center'}>
          <Heading fontSize={'1rem'} m={4}>{props.question.content}</Heading>
          <Text fontSize={14}><i>asked By:{
             user?
                <User user={user}/>
               :''
          }</i></Text>
          </Flex>
          {
           answers.length===0?
             <Box ml={4}>No answers yet</Box>
           :answers.map(answer=><DisplayAnswer answer={answer}/>)
          }
      </Box>
    )
  
}
export default DisplayData