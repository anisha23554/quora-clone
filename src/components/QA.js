import { useSelector } from "react-redux"
import MainContent from "./MainContent"

const QA = ()=>{
    const {questions} = useSelector(state=>state.Questions)
    return (
        <>
          {
              questions.map(question=><MainContent data={question}/>)
          }      
        </>
    )
}
export default QA


