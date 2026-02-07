// L60 :- useRef() hook in reactJs (hooks -> useRefs -> index.jsx)
import { useRef } from "react";

export const UseRef = () => {
    // using javascript :-
    // const username = document.getElementById("username");
    // const password = document.getElementById("password");

    // username/password (Both are Object which have 1 property) -> current : null,
    const username = useRef(null); 
    const password = useRef(null);
    // console.log(username);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log(username.value, password.value);  // using JS
        console.log(username.current.value, password.current.value);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" id="username" placeholder="Enter username" ref={username} /> <br />
            <input type="text" id="password"  placeholder="Enter password" ref={password} /> <br />
            <button>Submit</button>
        </form>
    );
};