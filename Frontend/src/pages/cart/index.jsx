import Button from '@/components/button';
import { useContext, useEffect, useState } from 'react';
import { getProducts } from '@/services/products';
import ShoppingCart from '@/helpers/ShoppingCart';
import { toast } from 'react-toastify';
import LoadingSpin from '@/components/loading/LoadingSpin';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { CartContext } from '@/contexts/cartContext';
import checkJwtExpiration from '@/helpers/checkExpJwt';

const CartPage = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totals, setTotals] = useState({ originalPrice: 0, savings: 0, total: 0 });
  const [loading, setLoading] = useState(true);
  const [isExpired, setIsExpired] = useState(null);
  console.log('🚀 ~ CartPage ~ isExpired :', isExpired);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      setIsExpired(checkJwtExpiration(token));
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    const loadCartItemsFromCookie = () => {
      const cart = new ShoppingCart();
      const cartItemsFromCookie = cart.getCartFromCookie();

      const productsInCart = products
        .map(product => {
          const cartItem = cartItemsFromCookie.find(cartItem => cartItem.productId === product.id);
          return cartItem ? { ...product, quantity: cartItem.quantity } : null;
        })
        .filter(Boolean);

      setCartItems(productsInCart);
    };

    if (products.length > 0) {
      loadCartItemsFromCookie();
    }
  }, [products]);

  useEffect(() => {
    const calculateTotals = () => {
      const originalPrice = cartItems.reduce((sum, item) => sum + item.initial_price * item.quantity, 0);
      const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const savings = originalPrice - totalPrice;
      setTotals({ originalPrice, savings, total: totalPrice });
    };

    calculateTotals();
  }, [cartItems]);

  const updateQuantity = (productId, increment) => {
    const cart = new ShoppingCart();
    const updatedCartItems = cartItems
      .map(item => {
        if (item.id === productId) {
          const newQuantity = item.quantity + increment;
          if (newQuantity < 1) return item; // Don't update if quantity goes below 1
          // if (newQuantity > 6) return item; // Don't update if quantity goes above 6
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
      .filter(item => item.quantity > 0);

    setCartItems(updatedCartItems);

    updatedCartItems.forEach(item => {
      cart.addToCart(item.id, item.quantity - (cart.cart.find(ci => ci.productId === item.id)?.quantity || 0));
    });
  };

  const removeItem = productId => {
    const isRemove = confirm('Do you want to remove this product from your shopping cart ?');
    if (!isRemove) return;
    const cart = new ShoppingCart();
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
    cart.removeFromCart(productId);
    toast.success('Successfully removed product from carts.');
  };

  const navigate = useNavigate();
  const { setTotalPrice } = useContext(CartContext);
  const handleCheckout = () => {
    setTotalPrice(Math.ceil(totals?.total));
    navigate('/checkout');
  };

  return (
    <main className="container-page">
      <div className="pt-[100px] pb-[150px]">
        <div className="flex flex-wrap justify-between max-lg:flex-col max-lg:w-[650px] max-lg:mx-auto max-md:w-[90%]">
          {loading && <LoadingSpin />}
          {!loading && (
            <>
              <div className="flex-grow-0 flex-shrink-0 basis-auto w-2/4 max-lg:w-full">
                {cartItems.length > 0 ? (
                  cartItems.map(item => (
                    <article key={item.id}>
                      <div className="flex gap-8 mt-[18px] pb-[18px] border-b border-grey">
                        <Link to={`/product/${item.id}`} className="w-[200px] h-[150px]">
                          <img src={item.images[0].image} alt="" className="w-full h-full object-cover" />
                        </Link>
                        <div className="w-full">
                          <Link to={`/product/${item.id}`} className="text-lg capitalize font-semibold">
                            {item.product_name}
                          </Link>
                          <p className="my-2 text-sm section-desc-2">Cart ID: {item.id}</p>
                          <div className="flex items-center gap-3">
                            <p className="text-lg font-semibold text-gray-500 line-through">
                              ${Math.ceil(item.initial_price)}
                            </p>
                            <p className="text-lg font-semibold text-orange">${Math.ceil(item.price)}</p>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-7 h-7 font-bold bg-[#c4d1d0] section-desc-3"
                                disabled={item.quantity === 1} // Disable decrement button if quantity is 1
                              >
                                -
                              </button>
                              <span className="flex items-center font-bold w-7 h-7 justify-center border border-grey section-desc-3">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-7 h-7 bg-[#c4d1d0] font-bold section-desc-3"
                              >
                                +
                              </button>
                            </div>
                            <div
                              className="flex items-center gap-[30px] cursor-pointer text-xl text-red-500"
                              onClick={() => removeItem(item.id)}
                            >
                              <i className="fa-solid fa-trash-can"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <img src="/assets/img/cart-empty.png" alt="" />
                )}
              </div>
              <div className="flex-shrink-0 flex-grow-0 basis-auto w-2/4 max-lg:w-full">
                <div className="ml-[130px] max-lg:ml-0">
                  <p className="pb-[18px] border-b border-grey section-heading-4">Order Summary</p>
                  <div className="py-[18px]">
                    <div className="flex items-center justify-between mb-3">
                      <p className="section-desc-3">Original Price</p>
                      <p className="font-bold section-desc-3">${totals.originalPrice}</p>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <p className="section-desc-3">Savings</p>
                      <p className="font-bold section-desc-3">${Math.ceil(totals.savings)}</p>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <p className="section-desc-3">Estimated Sales Tax</p>
                      <p className="font-bold section-desc-3">FREE</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-[18px] border-t border-grey">
                    <p className="text-dark text-xl font-bold">Total</p>
                    <p className="text-orange text-xl font-bold">${Math.ceil(totals.total)}</p>
                  </div>
                  {isExpired !== null && !isExpired ? (
                    <Button
                      classname="w-full mt-[44px] bg-yellow border-none text-dark hover:bg-yellow hover:text-dark hover:bg-opacity-60"
                      onClick={handleCheckout}
                    >
                      Proceed to Check Out
                    </Button>
                  ) : (
                    <Button
                      location="/login"
                      classname="w-full mt-[44px] bg-yellow border-none text-dark hover:bg-yellow hover:text-dark hover:bg-opacity-60"
                    >
                      Login to place an order
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default CartPage;
