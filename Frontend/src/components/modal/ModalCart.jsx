import ModalBase from './ModalBase';
import Button from '../button';

const ModalCart = ({ ...props }) => {
  return (
    <ModalBase {...props}>
      <div className="z-[999] flex items-center justify-center bg-white transition-all min-w-[1000px] w-full">
        <div className="py-[70px] w-full">
          <div className="flex">
            <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4 px-[50px] max-h-[500px] overflow-y-auto cart-modal">
              <article>
                <div className="flex gap-[18px] mt-[18px]">
                  <img src="/assets/img/product/detail/detail1.png" alt="" className="w-[100px] h-[100px]" />
                  <div>
                    <p className="text-lg font-semibold">Modern Green Sweater</p>
                    <p className="mt-1 mb-2 section-desc-2">Cart ID: 12345678910</p>
                    <p className="text-lg font-semibold">$60</p>
                  </div>
                </div>
                <div className="flex items-center justify-end pb-[18px] border-b border-grey">
                  <div className="flex items-center gap-[30px] cursor-pointer text-lg text-red-500">
                    <i className="fa-solid fa-trash-can"></i>
                  </div>
                </div>
              </article>
            </div>
            <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4 px-[50px]">
              <div className="text-lg font-semibold-wrap flex items-center justify-between pb-4 mb-5 border-b border-grey">
                <p className="section-heading-4">Cart order total (3)</p>
                <p className="section-heading-4">$582</p>
              </div>
              <p className="text-light font-normal text-lg">Congrats! You get Free Shipping.</p>
              <p className="text-light font-normal text-sm mt-3">
                Excludes furniture, mattresses & other exclusions apply.
              </p>

              <Button location="/cart" classname="mt-5 w-full">
                View Cart
              </Button>
              <Button classname="mt-5 bg-yellow border-none text-dark hover:bg-yellow w-full">Check out</Button>
            </div>
          </div>
          <button className="absolute top-0 right-0 p-4 bg-yellowLight" onClick={props.onClose}>
            <img src="/assets/icons/close.svg" alt="" />
          </button>
        </div>
      </div>
    </ModalBase>
  );
};

export default ModalCart;
