import React from 'react';

const Header = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <a href="">
                        <div class="w-12 rounded-full">
                            <img src="https://i.ibb.co/vq02Nvt/tesk-logo-removebg-preview.png" alt="tesk-logo-removebg-preview" border="0" />
                        </div>
                    </a>
                    <a class="btn btn-ghost normal-case text-xl">Tesk Management App</a>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">

                        <li><a>Dashboard</a></li>
                        <li><a>Tesk</a></li>
                        <li><a>Members</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;