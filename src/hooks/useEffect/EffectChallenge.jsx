/* L53 :- useEffect challenge : Dynamic State Management and Document Title Update with useEffect (hooks -> useEffect -> EffectChallenge.jsx , index.css)

//* Description: In this challenge, you'll create a React component that dynamically manages state using `useState` and `useEffect` hooks. Your component will include:

//? 1. A counter that increments when a button is clicked.
//? 2. An input field where users can type their name.
//? 3. The document title will update to show the current count.
*/

import { useEffect, useState } from "react";
import "./index.css";

export const Challenge = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("thapa");

    // Order matters! Keep Hooks in the same order across renders
    useEffect(() => {
        document.title = `count: ${count}`; // change title also
    }, [count]);

    useEffect(() => { 
        console.log(name);
    }, [name]); // dependency array -> ak-ak akshar -> console ma print thai...

    return (
        <div className="container effect-container">
            <h1>useEffect Challenge</h1>
            <p>Count: <span> {count} </span> </p>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <p>Name: <span> {name} </span> </p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    );
};