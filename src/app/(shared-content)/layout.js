import Navbar from '@/components/Navbar';
import React from 'react';

const SharedContent = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='h-full'>
            {children}
            </div>
            <footer className='text-center font-bold text-gray-500 text-sm py-4'>
                &copy; {new Date().getFullYear()} Code with Reaxul. All rights reserved.
            </footer>
        </div>
    );
};

export default SharedContent;