import React, { useState } from 'react'
import {
         Button,
         FormControl,
         Input,
         useDisclosure,
         Image,
         Flex ,
         Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Box,
    toast,
    Textarea,
  } 
from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import postAnswer from '../functions/postAnswer'
import {useToast} from '@chakra-ui/react'

export default function AnswerToTheQuestion(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [answerContent,setAnswerContent] = useState('')
  const {Auth} = useSelector(state=>state)
  const userId = Auth.user._id 
  const questionId = props.question._id
  const toast = useToast()
   
  const handleSubmit = async()=>{
        const res = await postAnswer(userId,questionId,answerContent)
        if(res.status==="SUCCESS"){
          console.log(res.answer)
          toast({
            status:'success',
            title:res.message,
            position:'top'
          })
        }
        else{
          toast({
            status:'error',
            title:res.message,
            position:'top'
          })
        }
    }
    return (
      <Box>
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
            <ModalHeader>{props.question.content}</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <Textarea value={answerContent} size={'lg'}
                onChange={(e)=>{setAnswerContent(e.target.value)}} 
                ref={initialRef} fontSize={20} 
                placeholder='Your Answer here..' h={100} />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={handleSubmit} colorScheme='blue' mr={3}>
                Submit Answer
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    )
  }