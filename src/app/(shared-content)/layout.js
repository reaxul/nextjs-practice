import Navbar from '@/components/Navbar';
import React from 'react';

const SharedContent = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}<footer className='text-center font-bold text-5xl'>this is footer</footer>
        </div>
    );
};

export default SharedContent;