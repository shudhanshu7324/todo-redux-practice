import React from "react";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflowX: "hidden",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h1 style={{textAlign:'center',marginTop:'50px'}}>Todo App</h1>

      <div style={{display:'flex', justifyContent:'center', marginTop:'50px', gap:'20px'}}>
        <input style={{height:'34px', width:'30vw', padding:'5px', outline:'none', fontSize:'15px', color:'red'}} type="text" placeholder="Enter Todo"/>
        <button style={{color:'white', fontWeight:'700', backgroundColor:'gray', padding:'10px', cursor:'pointer'}}>Add Todo</button>
      </div>
    </div>
  );
};

export default App;
