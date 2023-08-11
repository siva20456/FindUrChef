import Logo from './FindUrChef3.jpg'

import '../Result.css'

const SignUp = ({updateType}) => {
    return(
        <div className="login-container container ml-auto">
                <img src={Logo} alt='logo' className='brand-logo' />
                <form>
                    <div className="input-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required/>
                    </div>
                    <div className="input-group">
                    <label for="username">UserId</label>
                    <input type="text" id="username" name="username" required/>
                    </div>
                    <div className="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required />
                    </div>
                    <div className="input-group">
                    <label for="mobile">Mobile</label>
                    <input type="phone" id="mobile" name="mobile" required/>
                    </div>
                    <button className="login-button" type="submit">Sign Up</button>
                </form>
                {/* <button className='btn-primary'>Login with Google</button> */}
                <p className='text-secondary mt-2' style={{fontSize:12}}>Already have an account?<button className='signup-btn' onClick={() => updateType('Login')}>Login</button></p>
            </div>
    )
}

export default SignUp