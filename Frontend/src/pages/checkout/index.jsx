import Button from '@/components/button';
import { Checkbox, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const CheckoutPage = () => {
  return (
    <main className="container-page">
      <div className="pt-[100px] pb-[150px]">
        <div className="flex gap-[30px]">
          <div className="flex-shrink-0 flex-grow-0 w-2/4">
            <p className="section-heading-3">Billing details</p>
            <form action="" className="mt-[48px]">
              {/* <!-- Checkout form deliver --> */}
              <div className="mb-5">
                <label htmlFor="checkout-deliver" className="text-lg font-semibold">
                  Deliver to
                </label>
                <div className="relative grid gap-5">
                  <input
                    id="checkout-deliver"
                    type="text"
                    name="deliver"
                    className="w-full mt-3 p-[15px] border border-grey bg-white text-dark outline-none"
                    placeholder="Residence"
                  />
                </div>
              </div>
              {/* <!-- Checkout form country --> */}
              <div className="mb-5">
                <label htmlFor="checkout-country" className="text-lg font-semibold">
                  Country
                </label>
                <div className="relative grid gap-5">
                  <input
                    id="checkout-country"
                    type="text"
                    name="united-states"
                    className="w-full mt-3 py-[15px] pr-[70px] pl-[15px] border border-grey bg-white text-lg leading-[1.67] outline-none"
                    placeholder="United States"
                  />
                  <button className="absolute top-[40px] right-[25px]">
                    <img src="/assets/icons/arrow-down-complete.svg" alt="" />
                  </button>
                  <div
                    id="drop-checkout1"
                    className="w-full absolute left-0 top-full -translate-y-1 z-[1] flex-col gap-[10px] py-2 px-[15px] bg-white border-t-transparent border border-[#c4d1d0] rounded-r-[5px] hidden"
                  >
                    <a href="#!" className="section-desc-2">
                      Vietnamese
                    </a>
                    <a href="#!" className="section-desc-2">
                      China
                    </a>
                    <a href="#!" className="section-desc-2">
                      Indonesia
                    </a>
                    <a href="#!" className="section-desc-2">
                      Taiwan
                    </a>
                    <a href="#!" className="section-desc-2">
                      Laos
                    </a>
                  </div>
                </div>

                <div className="relative grid gap-5">
                  <input
                    id="checkout-country"
                    type="text"
                    name="address"
                    className="w-full mt-3 p-[15px] border border-grey bg-white text-dark outline-none"
                    placeholder="Your address"
                  />
                </div>
                <div className="relative grid gap-5 grid-cols-3">
                  <input
                    id="checkout-country"
                    type="text"
                    name="city"
                    className="w-full mt-3 p-[15px] border border-grey bg-white text-dark outline-none"
                    placeholder="City"
                  />
                  <div className="relative grid gap-5">
                    <input
                      id="checkout-country"
                      type="text"
                      name="state"
                      className="w-full mt-3 py-[15px] pr-[70px] pl-[15px] border border-grey bg-white text-lg leading-[1.67] outline-none"
                      placeholder="District"
                    />
                    <button className="absolute top-[40px] right-[25px]">
                      <img src="/assets/icons/arrow-down-complete.svg" alt="" />
                    </button>
                    <div
                      id="drop-checkout2"
                      className="w-full absolute left-0 top-full -translate-y-1 z-[1] flex-col gap-[10px] py-2 px-[15px] bg-white border-t-transparent border border-[#c4d1d0] rounded-r-[5px] hidden"
                    >
                      <a href="#!" className="section-desc-2">
                        Ngu Hanh Son
                      </a>
                      <a href="#!" className="section-desc-2">
                        Son Tra
                      </a>
                      <a href="#!" className="section-desc-2">
                        Thanh Khe
                      </a>
                      <a href="#!" className="section-desc-2">
                        Hai Chau
                      </a>
                      <a href="#!" className="section-desc-2">
                        Lien Chieu
                      </a>
                    </div>
                  </div>
                  <input
                    id="checkout-country"
                    type="text"
                    name="zip-code"
                    className="w-full mt-3 p-[15px] border border-grey bg-white text-dark outline-none"
                    placeholder="Zip code"
                    maxLength="6"
                  />
                </div>
                <div className="relative grid gap-5">
                  <input
                    id="checkout-country"
                    type="tel"
                    name="phone"
                    className="w-full mt-3 py-[15px] pr-[70px] pl-[15px] border border-grey bg-white text-lg leading-[1.67] outline-none"
                    placeholder="Your phone number"
                    pattern="(84|0[3|5|7|8|9])+([0-9]{8})"
                  />
                </div>
              </div>
              {/* <!-- Checkout form order --> */}
              <div className="mb-5">
                <label htmlFor="checkout-order" className="text-lg font-semibold">
                  Order note
                  <span className="section-desc-1">(optional)</span>
                </label>
                <div className="relative grid gap-5">
                  <textarea
                    className="mt-3 w-full h-[180px] p-[15px] border border-grey bg-white resize-none text-dark text-lg outline-none"
                    name="order-note"
                    id="checkout-order"
                    cols="30"
                    rows="10"
                    placeholder="Tell us what do you think"
                    maxLength="200"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
          <div className="flex-shrink-0 flex-grow-0 w-2/4">
            <div className="mb-[30px]">
              <p className="pb-[18px] border-b border-grey section-heading-4">Your order</p>
              <div className="py-[18px]">
                <div className="flex items-center justify-between mb-3">
                  <p className="section-desc-3">Original Price</p>
                  <p className="section-desc-3">$582.00</p>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <p className="section-desc-3">Savings</p>
                  <p className="section-desc-3">$82.00</p>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <p className="section-desc-3">Shipping</p>
                  <p className="section-desc-3">FREE</p>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <p className="section-desc-3">Estimated Sales Tax</p>
                  <p className="section-desc-3">$3.50</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-[18px] border-t border-grey">
                <p className="text-xl font-bold">Total</p>
                <p className="text-xl font-bold text-orange">$582.00</p>
              </div>
            </div>
            <RadioGroup>
              <div className="mt-[55px]">
                <p className="section-heading-3">Pay with</p>
                {/* <!-- Pay with card --> */}
                <div className="mb-[30px]">
                  <div className="flex items-center justify-between mt-[18px]">
                    <FormControlLabel value="card" control={<Radio color="success" />} label="Card" />
                    <div className="gap-[10px] flex items-center">
                      <img className="h-4" src="/assets/img/visa.png" alt="" />
                      <img className="h-4" src="/assets/img/masterCart.png" alt="" />
                    </div>
                  </div>
                  <form className="mt-[28px]" action="">
                    <div className="relative grid gap-5 grid-cols-2 ">
                      <input
                        id="checkout-email"
                        type="text"
                        name="numberCard"
                        className="w-full mt-3 p-[15px] border border-grey bg-white text-dark outline-none"
                        placeholder="Card number"
                        maxLength="20"
                      />
                    </div>
                    <div className="relative grid gap-5 grid-cols-2 ">
                      <input
                        id="checkout-email"
                        type="text"
                        name="Expiration-Date"
                        className="w-full mt-3 p-[15px] border border-grey bg-white text-dark outline-none"
                        placeholder="Expiration date"
                      />
                      <input
                        id="checkout-email"
                        type="text"
                        name="Security-code"
                        className="w-full mt-3 p-[15px] border border-grey bg-white text-dark outline-none"
                        placeholder="Security code"
                        maxLength="4"
                      />
                    </div>
                    <div className="relative grid gap-5 grid-cols-2 ">
                      <input
                        id="checkout-email"
                        type="text"
                        name="First-name"
                        className="w-full mt-3 p-[15px] border border-grey bg-white text-dark outline-none"
                        placeholder="First name in card"
                      />
                      <input
                        id="checkout-email"
                        type="text"
                        name="Last-name"
                        className="w-full mt-3 p-[15px] border border-grey bg-white text-dark outline-none"
                        placeholder="Last name in card"
                      />
                    </div>
                    <div className="my-5">
                      <FormControlLabel
                        control={<Checkbox color="success" />}
                        label="Remember this card for future order"
                      />
                    </div>
                    <div className="flex items-center gap-5 mt-5">
                      <Button classname="bg-green text-white hover:bg-opacity-80">Done</Button>
                      <Button>Cancel</Button>
                    </div>
                  </form>
                </div>

                {/* <!-- Pay with paypal --> */}
                <div className="mb-[30px] border-t border-grey">
                  <div className="flex items-center justify-between mt-[18px]">
                    <FormControlLabel value="paypal" control={<Radio color="success" />} label="Paypal" />
                    <div className="gap-[10px] flex items-center">
                      <img className="h-4" src="/assets/img/paypal.png" alt="" />
                    </div>
                  </div>
                  <form className="mt-[28px] hidden" action="">
                    <div className="relative grid gap-5 grid-cols-2 ">
                      <input
                        id="checkout-email"
                        type="text"
                        name="numberCard"
                        className="w-full mt-3 p-[15px] border border-grey bg-white text-dark outline-none"
                        placeholder="Card number"
                        maxLength="20"
                      />
                    </div>
                    <div className="relative grid gap-5 grid-cols-2 ">
                      <input
                        id="checkout-email"
                        type="text"
                        name="Expiration-Date"
                        className="w-full mt-3 p-[15px] border border-grey bg-white text-dark outline-none"
                        placeholder="Expiration date"
                      />
                      <input
                        id="checkout-email"
                        type="text"
                        name="Security-code"
                        className="w-full mt-3 p-[15px] border border-grey bg-white text-dark outline-none"
                        placeholder="Security code"
                        maxLength="4"
                      />
                    </div>
                    <div className="relative grid gap-5 grid-cols-2 ">
                      <input
                        id="checkout-email"
                        type="text"
                        name="First-name"
                        className="w-full mt-3 p-[15px] border border-grey bg-white text-dark outline-none"
                        placeholder="First name"
                      />
                      <input
                        id="checkout-email"
                        type="text"
                        name="Last-name"
                        className="w-full mt-3 p-[15px] border border-grey bg-white text-dark outline-none"
                        placeholder="Last name"
                      />
                    </div>
                    <div className="relative grid gap-5 grid-cols-2 --checkbox">
                      <input type="checkbox" className="checkout-form__checkbox outline-none" id="remember" hidden />
                      <label className="checkout-form__label--checkbox" htmlFor="remember">
                        Remember this card for future order
                      </label>
                    </div>
                    <div className="checkout-form__btn-wrap">
                      <button className="checkout-form__btn btn-2">Done</button>
                      <button className="checkout-form__btn btn-1">Cancel</button>
                    </div>
                  </form>
                </div>

                <Button classname="w-full border-none hover:bg-yellow hover:bg-opacity-75 hover:text-dark bg-yellow text-dark">
                  Place Order
                </Button>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
