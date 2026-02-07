// L63 :- Solution :- Context API  (hooks -> contextAPI -> index.jsx,Home.jsx,About.jsx,Services.jsx) 
/*
import { useContext } from "react";  
import { BioContext } from "."; 

export const Services = () => {
    const { myName, myAge } = useContext(BioContext);

    return (
        <section style={{ padding: "2rem", background: "#222", color: "#fff" }}>
            <h1>
                Hello Context API (Services.jsx). My name is {myName}. I am {myAge} yrs old
            </h1>
        </section>
    );
}; 
*/



// L66 :- create custom Hook  (hooks -> contextAPI -> index.jsx,Home.jsx,About.jsx,Services.jsx)
import { useContext } from "react";  
import { useBioContext } from ".";

export const Services = () => {
    const { myName, myAge } = useBioContext();

    return (
        <section style={{ padding: "2rem", background: "#222", color: "#fff" }}>
            <h1>
                Hello Context API (Services.jsx). My name is {myName}. I am {myAge} yrs old
            </h1>
        </section>
    );
};
