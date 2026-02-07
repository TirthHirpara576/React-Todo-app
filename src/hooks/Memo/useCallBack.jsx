// L74 :- useCallBack() Hooks  (hooks -> Memo -> useCallBack.jsx)    
import { memo,useCallback,useState } from "react";

// Eventhough, I use memo(), But If i write simple functions -> memo() re-render the <Button/> all the time.
// (because every time new instance/refrence will be created of this 2 simple functions.)
const Button = memo(({ onClick, children }) => { // Child Component
    console.log(`Rendering button : ${children}`);

    return (
        <button className={`text-black mb-4 py-2 px-5 ${children === "Increment" ? "bg-green-400" : "bg-red-400"}`}  onClick={onClick}>
            {children}
        </button>
    );
});

export default function UseCallback() {  // Parent Component
    const [count,setCount] = useState(0);

    // const increment = () => {
    //      console.log("Clicking increment button")
    //     setCount((prevCount) => prevCount+1);
    // };
    const increment = useCallback(() => {  // Memoize the increment function
        console.log("Clicking increment button")
        setCount((prevCount) => prevCount+1);
    } , []);

    // const decrement = () => {
    //     console.log("Clicking decrement button")
    //     setCount((prevCount) => prevCount-1);
    // };
    const decrement = useCallback(() => {  // Memoize the decrement function
        console.log("Clicking decrement button")
        setCount((prevCount) => prevCount-1);
    } , []);

    return (
        <div className="p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white">
            <h1 className="mb-4">Count : {count}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    );
}

