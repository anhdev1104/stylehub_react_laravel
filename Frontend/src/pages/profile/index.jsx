import { AuthContext } from '@/contexts/AuthContext';
import { useContext } from 'react';
import { format } from 'date-fns';

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log('🚀 ~ Profile ~ user:', user);
  const formattedDate = format(new Date(user?.updated_at), 'yyyy-MM-dd HH:mm:ss');

  return (
    <main className="py-[50px] bg-[#f6f6f6]">
      <div className="container-page">
        {/* <!-- Profile content --> */}
        <div>
          <div className="flex">
            <div className="flex-shrink-0 flex-grow-0 basis-auto w-1/3">
              <aside className="pb-[30px] rounded-[20px] bg-white shadow overflow-hidden">
                {/* <!-- User --> */}
                <div className="flex flex-col items-center pt-[35px] px-5">
                  <img
                    src={user?.avatar}
                    alt=""
                    className="w-[121px] h-[121px] border-[5px] border-[#ffffff33] rounded-full object-cover shadow-sm bg-[#ccc]"
                  />
                  <h1 className="mt-[15px] text-lg font-bold">{user?.user_name}</h1>
                  <p className="profile-user__desc">Registered: {formattedDate}</p>
                </div>

                {/* <!-- Menu 1 --> */}
                <div className="profile-menu">
                  <h3 className="profile-menu__title">Manage Account</h3>
                  <ul className="profile-menu__list">
                    <li>
                      <a href="./edit-personal-info.html" className="profile-menu__link">
                        <span className="profile-menu__icon">
                          <img src="./src/assets/icons/user-profile.svg" alt="" className="icon" />
                        </span>
                        Personal info
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="profile-menu__link">
                        <span className="profile-menu__icon">
                          <img src="./src/assets/icons/location-info.svg" alt="" className="icon" />
                        </span>
                        Addresses
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="profile-menu__link">
                        <span className="profile-menu__icon">
                          <img src="./src/assets/icons/mail-info.svg" alt="" className="icon" />
                        </span>
                        Communications & privacy
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <!-- Menu 2 --> */}
                <div className="profile-menu">
                  <h3 className="profile-menu__title">My items</h3>
                  <ul className="profile-menu__list">
                    <li>
                      <a href="#!" className="profile-menu__link">
                        <span className="profile-menu__icon">
                          <img src="./src/assets/icons/reorder.svg" alt="" className="icon" />
                        </span>
                        Reorder
                      </a>
                    </li>
                    <li>
                      <a href="./with-list-login.html" className="profile-menu__link">
                        <span className="profile-menu__icon">
                          <img src="./src/assets/icons/heart.svg" alt="" />
                        </span>
                        Lists
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="profile-menu__link">
                        <span className="profile-menu__icon">
                          <img src="./src/assets/icons/registries.svg" alt="" className="icon" />
                        </span>
                        Registries
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <!-- Menu 3 --> */}
                <div className="profile-menu">
                  <h3 className="profile-menu__title">Subscriptions & plans</h3>
                  <ul className="profile-menu__list">
                    <li>
                      <a href="#!" className="profile-menu__link">
                        <span className="profile-menu__icon">
                          <img src="./src/assets/icons/protection.svg" alt="" className="icon" />
                        </span>
                        Protection plans
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <!-- Menu 4 --> */}
                <div className="profile-menu">
                  <h3 className="profile-menu__title">Customer Service</h3>
                  <ul className="profile-menu__list">
                    <li>
                      <a href="#!" className="profile-menu__link">
                        <span className="profile-menu__icon">
                          <img src="./src/assets/icons/help.svg" alt="" className="icon" />
                        </span>
                        Help
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="profile-menu__link">
                        <span className="profile-menu__icon">
                          <img src="./src/assets/icons/terms.svg" alt="" className="icon" />
                        </span>
                        Terms of Use
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="col-9 col-xl-8 col-lg-7 col-md-12">
              <div className="profile-info">
                <div className="flex gy-3">
                  {/* <!-- My Wallet --> */}
                  <div className="col-12">
                    <h2 className="section-heading section-heading-2">My Wallet</h2>
                    <p className="section-desc-1 profile__desc">Payment methods</p>

                    <div className="flex row-cols-3 row-cols-xl-2 row-cols-lg-1 gy-md-2">
                      {/* <!-- Payment card 1 --> */}
                      <div className="col">
                        <article
                          className="payment-cart"
                          // style="--bg-color: #1e2e69"
                        >
                          <img src="./src/assets/img/card/fly-bg.svg" alt="" className="payment-cart__img" />
                          <div className="payment-cart__top">
                            <img src="./src/assets/img/card/fly.svg" alt="" />
                            <span className="payment-cart__type">FeatherCard</span>
                          </div>
                          <div className="payment-cart__number">1234 4567 8901 2221</div>
                          <div className="payment-cart__bottom">
                            <div>
                              <p className="payment-cart__label">Card Holder</p>
                              <p className="payment-cart__value">Imran Khan</p>
                            </div>
                            <div className="payment-cart__expired">
                              <p className="payment-cart__label">Expired</p>
                              <p className="payment-cart__value">10/22</p>
                            </div>
                            <div className="payment-cart__circle"></div>
                          </div>
                        </article>
                      </div>

                      {/* <!-- Payment card 2 --> */}
                      <div className="col">
                        <article
                          className="payment-cart"
                          // style="--bg-color: #354151"
                        >
                          <img src="./src/assets/img/card/leaf-bg.svg" alt="" className="payment-cart__img" />
                          <div className="payment-cart__top">
                            <img src="./src/assets/img/card/leaf.svg" alt="" />
                            <span className="payment-cart__type">FeatherCard</span>
                          </div>
                          <div className="payment-cart__number">4567 8901 2221 1234</div>
                          <div className="payment-cart__bottom">
                            <div>
                              <p className="payment-cart__label">Card Holder</p>
                              <p className="payment-cart__value">Imran Khan</p>
                            </div>
                            <div className="payment-cart__expired">
                              <p className="payment-cart__label">Expired</p>
                              <p className="payment-cart__value">11/22</p>
                            </div>
                            <div className="payment-cart__circle"></div>
                          </div>
                        </article>
                      </div>

                      {/* <!-- Add new payment card --> */}
                      <div className="col">
                        <a href="./add-new-card.html" className="new-card">
                          <img src="./src/assets/icons/plus.svg" alt="" className="new-card__icon icon" />
                          <p className="new-card__text">Add New Card</p>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Account info --> */}
                  <div className="col-12">
                    <h2 className="section-heading section-heading-3">Account info</h2>
                    <p className="section-desc-1 profile__desc">Addresses, contact information and password</p>
                    <div className="flex row-cols-2 row-cols-lg-1 gy-md-2">
                      {/* <!-- Account info 1 --> */}
                      <div className="col">
                        <article className="profile-info__wrap">
                          <div className="profile-info__icon">
                            <img src="./src/assets/icons/mail-info.svg" alt="" />
                          </div>
                          <div>
                            <h3 className="section-heading-4">Email Address</h3>
                            <p className="section-desc-2 profile-info__desc">trunghoang.240500@gmail.com</p>
                          </div>
                        </article>
                      </div>

                      {/* <!-- Account info 2 --> */}
                      <div className="col">
                        <article className="profile-info__wrap">
                          <div className="profile-info__icon">
                            <img src="./src/assets/icons/phone-info.svg" alt="" />
                          </div>
                          <div>
                            <h3 className="section-heading-4">Phone number</h3>
                            <p className="section-desc-2">+84 823240040</p>
                          </div>
                        </article>
                      </div>

                      {/* <!-- Account info 3 --> */}
                      <div className="col">
                        <article className="profile-info__wrap">
                          <div className="profile-info__icon">
                            <img src="./src/assets/icons/location-info.svg" alt="" />
                          </div>
                          <div>
                            <h3 className="section-heading-4">Add an address</h3>
                            <p className="section-desc-2">Vo Gia Cu</p>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
