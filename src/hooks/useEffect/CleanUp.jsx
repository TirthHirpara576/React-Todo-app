// L54 :- Use of clean-up function in useEffect (hooks -> useEffect -> CleanUp.jsx , index.css)

import { useEffect, useState } from "react";
import "./index.css";

export const CleanUp = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => { // it is an external API's --> and jyare external API aave, tyrae we need useEffect()
            setCount((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="container">
        <div className="counter">
            <p>My Subscribers on Youtube</p>
            <div className="odometer" id="odometer">
                {count}
            </div>
            <h3 className="title">
                Subscribers <br /> Realtime Counter
            </h3>
        </div>
        </div>
    );
};