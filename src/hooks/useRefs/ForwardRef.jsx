// L61 :- forwardRef() hook & it's alternative in v19 (hooks -> useRefs -> ForwardRefs.jsx)

import { forwardRef, useId, useRef } from "react";

export const ForwardRefs = () => {  // Parent component --> <ForwardRefs/> 
  const username = useRef(null); // I'll get data without re-rendering the component.
  const password = useRef(null);

  const handelFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current.value);
  };

  return (
    <form onSubmit={handelFormSubmit}>
      <BeforeReact19Input label="username" ref={username} /> {/* Child component :- Uncontrolled component --> <BeforeReact19Input/>  */}
      <BeforeReact19Input label="password" ref={password} />
      <button>Submit</button>
    </form>
  );
};

/* I need to create BeforeReact19Input
const BeforeReact19Input = forwardRef((props, ref) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input type="text" ref={ref} />
    </div>
  );
});  */

// afterReactv19 (we can get data/ref using normal props OR destructuring)
const BeforeReact19Input = (props) => { 
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{props.label}</label>
      <input type="text" ref={props.ref} />
    </div>
  );
};
// OR
/*
const BeforeReact19Input = ({ label, ref }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" ref={ref} />
    </div>
  );
};  */