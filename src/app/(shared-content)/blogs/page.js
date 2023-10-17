import loadBlogs from '@/app/utils/loadBlogs';
import Link from 'next/link';
import React from 'react';

const BlogPage = async() => {
  const blogs=await loadBlogs();
    return (
        <div className='m-5'>
            <h1 css={{ fontSize: '3rem', fontWeight: 'bold' }}>Welcome to my Blog</h1>
            {
                blogs.map(({id,body,title}) => (
                    <div key={id} className='p-5 border m-2 shadow-md'>
                        <h3 className='font-bold'>{id}. {title}</h3>
                        <p>{body}</p>
                        <Link className='bg-purple-500 px-2 rounded' href={`/blogs/${id}`}>details</Link>
                    </div>
                ))
            }
        </div>
    );
};

export default BlogPage;