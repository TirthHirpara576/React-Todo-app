// L69 :- useReducer() Hook  (hooks -> useReducer -> index.jsx)
/*
import { useReducer } from "react";

export const ReducerComp = () => {
    // const initialState = {
    //     count: 0,
    //     inc: 2,
    //     dec: 2,
    // };

    const reducer = (state, action) => {  
        console.log(state, action);   // state means -> current state (count: 0) & action means -> type:"INCREMENT"
        if (action.type === "INCREMENT") {
          return state + 1;
        }
        if (action.type === "DECREMENT") {
          return state - 1;
        }
        if (action.type === "RESET") {
          return (state = 0);
        }

        // switch (action.type) {
        // case "INCREMENT":
        //     return {
        //     ...state,
        //     count: state.count + 1,
        //     };

        // case "DECREMENT":
        //     return { ...state, count: state.count - 1 };

        // case "RESET":
        //     return { ...state, count: 0 };

        // default:
        //     return state;
        // }
    };

    // const [count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, 0);

    return ( // in dispatch(), we are passing one object with 1 property -> dispatch({ type: "INCREMENT" })}
        // jyare dispatch() function call thai -> it will send action to the reducer() function
        <div className="p-4 h-lvh flex flex-col justify-center items-center">
            <h1>{count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })} >Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })} >Decrement</button>
            <button onClick={() => dispatch({ type: "RESET" })} >Reset</button>
        </div>
    );
};    */



// L70 :- Improve useReducer() Hook  (hooks -> useReducer -> index.jsx)  
import { useReducer } from "react";

export const ReducerComp = () => {
    const initialState = { // object
      count: 0,
      inc: 2,
      dec: 2,
    };

    const reducer = (state, action) => {  
      // state means -> current state (count: 0) & action means -> type:"INCREMENT"
      switch (action.type) {
        case "INCREMENT": // return the entire updated object
          return { ...state, count: state.count + state.inc }; // in my object -> previous data must be as it is (inc,dec) , only count will be changed.

        case "DECREMENT":
          return { ...state, count: state.count - 1 };

        case "RESET":
          return { ...state, count: 0 };

        default:
          return state;
      }
    };

    const [state, dispatch] = useReducer(reducer, initialState); // state -> object

    return ( // in dispatch(), we are passing one object with 1 property -> type: 
      // jyare dispatch() function call thai -> it will send action to the reducer() function
      <div className="p-4 h-lvh flex flex-col justify-center items-center">
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })} >Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })} >Decrement</button>
        <button onClick={() => dispatch({ type: "RESET" })} >Reset</button>
      </div>
    );
};