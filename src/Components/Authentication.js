// import React from 'react';
// import { withRouter } from 'react-router';
// import SellerProfile from './sellerProfile';
// import sellerlogin from './sellerLogin';

// export default function requireAuth(Component) {

//   class AuthenticatedComponent extends React.Component {

//     componentWillMount() {
//         console.log( this.props.match.params.isLoggedIn);
//       this.checkAuth();
//     }

//     checkAuth() {
//       if ( ! this.props.match.params.isLoggedIn) {
//         const location =  this.props.match.params.isLoggedIn.location;
//         console.log(location);
//         const redirect = location.pathname + location.search;
//         this.props.router.push(`/SellerProfile?redirect=${sellerlogin}`);
//       }
//     }

//     render() {
//       return this.props.match.params.isLoggedIn
//         ? <SellerProfile { ...this.props } />
//         : null;
//     }

//   }

//   return withRouter(AuthenticatedComponent);
// }