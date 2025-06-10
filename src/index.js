// import { bugAdded } from './actions';
// import { BUG_ADDED, BUG_REMOVED } from './actionTypes';
// import store from './store';
// console.log("Store is", store);
// console.log("Store state is", store.getState());

// const unsubscribe = store.subscribe(()=>{
//     console.log("Store state changed", store.getState());
// })
// // subscribe is use to listen to changes in the store state and it returns a function to unsubscribe from the store that
// // can be called later to stop listening to changes.




// store.dispatch({
//     type:BUG_ADDED,
//     payload: {
//         description: 'Bug 1'
//     }
// });

// console.log("Store state after adding a bug is", store.getState());

// unsubscribe(); // Unsubscribe from the store

// store.dispatch({
//     type: BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// });

// store.dispatch(bugAdded('Bug 2'));

// console.log("Store state after removing a bug is", store.getState());

// store.dispatch(bugAdded('Bug 2'));

// store.dispatch(bugAdded('Bug 3'));

// console.log("Store state after adding more bugs is", store.getState());


// store.dispatch({
//     type: 'BUG_RESOLVED',
//     payload: {
//         id: 2
//     }
// });

// console.log("Store state after resolving a bug is", store.getState());

import store from "./customStore";

store.state=1;

console.log(store.getState());
console.log(store);



