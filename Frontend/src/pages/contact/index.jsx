import Button from '../../components/button';
import InputContact from './components/InputContact';
import TextareaContact from './components/TextareaContact';

const ContactPage = () => {
  return (
    <main className="container-page">
      <div className="my-[100px] max-lg:w-[80%] max-lg:mx-auto max-md:w-[90%] max-sm:w-[100%]">
        <h2 className="section-heading section-heading-2">Let’s talk</h2>
        <div className="mt-[55px]">
          <div className="flex gap-[30px] max-lg:w-full max-lg:flex-col">
            <div className="flex-grow-0 flex-shrink-0 basis-auto w-[35%] max-lg:w-full">
              <div className="w-full h-[540px] relative p-[30px] bg-yellow max-lg:h-auto">
                <h3 className="section-heading-4">Contact information</h3>
                <p className="mt-[18px] text-dark section-desc-1">
                  Fill up the form and our team will get back to you withing 24 hours
                </p>

                <ul className="mt-[28px]">
                  <li className="mt-[18px]">
                    <a href="tel:0823240040" className="flex items-center gap-3 text-lg leading-[1.67] max-sm:text-sm">
                      <img src="/assets/icons/phone.svg" alt="" />
                      0823240040
                    </a>
                  </li>
                  <li className="mt-[18px]">
                    <a
                      href="mailto:trunghoang.240500@gmail.com"
                      className="flex items-center gap-3 text-lg leading-[1.67] max-sm:text-sm"
                    >
                      <img src="/assets/icons/mailto.svg" alt="" />
                      trunghoang.240500@gmail.com
                    </a>
                  </li>
                  <li className="mt-[18px]">
                    <a
                      href="https://www.google.com/maps/@16.056216,108.1823131,16.17z?entry=ttu"
                      className="flex items-center gap-3 text-lg leading-[1.67] max-sm:text-sm"
                      target="_blank"
                    >
                      <img src="/assets/icons/location.svg" alt="" />
                      Vo Gia Cu
                    </a>
                  </li>
                </ul>
                <img src="/assets/icons/diagonal.svg" alt="" className="absolute bottom-0 left-0 max-lg:hidden" />
                <img src="/assets/icons/triangle-large.svg" alt="" className="absolute bottom-0 right-0" />
              </div>
            </div>
            <div className="flex-grow-0 flex-shrink-0 basis-auto w-[63%] max-lg:w-full">
              <form className="w-full flex flex-col gap-[30px]">
                <InputContact type="text" name="fullname" placeholder="Your name" />
                <InputContact type="email" name="email" placeholder="Your email address" />
                <InputContact type="tel" name="phone" placeholder="Your phone number" />
                <TextareaContact name="message" placeholder="Write your message" />
                <Button classname="w-fit bg-green text-white translate-y-0 active:translate-y-2">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
