import reducer from "./reducer";

function CreateStore(reducer){
    let state;

    
    function getState() {
        return state;
    }

    function dispatcher(action){

       state =  reducer(state,action);

    }
    
    return {
        getState,
        dispatcher
    
    };
}


export default CreateStore(reducer);