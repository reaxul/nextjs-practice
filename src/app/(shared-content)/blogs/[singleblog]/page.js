import loadSingleBlog from '@/app/utils/loadSingleBlog';
import React from 'react';

const DynamicBlog = async ({ params }) => {
    const { id, title, body } = await loadSingleBlog(params.singleblog)
    return (
        <div className='p-5 border m-2 shadow-md'>
            <h3 className='font-bold'>{id}. {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default DynamicBlog;