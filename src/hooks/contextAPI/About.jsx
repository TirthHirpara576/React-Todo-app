// L63 :- Solution :- Context API  (hooks -> contextAPI -> index.jsx,Home.jsx,About.jsx,Services.jsx)  
/*  
import { useContext } from "react";
import { BioContext } from "."; 

export const About = () => {
    const { myName, myAge } = useContext(BioContext); 

    return (
        <section style={{ padding: "2rem", background: "#222", color: "#fff" }}>
            <h1>
                Hello Context API (About.jsx). My name is {myName}. I am {myAge} yrs old
            </h1>
        </section>
    );
}; 
*/




// L66 :- create custom Hook  (hooks -> contextAPI -> index.jsx,Home.jsx,About.jsx,Services.jsx)
/*
import { useBioContext } from "."; 

export const About = () => {

    const { myName, myAge } = useBioContext();

    return (
        <section style={{ padding: "2rem", background: "#222", color: "#fff" }}>
            <h1>
                Hello Context API (About.jsx). My name is {myName}. I am {myAge} yrs old
            </h1>
        </section>
    );
}; */



// L67 :- use() Hook  (hooks -> contextAPI -> index.jsx,Home.jsx,About.jsx,Services.jsx)
import { use } from "react";
import { BioContext } from "."; 

export const About = () => {

    // const { myName, myAge } = use(BioContext);

    const newHook = true;
    let myName, myAge;
    if (newHook) {
        ({ myName, myAge } = use(BioContext)); // basically, use() API ne if-condition/for-loop ma use kari shakay...
    }

    return (
        <section style={{ padding: "2rem", background: "#222", color: "#fff" }}>
            <h1>
                Hello Context API (About.jsx). My name is {myName}. I am {myAge} yrs old
            </h1>
        </section>
    );
};
