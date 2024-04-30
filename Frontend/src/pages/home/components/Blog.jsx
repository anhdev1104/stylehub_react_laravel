import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from '../../../components/button/Button';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  console.log('🚀 ~ Blog ~ blogs:', blogs);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/Blog');
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="container-page">
      <div className="mt-[150px]">
        <div className="flex items-center justify-between mb-[70px]">
          <div>
            <h2 className="section-heading section-heading-2 capitalize">Read our blogs</h2>
            <p className="w-[60%] mt-[18px] text-light section-desc-1">
              Get insider tips and step-by-step guidance from eCommerce experts and successful Wix Merchants.
            </p>
          </div>
          <Button>Read All Blog</Button>
        </div>
        <div className="flex flex-wrap mt-[70px] -mx-[15px]">
          {blogs.map(blog => (
            <article
              key={blog.id}
              className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] transition-all duration-500 ease-in-out hover:scale-110 scale-100"
            >
              <a href="#!">
                <img src={`${blog.image}`} alt="" className="w-full" />
              </a>
              <p className="h-[60px] mt-[25px] text-ellipsis line-clamp-2 section-desc-1">{blog.heading}</p>
              <a href="#!" className="flex items-center gap-[10px] mt-[30px] text-lg font-semibold underline">
                Read the blog
                <img src="./src/assets/icons/arrow-right.svg" alt="" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
