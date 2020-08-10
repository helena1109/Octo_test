const initialState = {
            images: [],
            allBlocks: [],
            loading: true,
            isModalOpen: false
    }
const reducer = (state = initialState,action)=>{

    switch(action.type){
        case "FETCH_DATA_LOADED":
            return{
                ...state,
                loading: false,
                allBlocks: action.payload,
                images: action.payload.gallery
            }
        case "OPEN_MODAL":
            return{
                ...state,
                isModalOpen: true
            }
        case "CLOSE_MODAL":
            return{
                ...state,
                isModalOpen: false
            }
        default: return state;
    }
}
export default reducer;