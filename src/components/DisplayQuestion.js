import React from 'react';
import { Stack, Text, Button, Image,Flex } from '@chakra-ui/react';
import AnswerToTheQuestion from './AnswerToTheQuestion';
import likePost from '../functions/likePost';
import { useDispatch, useSelector } from 'react-redux';

export default function DisplayQuestion(props) {
    // props = {data:{userId,content,isAnonymous,date,_id,upvotes}}
    const dispatch = useDispatch()
    const {Questions} = useSelector(state=>state)

    const handleLike = ()=>{
       dispatch(likePost(props.data._id,Questions.questions))
    }
  return (
    <Stack width={{base:'100%',md:'80%'}} p='2'  boxShadow="lg" m="2" borderRadius="sm">
      <Stack
        // bg={'whitesmoke'}
        alignItems={'center'}
        p={2}
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
           {props.data.content}
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <AnswerToTheQuestion question={props.data}/>
          <Flex alignItems={'center'}>
          <Button
           background={'none'}
           p={0}
           m={0}
           onClick={handleLike}
           >
           <Image w={5} h={5} src='https://cdn-icons-png.flaticon.com/512/889/889140.png'/>
          </Button>
          <Text>{props.data.upvotes}</Text>
          </Flex>
        </Stack>
      </Stack>
    </Stack>
  );
}