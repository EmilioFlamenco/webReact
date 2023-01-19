
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { Home } from './component/Home'
import { Login } from './component/Login'
import { Register } from './component/Register';
import { AuthProvider } from './context/authContext'
import { ProtectedRoute } from './component/ProtectedRoute';



function App() {
  return (
    <div className=' bg-slate-300  h- screen text-black flex'>
      <AuthProvider>
        <Router>

          <Route exact path="/" component={
           
            Home
            
          } />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
