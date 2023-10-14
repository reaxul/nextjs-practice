import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
    const NavOptions = [
        {
            path: '/',
            title: 'Home',
        },
        {
            path: 'about',
            title: 'About',
        },
        {
            path: 'blogs',
            title: 'Blogs',
        },
        {
            path: 'dashboard',
            title: 'Dashboard',
        },
    ]
    return (
        <div className='flex justify-between container mx-auto'>
            <p className='text-2xl font-bold'>Practice NextJs</p>
            <div>

                {
                    NavOptions.map(({ path, title }) => <NavLink exact={path==='/'} activeClassName="text-blue-500" className='mx-2' key={path} href={path}>{title}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Navbar;