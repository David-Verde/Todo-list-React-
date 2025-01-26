import React, { useContext } from 'react';
import { authServices } from '../services/authServices';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';





const Navbar = () => {
    const isAuthenticated = authServices.isAuthenticated();

    const handlelogout = () => {
        authServices.logout();
        window.location.href = '/login';
    };

    return (
        <nav className='flex justify-between bg-gray-800 p-4 '> 

<div>
<div  className='text-xl font-bold text-white'>Task Manager</div>

</div>
<div className='space-x-4'>

    {isAuthenticated ? (
        <>
        <div className='flex flex-col items-center'> <div><a className='text-xl font-bold text-white'>Dashboard</a></div>
        <Button className='mb-4 w-28' onClick={handlelogout}>Logout</Button></div>
       </>
    ) : (
        <>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link></>
    )}

</div>

        </nav>
    );
    };

    export default Navbar;