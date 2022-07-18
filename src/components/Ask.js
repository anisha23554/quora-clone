import React from "react";
import { Box, Button,Flex, Heading, useToast } from "@chakra-ui/react"
import { Textarea } from '@chakra-ui/react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import postQuestion from "../functions/postQuestion";
import toast, { Toaster } from 'react-hot-toast';


const Home = ()=>{
   const {Questions,Auth} = useSelector(state=>state)
   const dispatch = useDispatch()
   const [content,setContent] = useState('')
   
   const submitQuestion = ()=>{
      dispatch(postQuestion(Auth.user._id,content,Questions.questions))
      setContent('')
      
   }
   return <Box>
        <Flex marginTop={100} alignItems={'center'} flexDirection={'column'} justifyContent={'space-evenly'}>
         <Heading width={'100%'} textAlign='center' p={0}>Ask your Queries here and connect to the world Today !!</Heading>
         {/* <Flex m={10} justifyContent={{base:'space-around',sm:'space-around',md:'space-between'}} alignItems={'center'} flexDirection={{base:'column',sm:'column',md:'row'}}> */}
         <Textarea 
         width={'50%'}
           mt={12}
           size={'lg'}
           value={content} 
           onChange={(e)=>{setContent(e.target.value)}}
           placeholder={"ask your question here"} />
           <Button 
           width={160} _hover={{bg:"green.400"}} 
           fontSize={18} p={6} m={10} rounded={50}
           bg="green" h={8} 
           color={'whitesmoke'}
           onClick={submitQuestion}>Ask Question</Button>
           <Toaster/>
         {/* </Flex> */}
       </Flex>
    </Box>
}
export default Home 
