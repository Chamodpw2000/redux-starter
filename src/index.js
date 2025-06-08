import store from './store';
console.log("Store is", store);
console.log("Store state is", store.getState());

store.dispatch({
    type: 'bugAdded',
    payload: {
        description: 'Bug 1'
    }
});

console.log("Store state after adding a bug is", store.getState());

store.dispatch({
    type: 'bugRemoved',
    payload: {
        id: 1
    }
});

console.log("Store state after removing a bug is", store.getState());


