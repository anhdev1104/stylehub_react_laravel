import Button from '@/components/button';
import { AuthContext } from '@/contexts/AuthContext';
import { CartContext } from '@/contexts/cartContext';
import { getDistrict, getProvince, getWards } from '@/services/address';
import { addOrders } from '@/services/orders';
import {
  // Checkbox,
  // FormControlLabel,
  // Radio,
  RadioGroup,
} from '@mui/material';
import Cookies from 'js-cookie';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckoutPage = () => {
  const { totalPrice } = useContext(CartContext);
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [wards, setWards] = useState([]);
  const { user } = useContext(AuthContext);
  let shippingMoney = 30;
  let totalInvoice = totalPrice - shippingMoney;
  const [invoice, setInvoice] = useState({
    user_id: '',
    total_amount: totalInvoice,
    shipping_money: shippingMoney,
    shipping_address: '',
    payment_method: 'Payment upon delivery',
    payment_date: new Date().toUTCString(),
    payment_status: 'Unpaid',
    number_phone: '',
    order_note: '',
    order_details: [],
  });
  const [provinceValue, setProvinceValue] = useState('');
  const [districtValue, setDistrictValue] = useState('');
  const [wardsValue, setWardsValue] = useState('');

  useEffect(() => {
    (async () => {
      const province = await getProvince();
      setProvince(province.data);
    })();

    const cart = Cookies.get('cart');
    const cartParse = JSON.parse(cart);
    setInvoice(prev => ({
      ...prev,
      user_id: user?.id,
      order_details: cartParse.map(item => {
        const { productId, ...data } = item;
        return {
          product_id: productId,
          ...data,
        };
      }),
    }));
  }, [user]);

  const handleGetDistrict = async e => {
    const provinceId = e.target.value;
    if (provinceId) {
      const district = await getDistrict(provinceId);
      district && setDistrict(district.data);
    }
  };

  const handleGetWards = async e => {
    const districtId = e.target.value;
    if (districtId) {
      const wards = await getWards(districtId);
      wards && setWards(wards.data);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setInvoice({
      ...invoice,
      [name]: value,
    });
  };

  const formRef = useRef();
  const navigate = useNavigate();

  const handleCheckout = async e => {
    e.preventDefault();
    const { shipping_address, ...data } = invoice;
    const invoiceData = {
      ...data,
      shipping_address: `${shipping_address}, ${wardsValue}, ${districtValue}, ${provinceValue}`,
    };

    console.log(invoiceData);

    await addOrders(invoiceData);
    toast.success('Order Successfully !');
    formRef.current.reset();
    navigate('/');
  };

  return (
    <main className="container-page">
      <div className="pt-[100px] pb-[150px]">
        <form className="flex gap-[30px]" action="" onSubmit={handleCheckout} ref={formRef}>
          <div className="flex-shrink-0 flex-grow-0 w-2/4">
            <p className="section-heading-3">Billing details</p>
            <div className="mt-[48px]">
              {/* <!-- Checkout form deliver --> */}
              <div className="mb-5">
                <label htmlFor="checkout-deliver" className="text-lg font-semibold">
                  Delivery details to
                </label>
                <div className="relative grid gap-5">
                  <input
                    id="checkout-deliver"
                    type="text"
                    name="shipping_address"
                    className="w-full mt-3 p-[15px] border border-grey bg-white text-dark outline-none"
                    placeholder="Residence"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* <!-- Checkout form country --> */}
              <div className="mb-5">
                <label htmlFor="checkout-country" className="text-lg font-semibold">
                  Address
                </label>
                <div className="relative grid gap-5 grid-cols-2">
                  <div className="relative grid gap-5">
                    {/* <input
                      type="text"
                      name="state"
                      className="w-full mt-3 py-[15px] pr-[70px] pl-[15px] border border-grey bg-white text-lg leading-[1.67] outline-none"
                      placeholder="Province"
                    /> */}

                    <select
                      className="w-full mt-3 py-[15px] pr-[70px] pl-[15px] border border-grey bg-white text-lg leading-[1.67] outline-none appearance-none"
                      onChange={e => {
                        const selectedOption = e.target.options[e.target.selectedIndex];
                        const selectedName = selectedOption.getAttribute('data-name');
                        setProvinceValue(selectedName);
                        handleGetDistrict(e);
                      }}
                      required
                    >
                      <option value="">Province</option>
                      {province?.map(item => (
                        <option value={item.id} data-name={item.name_en} className="section-desc-2" key={item.id}>
                          {item.name_en}
                        </option>
                      ))}
                    </select>
                    <div className="absolute top-[40px] right-[25px]">
                      <img src="/assets/icons/arrow-down-complete.svg" alt="" />
                    </div>
                  </div>
                  <div className="relative grid gap-5">
                    <select
                      className="w-full mt-3 py-[15px] pr-[70px] pl-[15px] border border-grey bg-white text-lg leading-[1.67] outline-none appearance-none"
                      onChange={e => {
                        const selectedOption = e.target.options[e.target.selectedIndex];
                        const selectedName = selectedOption.getAttribute('data-name');
                        setDistrictValue(selectedName);
                        handleGetWards(e);
                      }}
                      required
                    >
                      <option value="">District</option>
                      {district?.map(item => (
                        <option value={item.id} data-name={item.name_en} className="section-desc-2" key={item.id}>
                          {item.name_en}
                        </option>
                      ))}
                    </select>
                    <div className="absolute top-[40px] right-[25px]">
                      <img src="/assets/icons/arrow-down-complete.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="relative grid gap-5 grid-cols-2">
                  <div className="relative grid gap-5">
                    <select
                      className="w-full mt-3 py-[15px] pr-[70px] pl-[15px] border border-grey bg-white text-lg leading-[1.67] outline-none appearance-none"
                      required
                      onChange={e => {
                        const selectedOption = e.target.options[e.target.selectedIndex];
                        const selectedName = selectedOption.getAttribute('data-name');
                        setWardsValue(selectedName);
                      }}
                    >
                      <option value="">Wards</option>
                      {wards?.map(item => (
                        <option value={item.id} data-name={item.name_en} className="section-desc-2" key={item.id}>
                          {item.name_en}
                        </option>
                      ))}
                    </select>
                    <div className="absolute top-[40px] right-[25px]">
                      <img src="/assets/icons/arrow-down-complete.svg" alt="" />
                    </div>
                  </div>
                  <div className="relative grid gap-5">
                    <input
                      id="checkout-country"
                      type="tel"
                      name="number_phone"
                      className="w-full mt-3 py-[15px] pr-[70px] pl-[15px] border border-grey bg-white text-lg leading-[1.67] outline-none"
                      placeholder="Your phone number"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Checkout form order --> */}
              <div className="mb-5">
                <label htmlFor="checkout-order" className="text-lg font-semibold">
                  Order note
                  <span className="section-desc-1"> (optional)</span>
                </label>
                <div className="relative grid gap-5">
                  <textarea
                    className="mt-3 w-full h-[180px] p-[15px] border border-grey bg-white resize-none text-dark text-lg outline-none"
                    name="order_note"
                    id="checkout-order"
                    cols="30"
                    rows="10"
                    placeholder="Tell us what do you think"
                    maxLength="200"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 flex-grow-0 w-2/4">
            <div className="mb-[30px]">
              <p className="pb-[18px] border-b border-grey section-heading-4">Your order</p>
              <div className="py-[18px]">
                <div className="flex items-center justify-between mb-3">
                  <p className="section-desc-3">Original Price</p>
                  <p className="section-desc-3">${totalPrice.toFixed(2)}</p>
                </div>
                {/* <div className="flex items-center justify-between mb-3">
                  <p className="section-desc-3">Savings</p>
                  <p className="section-desc-3">$82.00</p>
                </div> */}
                <div className="flex items-center justify-between mb-3">
                  <p className="section-desc-3">Shipping</p>
                  <p className="section-desc-3">${shippingMoney}</p>
                </div>
                {/* <div className="flex items-center justify-between mb-3">
                  <p className="section-desc-3">Estimated Sales Tax</p>
                  <p className="section-desc-3">$3.50</p>
                </div> */}
              </div>
              <div className="flex items-center justify-between pt-[18px] border-t border-grey">
                <p className="text-xl font-bold">Total</p>
                <p className="text-xl font-bold text-orange">${totalInvoice.toFixed(2)}</p>
              </div>
            </div>
            <RadioGroup>
              <div className="mt-[55px]">
                {/* <p className="section-heading-3">Pay with</p> */}
                {/* <!-- Pay with card --> */}
                {/* <div className="mb-[30px]">
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
                </div> */}

                {/* <!-- Pay with paypal --> */}
                {/* <div className="mb-[30px] border-t border-grey">
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
                </div> */}

                <Button classname="w-full border-none hover:bg-yellow hover:bg-opacity-75 hover:text-dark bg-yellow text-dark">
                  Place Order
                </Button>
              </div>
            </RadioGroup>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CheckoutPage;
