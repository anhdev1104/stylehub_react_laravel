import axios from 'axios';
import { useEffect, useState } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

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
        <section className="w-[35%]">
          <h2 className="section-heading section-heading-2">Learn how to build and grow your online store</h2>
          <p className="mt-[18px] section-desc-1">
            Get insider tips and step-by-step guidance from eCommerce experts and successful Wix Merchants.
          </p>
        </section>
        <div className="flex flex-wrap mt-[70px] -mx-[15px]">
          {blogs.map(blog => (
            <article
              key={blog.id}
              className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] transition-all duration-500 ease-in-out hover:scale-110 scale-100"
            >
              <a href="#!">
                <img src={`./src/assets/img/home/blog/${blog.image}`} alt="" className="w-full" />
              </a>
              <p className="h-[60px] mt-[25px] overflow-hidden text-ellipsis blog-info_desc section-desc-1">
                {blog.heading}
              </p>
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
