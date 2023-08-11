import Login from './Login'
import SignUp from './SignUp'
import {useState} from 'react'
import '../Result.css'


const Landing = () => {

    const [currentType,updateType] = useState('Login')



    return(
        <div className='landing-container p-5'>
            {currentType==='Login'?<Login updateType={updateType} />:<SignUp updateType={updateType} />}
        </div>
    )
}

export default Landing