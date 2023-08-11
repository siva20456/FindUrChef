import '../Result.css'


import Logo from './FindUrChef1.jpg'

const Login = ({updateType}) => {
    console.log('Login')
    return(
            <div className="login-container container ml-auto">
                <img src={Logo} alt='logo' className='brand-logo' />
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
                {/* <button className='btn-primary'>Login with Google</button> */}
                <p className='text-secondary mt-2' style={{fontSize:12}}>Didn't have account?<button className='signup-btn' onClick={() =>updateType('SignUp')}>Sign Up</button></p>
            </div>
    )
}

export default Login