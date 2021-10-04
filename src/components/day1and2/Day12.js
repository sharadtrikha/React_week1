// import React, { useState } from "react";
// import logo from "./logo.svg";

// import User from "./components/User";
// import ProductList from "./components/ProductList/ProductList";

// function Day12() {
//   //let showParagraph = false;
//   const [showParagraph, setShowParagraph] = useState(false);

//   // useState works -> when component is rendered for first time -> initialized value is taken
//   // React knows that this component is getting initialzed for the first time or not ?
//   // but when you component is re-evaluted -> value is retained after state change
//   // showParagraph is now managed by React. So, any change in showParagraph variable -> react updates your ui

//   const onClickHandler = () => {
//     console.log('State variable value', showParagraph);
//     setShowParagraph(true); // change my state variable called showParagraph from false to true
//     // magic here is -> it happens in a ASYNC way
//     // what this line actually does ? 
//     // 1. It schedules a call/request to update this state variable
//     // 2. Whenever state variable changes....component will get re-evaluate
//     console.log('State variable value', showParagraph);
//   };

//   const getPara = () => {
//     if(showParagraph) {
//       return (
//         <p id="para">
//           Hello, I've learnt to use the full-stack evaluation tool. This makes
//           me so happy
//         </p>
//       )
//     } else {
//       return null
//     }
//   }




//   console.log('lets print latest state of state variable - showParagraph', showParagraph);

//   return (
//     <div>
//       <button id="click" onClick={onClickHandler}>
//         Click me to show paragraph
//       </button>
//       {getPara()}
//       <User userId="df3" />
//     </div>
//   );
// }
// export default Day12;
