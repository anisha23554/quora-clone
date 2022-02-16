import React from 'react';
import { Stack, Text, Button, Image,Flex } from '@chakra-ui/react';
import AnswerToTheQuestion from './AnswerToTheQuestion';

export default function AddQuestion(props) {
    // props = {data:{userId,content,answers,isAnonymous,date}}
  return (
    <Stack width={{base:'100%',md:'50%'}} p='2' boxShadow="lg" m="2" borderRadius="sm">
      <Stack
        bg={'whitesmoke'}
        alignItems={'center'}
        p={2}
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
           {props.data.content}
        </Text>
        <Stack direction={{ base: 'column', md: 'row' }}>
          {/* <Button variant="outline" colorScheme="red" >
            Answer
          </Button> */}
          <AnswerToTheQuestion ques={props.data.content}/>
          <Button background={'none'} fontSize={13}>
            <Flex flexDirection={'column'} alignItems={'center'}>
              <Image  
               src={'https://pbs.twimg.com/profile_images/1258514768236654593/BQCWsjIG.jpg'} 
               h={18} 
               width={18}
               _hover={{background:'none'}}
             ></Image>
               Upvote
             </Flex>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}