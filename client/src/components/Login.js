import Navbar from "./Nav";
import "../App.css"
const Login = () => {
    return (
        <div>
            <Navbar/>
  <section class="container-fluid">
    
    <section class="row justify-content-center">
      <section class="col-12 col-sm-6 col-md-4 app">
        <form class="form-container">
        <div class="form-email">
          <h4 class="text-center font-weight-bold"> Login </h4>
          <label for="InputEmail">Email id</label>
           <input type="email" class="form-control" id="InputEmail" aria-describeby="emailHelp" placeholder="Enter Email"/>
        </div>
        <div class="form-user">
          <label for="InputUsername">Username</label>
           <input type="text" class="form-control" id="InputUsername" aria-describeby="usernameHelp" placeholder="Enter Username"/>
        </div>
        <div class="form-password">
          <label for="InputPassword1">Password</label>
          <input type="password" class="form-control" id="InputPassword1" placeholder="Password"/>
        </div>
        <div class="submit">
        <button type="submit" class="btn btn-primary btn-block">Submit</button>
        </div>
        <div class="form-footer">
          <p> Don't have an account? <a href="register">Sign Up</a></p>
          
        </div>
        </form>
      </section>
    </section>
  </section>

        </div>
    );
 }
    export default Login;