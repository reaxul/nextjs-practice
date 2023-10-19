import loadBlogs from '@/app/utils/loadBlogs';
import loadSingleBlog from '@/app/utils/loadSingleBlog';

export const generateMetadata = async ({ params }) => {
    const { title } = await loadSingleBlog(params.singleblog);
    return {
        title
    }
}

export const generateStaticParams = async () => {
    const blogs = await loadBlogs();
    return blogs.map(({ id }) => ({
        singleblog: `${id}`
    }))
}
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