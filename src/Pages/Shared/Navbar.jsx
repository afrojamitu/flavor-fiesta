import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }


    return (
        <div className='bg-blue-50'>
            <div className="navbar md:w-9/12 md:mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>

                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li tabIndex={0}>
                                <Link to='/' className='mr-10'>Home</Link>
                                <Link to='/blog'>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to='/' className='text-xl md:text-3xl font-bold'>Flavor<span className='text-red-500'>F</span>iesta</Link>
                </div>
                <div className="navbar-center hidden md:flex text-lg font-bold text-slate-700">
                    <ul className="menu menu-horizontal px-1 flex gap-4">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-red-600" : ""} >Home</NavLink>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "text-red-600" : ""} >Blog</NavLink>
                        

                    </ul>
                </div>
                <div className="navbar-end gap-4">

                    <label tabIndex={0}>
                        {
                        user && <img title={user?.displayName} className='w-10 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&usqp=CAU' />
                        } 
                    </label>


                    {
                    user ? <button onClick={handleLogout} className='bg-red-600 py-1 px-3 text-white font-bold rounded'>Logout</button> :
                    <Link to='/login' className='bg-red-600 py-1 px-3 text-white font-bold rounded'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;