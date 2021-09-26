import React from "react";

interface Props {}

export const App = (props: Props) => {
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
      <text style={{ fontSize: 200, color: "gray" }}>0</text>
      <div style={{ flexGrow: 1, justifyContent: "space-between" }}>
        <button style={{ height: 44, margin: 8 }}>Incrementar</button>
        <button style={{ height: 44, margin: 8 }}>Decrementar</button>
      </div>
    </div>
  );
};

export default App;
