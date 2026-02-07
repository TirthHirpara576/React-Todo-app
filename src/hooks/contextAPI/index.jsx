// L63 :- Solution :- Context API  (hooks -> contextAPI -> index.jsx,Home.jsx,About.jsx,Services.jsx) 
/*  
import { createContext } from "react";

// 1 step
export const BioContext = createContext(); // createContext(); thi je variable banavye -> te Context-component hoi

// 2nd step
export const BioProvider = ({ children }) => {   // It must be wrap in App.jsx
    const myName = "Tirth Hirpara";
    const myAge = 20;
    console.log(children); // we must pass all children(<Home/>,<About/>,<Services/>) of <BioProider/> to App.jsx  (Otherwise data nai male...)

    return ( // Jyare ak karta vadhare data hoi, to object na form pass karvana... (Key,Value banne na same hovathi -> koi pan ak lakhiye -> to pan react samji jai...)
        <BioContext.Provider value={{ myName:myName, myAge:myAge }}>
            {children} 
        </BioContext.Provider>
    );
};
*/



// L66 :- create custom Hook  (hooks -> contextAPI -> index.jsx,Home.jsx,About.jsx,Services.jsx)
/*
import { createContext, useContext } from "react";

// 1 step
export const BioContext = createContext(); // createContext(); thi je variable banavye -> te Context-component hoi

// 2nd step
export const BioProvider = ({ children }) => {   // It must be wrap in App.jsx
    const myName = "Tirth Hirpara";
    const myAge = 20;
    console.log(children); // we must pass all children(<Home/>,<About/>,<Services/>) of <BioProider/> to App.jsx  (Otherwise data nai male...)

    return ( // Jyare ak karta vadhare data hoi, to object na form pass karvana... (Key,Value banne na same hovathi -> koi pan ak lakhiye -> to pan react samji jai...)
        <BioContext.Provider value={{ myName:myName, myAge:myAge }}>
            {children} 
        </BioContext.Provider>
    );
};

// Custom Hook
export const useBioContext = () => {
    const context = useContext(BioContext);
    if (context === undefined) {  // in App.jsx, Koi pan child component -> <BioProvider> ni outside lakhyo -> we will get error in Console.
        throw new Error("Component must be wrapped with BioProvider");
    }
    return context;
};
*/



// L67 :- use() Hook  (hooks -> contextAPI -> index.jsx,Home.jsx,About.jsx,Services.jsx)
import { createContext, use } from "react";

// 1 step
export const BioContext = createContext(); // createContext(); thi je variable banavye -> te Context-component hoi

// 2nd step
export const BioProvider = ({ children }) => {   // It must be wrap in App.jsx
    const myName = "Tirth Hirpara";
    const myAge = 20;
    console.log(children); // we must pass all children(<Home/>,<About/>,<Services/>) of <BioProider/> to App.jsx  (Otherwise data nai male...)

    return ( // Jyare ak karta vadhare data hoi, to object na form pass karvana... (Key,Value banne na same hovathi -> koi pan ak lakhiye -> to pan react samji jai...)
        <BioContext.Provider value={{ myName:myName, myAge:myAge }}>
            {children} 
        </BioContext.Provider>
    );
};

// Custom Hook
export const useBioContext = () => {
    const context = use(BioContext);
    if (context === undefined) {  // in App.jsx, Koi pan child component -> <BioProvider> ni outside lakhyo -> we will get error in Console.
        throw new Error("Component must be wrapped with BioProvider");
    }
    return context;
};