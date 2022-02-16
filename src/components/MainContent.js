import AnswerCard from "./AnswerCard";
import React from 'react';
import { Stack, Text,Button,Box, Avatar, Flex} from '@chakra-ui/react';
import {Link as routerLink} from 'react-router-dom'
import {EditIcon} from '@chakra-ui/icons'
import UserInfo from "./UserInfo";

export default function MainContent(props) {
  /* props = {data:{userId,content,answers,..}} */

  const users = JSON.parse(localStorage.getItem("users"))
  const user = users.find(user=>user.userId===props.data.userId)
  const username = user.firstName+" "+user.lastName
 

  return (
    <Stack p="4" boxShadow="lg" m="8" borderRadius="sm" bg={'whitesmoke'}>
      <Flex width="15%" justifyContent={'space-between'}>
        <Flex>
          <UserInfo userId={props.data.userId}/>
        </Flex>   
      </Flex>
      <Stack marginLeft={5} direction="row" alignItems="center">
                   {/* displaying question */}
         <Text fontSize={18} fontWeight="semibold">{props.data.content}</Text>
         <Button background={'none'} p={0} as={routerLink} to='/Answer'>
           <EditIcon h={5} w={5} />
         </Button>
      </Stack>
                {/* Displaying the available answers  */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"> 
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
            {
               props.data.answers.length==0 ? 
               <Box marginLeft={5} color={'grey'} fontSize={13}>No answers yet</Box>
               : <Box>
                    <Text fontSize={13} marginLeft={6} color={'grey'}>{props.data.answers.length} Answers</Text>
                    { props.data.answers.map(ans=><AnswerCard answer={ans}/>)}
                 </Box>
             }
        </Text>
      </Stack>
    </Stack>
  );
}

