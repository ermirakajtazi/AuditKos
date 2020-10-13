// import React from 'react';
// import { Route, Redirect, BrowserRouter } from "react-router-dom";
// // import { isAuthenticated } from "FirebaseConfig";
// import Header  from '../shared/Header';
// import Footer from '../shared/Footer';
// const DefaultLayout = ({ component: Component, ...rest }) => {
//     return (
//         <BrowserRouter>
//             <Route
//                 {...rest}
//                 render={matchProps => (
//                     <div id='main-container'>
//                         <Header />
//                         <div className='main-content'>
//                             <Component {...matchProps} />
//                         </div>
//                         <Footer />
//                     </div>
//                 )}
//             />
//         </BrowserRouter>
//     );
// };
// export default DefaultLayout
// // export const AuthRoute = ({ component: Component, ...rest }) => {
// //   return (
// //     <Route
// //       {...rest}
// //       render={props =>
// //         isAuthenticated() ? (
// //           <Component {...props} />
// //         ) : (
// //           <Redirect
// //             to={{
// //               pathname: "/sign-in",
// //               state: { from: props.location },
// //             }}
// //           />
// //         )
// //       }
// //     />
// //   );
// // };