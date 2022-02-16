import { useSelector } from "react-redux";
import AddQuestion from "./AddQuestion";
import { Flex, Heading } from "@chakra-ui/react";


const Answer = () => {
    const {questions} = useSelector(state=>state.Questions) 
    return (<>
       <Heading fontSize={20} color={'red.700'} textAlign={'center'} m={5}>Questions for you</Heading>
       <Flex flexDirection={'column'} alignItems={'center'}>
       {
           questions.map(question=><AddQuestion data={question}/>)
       }
       </Flex>
    </>);
}
 
export default Answer