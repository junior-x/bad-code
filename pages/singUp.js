// import React from "react";
// import { useEffect, useState } from "react";
// import breakPointObserver from "./breakPointObserver";
// import SingUpMobile from "./indexMobile";
// import SingUpDesktop from "./singUpDesktop";

// const breakPoints = {
//   mobile: "(max-width:767px)",
//   desktop: "(min-width:768px)",
// };

// export default function SingUp() {
//   const [breakPoint, isBreakPoint] = useState();
//   useEffect(() => {
//     breakPointObserver(breakPoints, isBreakPoint);
//   }, [breakPoint]);
//   return (
//     <div className="App">
//       {breakPoint == "mobile" && <SingUpMobile />}
//       {breakPoint == "desktop" && <SingUpDesktop />}
//     </div>
//   );
// }