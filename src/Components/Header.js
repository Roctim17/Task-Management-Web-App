import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }
    const menuItems = <>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/task">Task</Link></li>
        <li><Link to="/Member">Members</Link></li>
        <li>  {user ? <div className="">
            <div className="">
                {user.displayName}
            </div>
        </div> : <></>}</li>
        <li>  {user ? <button className="btn btn-ghost" onClick={logout}>Sign Out</button> : <></>} </li>
    </>

    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/">
                        <div class="w-12 rounded-full">
                            <img src="https://i.ibb.co/vq02Nvt/tesk-logo-removebg-preview.png" alt="tesk-logo-removebg-preview" border="0" />
                        </div>
                    </Link>
                    <Link to="/" class="btn btn-ghost normal-case text-xl">Task Management App</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">

                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;