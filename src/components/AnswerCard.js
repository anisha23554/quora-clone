import React from 'react';
import { Stack, Text} from '@chakra-ui/react';

export default function AnswerCard(props) {
 /* props = {answer:{userId,content,date,isAnonymous}} */
  const users = JSON.parse(localStorage.getItem('users'))
  const user = users.find(user=>user.userId === props.answer.userId)
  const username = user.firstName+" "+user.lastName
  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm" bg={'white'} width={'100%'}>
      <Stack
        direction={'column'}
        justifyContent="space-between">
        <Text color={'grey'}>Answered by <u>{username}</u></Text>
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
          {props.answer.content}
        </Text>
      </Stack>
    </Stack>
  );
}