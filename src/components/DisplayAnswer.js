import { Avatar, Box, Flex,Text } from "@chakra-ui/react";
import { useEffect } from "react";
import getUser from "../functions/getUser";
import { useState } from "react";

const DisplayAnswer = (props) => {
    // props = {answer:{}}
    const [user,setUser] = useState('')
    const fetchUser = async()=>{
      const user = await getUser(props.answer.userId)
      setUser(user)
    }
    
    useEffect(()=>{
      fetchUser()
    },[])
    return ( 
        <Flex m={2} w={'45%'}>
         <Flex>
            <Text ml={5} fontSize={14}><i>answered By:</i></Text>
            <Flex>
             <Text ml={2} color={'blue'} fontSize={14}><i>{user.firstName+" "+user.lastName}</i></Text>
            </Flex>
         </Flex>
         <Text ml={5}>{props.answer.content}</Text>
        </Flex>
     );
}
 
export default DisplayAnswer;