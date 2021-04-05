import './App.css';
import SignUp from './Component/SignUp';
import ForgotPassword from './Component/ForgotPassword';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Home from './Component/Home';
import Nav from './Component/Nav';
import history from './Component/history';
import AdminViewDetails from './Component/AdminViewDetails';
import DeleteUser from './Component/DeleteUser';
import AdminHomePage from './Component/AdminHomePage';
import Login from './Component/Login';
import UpdateUser from './Component/UpdateUser';


 

function App() {
  return (
    <div className="App">
     
     <Router history={history}>
     <Nav />
       <Switch>
         <Route path="/SignUp" component={SignUp} />
         <Route path="/ForgotPassword" component={ForgotPassword} />
         <Route path="/AdminHomePage" component={AdminHomePage} />
         <Route path="/AdminViewDetails" component={AdminViewDetails} />
         <Route path="/DeleteUser" component={DeleteUser} />
         <Route path="/Login" component={Login} />
         <Route path="/UpdateUser" component={UpdateUser} />
       </Switch>  
  </Router> 
     


    {/*<DeleteUser /> 

     <AdminViewDetails /> */}
     {/*<Router history={history}>
     <Route path="/AdminHomePage" component={AdminHomePage} />
    </Router> */}

    </div>
  );
} 

export default App;
