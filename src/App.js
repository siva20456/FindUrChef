// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes,Route, Navigate} from 'react-router-dom';

import Landing from './components/LandingPage/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/kh' element={
          <div className="login-container">
          <h1>Login</h1>
          <form>
            <div className="input-group">
              <label for="username">Username</label>
              <input type="text" id="username" name="username" required/>
            </div>
            <div className="input-group">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button className="login-button" type="submit">Login</button>
          </form>
        </div>
        } />
        <Route path='/' element={<Landing />} />
        <Route path='*' element={<Navigate to='/'/>} />
      </Routes>
    </Router>
  );
}

export default App;
