// import React from "react";
// import { useEffect, useState } from "react";
// import breakPointObserver from "./breakPointObserver";
// import HomeMobile from "./indexMobile";
// import HomeDesktop from "./indexDesktop";

// const breakPoints = {
//   mobile: "(max-width:767px)",
//   desktop: "(min-width:768px)",
// };

// function App() {
//   const [breakPoint, isBreakPoint] = useState();
//   useEffect(() => {
//     breakPointObserver(breakPoints, isBreakPoint);
//   }, [breakPoint]);
//   return (
//     <div className="App">
//       {breakPoint == "mobile" && <HomeMobile />}
//       {breakPoint == "desktop" && <HomeDesktop />}
//     </div>
//   );
// }
// export default App;