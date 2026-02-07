// L63 :- prop drilling problem  (hooks -> contextAPI -> PropDrilling.jsx)
export const ParentComponent = () => {
  return (
    <>
      <h1 style={{ padding: "2rem", background: "#222", color: "#fff" }}>Component A</h1>
      <ChildComponent data="React JS" />
    </>
  );
};

const ChildComponent = (props) => {
  return (
    <>
      <h1 style={{ padding: "2rem", background: "#222", color: "#fff" }}>Hello, I am component B</h1>
      <GrandChildComponent data={props.data} />
    </>
  );
};

const GrandChildComponent = (props) => {
  return (
    <>
      <h1 style={{ padding: "2rem", background: "#222", color: "#fff" }}>Hello, I am component C</h1>
      <GrandGrandChildComponent data={props.data} />
    </>
  );
};

const GrandGrandChildComponent = (props) => {
  return (
    <>
      <h1 style={{ padding: "2rem", background: "#222", color: "#fff" }}>Hello, I love {props.data}</h1>
    </>
  );
};

