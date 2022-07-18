import { useEffect } from "react";
import { useDispatch } from "react-redux";
import loadQuestions from "../functions/loadQuestions";
import { useSelector } from "react-redux";
import DisplayData from "./DisplayData";
import { Box } from "@chakra-ui/react";

const Home = () => {
    const dispatch = useDispatch()
    const {Questions} = useSelector(state=>state)
    
    const questions = Questions.questions
    useEffect(()=>{
      dispatch(loadQuestions())
    },[])

    return (
      <>
        {
           <Box m={20}>
            {
              questions.map(question=>
                <DisplayData question={question}/>
              )
            }
           </Box>
          }
      </>
    );
}
 
export default Home;