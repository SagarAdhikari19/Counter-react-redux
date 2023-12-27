import { createStore } from "redux"; //importing createStore 

const InitialValue = {//initializing the counter value to 1
    counter: 0
}


/* A reducer is a function that takes the current state (store) and an action as parameters, and it returns a new state.
 In this case, the reducer simply returns the current state unchanged. It's a basic placeholder reducer.*/
const counterReducer = (store = InitialValue, action) => {

    if (action.type === "INCREMENT") {
        return { counter: store.counter + 1 };

    } else if (action.type === "DECREMENT") {
        return { counter: store.counter - 1 };
    }
    return store;

}

/*Using createStore, you create a Redux store by passing in your reducer function (counterReducer). 
The store is responsible for holding the state of your application and allows you to dispatch actions to update that state.*/

const counterStore = createStore(counterReducer);

export default counterStore; 