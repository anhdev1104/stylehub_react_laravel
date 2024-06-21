import Button from '@/components/button';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      heading: 'How to start an online store',
      image: '/assets/img/fashion/blog/blog1.png',
    },
    {
      id: 2,
      heading: '7 examples of the best eCommerce websites to take notes from',
      image: '/assets/img/fashion/blog/blog2.png',
    },
    {
      id: 3,
      heading: 'How to start a t-shirt business: ultimate step-by-step guide',
      image: '/assets/img/fashion/blog/blog3.png',
    },
  ];

  return (
    <div className="container-page">
      <div className="mt-[150px] max-md:mt-20">
        <div className="flex items-center justify-between mb-[70px] max-md:mb-0">
          <div>
            <h2 className="section-heading section-heading-2 capitalize">Read our blogs</h2>
            <p className="w-[60%] mt-[18px] text-light section-desc-1 max-lg:w-full">
              Get insider tips and step-by-step guidance from eCommerce experts and successful Wix Merchants.
            </p>
          </div>
          <Button>Read All Blog</Button>
        </div>
        <div className="flex flex-wrap mt-[70px] -mx-[15px] max-md:mt-0">
          {blogs.map(blog => (
            <article
              key={blog.id}
              className="flex-grow-0 flex-shrink-0 basis-auto w-[33.3333333333%] px-[15px] transition-all duration-500 ease-in-out hover:scale-110 max-md:hover:scale-105 scale-100 max-lg:w-[50%] max-lg:mt-10 max-md:w-full"
            >
              <a href="#!">
                <img src={`${blog.image}`} alt="" className="w-full" />
              </a>
              <p className="h-[60px] mt-[25px] text-ellipsis line-clamp-2 section-desc-1">{blog.heading}</p>
              <a href="#!" className="flex items-center gap-[10px] mt-[30px] text-lg font-semibold underline">
                Read the blog
                <img src="/assets/icons/arrow-right.svg" alt="" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
