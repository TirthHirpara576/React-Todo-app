// L71 :- React.memo()  (hooks -> Memo -> MemoCount.jsx, ReactMemo.jsx)    
/*
import { useRef, memo } from "react";

export const Counts = memo(() => { // Wrapping a child component 
  const renderCount = useRef(0); // jyare-jyare aa component re-render thase -> tyare useRef() -> property -> .current is incremented
  console.log(renderCount);

  return (
    <div className="mt-3 font-display text-center">
      <p className="">
        Nothing changed here but Ive now rendered:
        <span className="text-red-600">{renderCount.current++} time(s)</span>
      </p>
    </div>
  );
});
// export default memo(Counts);  // Wrapping a child component  --> it will make sure, parent ma state variable(hook) change thavathi, aa component re-render nai thai 

*/




// L73 :- React.memo() vs useMemo() Hooks  (hooks -> Memo -> MemoCount.jsx, ReactMemo.jsx) 
import { useRef, memo } from "react";

export const Counts = memo(({bioData}) => { // Wrapping a child component 
  const renderCount = useRef(0); // jyare-jyare aa component re-render thase -> tyare useRef() -> property -> .current is incremented
  console.log(renderCount);

  return (
    <div className="mt-3 font-display text-center">
      <p className="">
        Nothing changed here but Ive now rendered:
        <span className="text-red-600">{renderCount.current++} time(s)</span>

        <p>My name is {bioData.name}</p> 
      </p>
    </div>
  );
});
// export default memo(Counts);  // Wrapping a child component  --> it will make sure, parent ma state variable(hook) change thavathi, aa component re-render nai thai 
