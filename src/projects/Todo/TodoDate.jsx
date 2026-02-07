// L34 :- Todo App  & best way to pass the key  ("Todo" folder)
import { useEffect, useState } from "react";

export const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    console.log("Hey");
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);// UseEffect() lakhiye to j clearInterval() lakhi shakay.
    // every time component is re-rendered (because state is changed). so, every time "Hey" will be displayed. 
    // so, To avoid memory-leak, we have to clean -> "interval"
  }, []); // empty dependency array --> first time j khali call thai

  return <h2 className="date-time">{dateTime}</h2>;
};