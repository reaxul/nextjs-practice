import React from 'react';

const DynamicBlog = ({ params }) => {
    console.log(params);
    const [id, title,body]=params.singleblog || [];
    return (
        <div>
            this is blog of {id} <br />
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default DynamicBlog;