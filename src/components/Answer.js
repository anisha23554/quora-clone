import { useSelector } from "react-redux";
import DisplayQuestion from "./DisplayQuestion";
import { Flex } from "@chakra-ui/react";
import React from "react";

const Answer = () => { 
    const {questions} = useSelector(state=>state.Questions) 
    return (<React.Fragment>
       {/* <Heading fontSize={20} color={'red.700'} textAlign={'center'} mt={10}>Questions for you</Heading> */}
       <Flex flexDirection={'column'} alignItems={'center'} mt={55}>
       {
           questions.map(question=><DisplayQuestion data={question}/>)
       }
       </Flex>
    </React.Fragment>);
}
 
export default Answer