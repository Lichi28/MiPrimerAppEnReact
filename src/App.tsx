import React, { useState } from "react";

interface Props {}

export const App = (props: Props) => {
  const [contador, setContador] = useState(0);
  
  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        height: 500,
        flexGrow: 1,
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <text style={{ fontSize: 200, color: "gray" }}>{contador}</text>
      <div style={{ flexGrow: 1, justifyContent: "space-between" }}>
        <button onClick={incrementar} style={{ height: 44, margin: 8 }}>
          Incrementar
        </button>
        <button onClick={decrementar} style={{ height: 44, margin: 8 }}>
          Decrementar
        </button>
      </div>
    </div>
  );
};

export default App;
