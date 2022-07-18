import {useLocation} from 'react-router-dom'

const SearchResult = () => {
    const location = useLocation()
    console.log(location.state.response)
    return ( <>
      
    </> );
}
 
export default SearchResult;