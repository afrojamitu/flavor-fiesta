import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    const {loginUser, handleGoogleSignIn, handleGithubSignIn} = useContext(AuthContext);
    // console.log(loginUser);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    let location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                navigate(from, { replace: true })
                form.reset()
                setError('');
            })
            .catch(error => {
                setError(error.message)
                console.log(error);
            })

    }

    const handleGoogle = () =>{
        handleGoogleSignIn();
        setError('');
    }

    const handleGitLogin = () =>{
        handleGithubSignIn();
        setError('');
    }

    return (
        <div className='md:w-9/12 mx-10 md:mx-auto bg-base-100 py-5 rounded-lg'>

            <form onSubmit={handleSignIn} className='md:w-3/5 mx-auto'>
                <h1 className='text-2xl font-bold text-center mb-5'>Login Your Account</h1>
                <hr />
                <div className='my-5'>
                    <label htmlFor="email" className='block text-xl font-bold text-slate-500 mb-2'>Email Address</label>
                    <input type="email" name='email' placeholder="Your Email" className=" w-full border-2 border-slate-200 py-3 ps-4 rounded-lg" />
                </div>

                <div className='mb-8'>
                    <label htmlFor="password" className='block text-xl font-bold text-slate-500 mb-2'>Password</label>
                    <input type="password" name='password' placeholder="Password" className=" w-full border-2 border-slate-200 py-3 ps-4 rounded-lg" />
                </div>

                <button className=" w-full bg-slate-700 py-2 ps-4 rounded text-white text-xl font-bold" >Login</button>

                <p className='text-center my-4 text-slate-600'>Don't have an account?  <Link className='text-red-500' to='/register'>Register Here.</Link></p>

                <p className='text-red-600 text-center'>{error}</p>

                <div className='flex flex-col gap-5 my-5 w-9/12 mx-auto'>
                    <h1 className='text-center'>Or</h1>
                    <button onClick={handleGoogle} className=" w-full border-2 py-2 ps-4 rounded font-bold flex items-center gap-3 justify-center" > <FaGoogle></FaGoogle> Login with Google</button>

                    <button onClick={handleGitLogin} className=" w-full border-2 py-2 ps-4 rounded font-bold flex items-center gap-3 justify-center" > <FaGithub></FaGithub> Login with Github</button>
                </div>
            </form>
            
        </div>
    );
};

export default Login;