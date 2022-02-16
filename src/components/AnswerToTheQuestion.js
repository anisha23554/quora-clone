import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import React from 'react'
import {
         Button,
         FormControl,
         Input,
         useDisclosure,
         Image,
         Flex 
        } 
from '@chakra-ui/react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import loadAnswer from '../actions/quesAns/loadAnswer'
import { useDispatch } from 'react-redux'

export default function AnswerToTheQuestion(props) {
    // props: {ques:content}
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const [answerContent,setAnswerContent] = useState("") 
    const {userId} = useSelector(state=>state.Auth)
    const dispatch = useDispatch()

    const handleSubmitAnswer = ()=>{
      // Adding the answer obj to the user
      const today =  new Date()
      const date = today.getDate()+"-"+today.getMonth()+1+"-"+today.getFullYear()
      const answer = {
        userId:userId,
        content:answerContent,
        date:date,
        isAnonymous:false
      }
      const users = JSON.parse(localStorage.getItem("users"))
      users.forEach(user => {
         if(user.userId === userId){
           user.answersPosted = [...user.answersPosted,answer]
         }
      });
      localStorage.setItem("users",JSON.stringify(users))   
      const questions = JSON.parse(localStorage.getItem("Questions"))
      questions.forEach(question=>{
         if(question.content === props.ques){
            question.answers = [...question.answers,answer]
         }
      })
      localStorage.setItem("Questions",JSON.stringify(questions))
      dispatch(loadAnswer())
      setAnswerContent("")
    }
     
    return (
      <>
        <Button onClick={onOpen} fontSize={13} background={'none'}>
            <Flex alignItems={'center'} flexDirection="column">
              <Image 
               src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQW_rUtjDsD5aJcD2rP1mRogNF30ZxNBzKA&usqp=CAU'} 
               h={6}
               width={6}
             ></Image>
               Answer
             </Flex>
        </Button>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.ques}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <Input value={answerContent} onChange={(e)=>{setAnswerContent(e.target.value)}} ref={initialRef} fontSize={20} placeholder='Your Answer here..' h={100} />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={handleSubmitAnswer} colorScheme='blue' mr={3}>
                Submit Answer
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }