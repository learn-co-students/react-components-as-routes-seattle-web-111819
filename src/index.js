import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';

ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />  
            {/* same as above. */}
      {/* <Route path="/" render={() => <h1>Home!</h1>} /> */}
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>),  
  document.getElementById('root')
);

//refactor into own components & import components above. 

// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }

// const Navbar = () =>
//   <div>
//     <NavLink
//       to="/"
//       /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//       exact
//       /* add styling to Navlink */
//       style={link}
//       /* add prop for activeStyle */
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Home</NavLink>
//     <NavLink
//       to="/about"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >About</NavLink>
//     <NavLink
//       to="/login"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'darkblue'
//       }}
//     >Login</NavLink>
//   </div>;


// const Home = () => <h1>Home!</h1>;
// const About = () => <h1>This is my about component!</h1>;
//login stays the same cuz form (get rid of {} & return() & <div> outside of form </div> . Give for a title <h1>Login</h1> inside form)

// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };

// const About = () => {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// };


// const Login = () => 
//   <form>
//     <h1>Login</h1>
//     <div>
//       <input type="text" name="username" placeholder="Username" />
//       <label htmlFor="username">Username</label>
//     </div>
//     <div>
//       <input type="password" name="password" placeholder="Password" />
//       <label htmlFor="password">Password</label>
//     </div>
//     <input type="submit" value="Login" />
//   </form>;