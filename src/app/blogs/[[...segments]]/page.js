import React from 'react';

const DynamicBlog = ({ params }) => {
    console.log(params);
    const [id, date]=params.segments || [];
    return (
        <div>
            this is blog of {id} from {date} <br />
            this is dynamic route
        </div>
    );
};

export default DynamicBlog;