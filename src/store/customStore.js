import reducer from "../reducer";

function CreateStore(reducer){
    let state;
    let listeners = [];

    function subscribe(listener){
        listeners.push(listener);

    }

    
    function getState() {
        return state;
    }

    function dispatcher(action){

       state =  reducer(state,action);
       for(let i=0; i<listeners.length; i++){
        listeners[i]();
       }

    }
    
    return {
        getState,
        dispatcher,
        subscribe
    
    };
}


export default CreateStore(reducer);