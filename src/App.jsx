// L80 : Build Awesome Todo App using Hooks in react (UpdatedTodo folder)
/*  
import React from 'react';
import Todo from "./Todo";
const App = () => {
    return (
        <>
            <Todo/>
        </>
    );
}; 
export default App;
*/




// L34 :- Todo App  & best way to pass the key  ("Todo" folder)
/*  
import React from 'react';
import { Todo } from "./projects/Todo/Todo";

const App = () => {
  return <Todo />;
};

export default App;
*/



// L45,46 :- useState() hook  (hooks -> useState folder -> CounterChallenge.jsx)
// L47 :- Controlled vs uncontrolled components (hooks -> useState folder -> Controlled.jsx)
/*
import React from 'react';
import { CounterChallenge } from "./hooks/useState/CounterChallenge";
import { ControlledForm } from './hooks/useState/Controlled';
const App = () => {
  return <>
    <CounterChallenge/> 
    <ControlledForm/>
  </>
};

export default App;
*/



// L48 :- Registration Form Using Multiple State Variables (Bad way) (hooks -> useState folder -> Registration.jsx , index.css)
// L49 :- Registration Form Using Object State with Spread Operator (Good way) (hooks -> useState folder -> Registration.jsx , index.css)
// L50 :- Login Form (Bad way) (hooks -> useState folder -> LoginForm.jsx , index.css)
// L51 :- Contact Form (Good way) (hooks -> useState folder -> ContactForm.jsx , index.css)
/*  */
import React from 'react';
import { RegistrationForm } from './hooks/useState/Registration';
import { LoginForm } from './hooks/useState/LoginForm';
import { ContactForm } from './hooks/useState/ContactForm';
const App = () => {
  // return <RegistrationForm/>; 
   return <LoginForm/>;
  // return <ContactForm/>;
};
export default App;





// L52 :- useEffect Hook with Dependency Array (hooks -> useEffect -> index.jsx , index.css)
// L53 :- useEffect challenge : Dynamic State Management and Document Title Update with useEffect (hooks -> useEffect -> EffectChallenge.jsx , index.css)
// L54 :- Use of clean-up function in useEffect (hooks -> useEffect -> CleanUp.jsx , index.css)
/*  
import React from 'react';
import { Challenge } from './hooks/useEffect/EffectChallenge';
import { CleanUp } from './hooks/useEffect/CleanUp';
const App = () => {
  // return <ReactUseEffect/>;
  // return <Challenge/>
  return <CleanUp/>
};
export default App;
*/




// L55 :- How Not to fetch API in reactJs (hooks -> useEffect -> HowNotToFetchApi.jsx , pokemon.css)
// L56 :- How to fetch API in reactJs (hooks -> useEffect -> HowNotToFetchApi.jsx , pokemon.css)
/*  
import React from 'react';
import { HowNotToFetchApi } from './hooks/useEffect/HowNotToFetchApi';
const App = () => {
  return <HowNotToFetchApi/>
};
export default App;
*/



// L60 :- useRef() hook in reactJs (hooks -> useRefs -> index.jsx)
// L61 :- forwardRef() hook & it's alternative in v19 (hooks -> useRefs -> ForwardRefs.jsx)
// L62 :- useId() hook  (hooks -> useID -> index.jsx)
/*  
import React from 'react';
import { UseRef } from './hooks/useRefs/index.jsx';
import { ForwardRefs } from './hooks/useRefs/ForwardRef.jsx';
import { UseId } from './hooks/useID/index.jsx';
const App = () => {
  // return <UseRef/>
  // return <ForwardRefs/>
  return <UseId/>
};
export default App;
*/




// L63 :- prop drilling problem  (hooks -> contextAPI -> PropDrilling.jsx)
// L63 :- Solution :- Context API  (hooks -> contextAPI -> index.jsx,Home.jsx,About.jsx,Services.jsx)   
// L66 :- create custom Hook  (hooks -> contextAPI -> index.jsx,Home.jsx,About.jsx,Services.jsx)  
// L67 :- use() Hook  (hooks -> contextAPI -> index.jsx,Home.jsx,About.jsx,Services.jsx)    
// L68 :- Dark-Light mode using Tailwind css  (hooks -> contextAPI -> DarkLight.jsx)    
/*  
import React from 'react';
import { ParentComponent } from './hooks/contextAPI/PropDrilling';
import { BioProvider } from './hooks/contextAPI';
import { Home } from './hooks/contextAPI/Home';
import { About } from './hooks/contextAPI/About';
import { Services } from './hooks/contextAPI/Services';
import { DarkLight,ThemeProvider } from './hooks/contextAPI/DarkLight';
const App = () => {
  // return <ParentComponent/>

  // return (
  //   <>
  //     <BioProvider>
  //       <Home/>
  //       <About/>
  //       <Services/>
  //     </BioProvider>
  //   </>
  // );

  return (
    <>
      <ThemeProvider>
        <DarkLight/>
      </ThemeProvider>
    </>
  );
};
export default App;     */



   
// L69 :- useReducer() Hook  (hooks -> useReducer -> index.jsx)   
// L70 :- Improve useReducer() Hook  (hooks -> useReducer -> index.jsx)  

// L71 :- React.memo()  (hooks -> Memo -> MemoCount.jsx, ReactMemo.jsx)    
// L72 :- useMemo() Hooks  (hooks -> Memo -> UseMemo.jsx) 
// L73 :- React.memo() vs useMemo() Hooks  (hooks -> Memo -> MemoCount.jsx, ReactMemo.jsx)    
// L74 :- useCallBack() Hooks  (hooks -> Memo -> useCallBack.jsx)    
/*  
import React from 'react';
import { ReducerComp } from './hooks/useReducer';
import { ReactMemo } from './hooks/Memo/ReactMemo';
import MemoParentComponent from './hooks/Memo/UseMemo';
import UseCallback from './hooks/Memo/useCallBack';

const App = () => {
  // return <ReducerComp/>

  // return <ReactMemo/>
  // return <MemoParentComponent/>
  // return <ReactMemo/>
  return <UseCallback/>
};
export default App;     */