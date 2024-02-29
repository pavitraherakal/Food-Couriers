/*

Nested Element
<div id="parent">
    <div id="child1">
        <h1> i am h1 tag<\h1>
        <h2> i am h2 tag<h2>
    </div>
<div id="child2">
        <h2><h2>
    </div>
<\div>
*/

const heading=React.createElement(
     "h1",
     {id:"heading"},
     "Hellow World from React!");
    
     const parent=React.createElement("div",{id:"parent"},
     [React.createElement("div",
     {id:"child1"},
     [React.createElement("h1",{},"i am H1 Tag"),
     React.createElement("h2",{},"i am H2 Tag")]),
     React.createElement("div",
     {id:"child2"},
     [React.createElement("h1",{},"i am H1 Tag"),
     React.createElement("h2",{},"i am H2 Tag")])]);
     const root= ReactDOM.createRoot(document.getElementById("root"));
   console.log(parent); //object     
root.render(parent);//put int dom and convert in to html