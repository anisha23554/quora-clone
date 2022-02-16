const loadAnswer = ()=>{
    const data = JSON.parse(localStorage.getItem("Questions"))
    return({
        type:'LOAD_DATA',
        payload:{questions:data}
    })
}
export default loadAnswer