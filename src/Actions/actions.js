

const setData = (data)=>{
    return{
        type: "FETCH_DATA_LOADED",
        payload: data
    }
}
const openModalWindow = ()=>{
    return{
        type: "OPEN_MODAL"
    }
}
const closeModalWindow = ()=>{
    return{
        type: "CLOSE_MODAL"
    }
}
const fetchData = (octoTestService,dispatch)=>()=>{
    octoTestService.getBlocks()
        .then(data=>dispatch(setData(data)))
        .catch((error)=>console.log(error));
}

export{
    fetchData,
    openModalWindow,
    closeModalWindow
}