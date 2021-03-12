import logo from './logo.svg';
import './App.css';
import './bootstrap-5.0.0-beta2-dist 2/css/bootstrap.min.css'
import image from './GabonFlag.png';

function App() {
  return (
      <form>
        <img className="mb-4" src={image} alt="image" width="70" height="70"/>
        <h1 className="sign">Please sign in</h1>
        <label for="inputEmail" className="visually-hidden">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
        <label for="inputPassword" className="visually-hidden">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
      </form>

  );
}

export default App;
