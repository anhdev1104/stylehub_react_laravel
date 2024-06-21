class ShoppingCart {
  constructor(cookieName = 'cart', cookieExpiryDays = 7) {
    this.cookieName = cookieName;
    this.cookieExpiryDays = cookieExpiryDays;
    this.cart = this.getCartFromCookie();
  }

  addToCart(productId, price, quantity = 1) {
    // Kiểm tra xem sản phẩm đã có trong giỏ hàng hay chưa
    let productIndex = this.cart.findIndex(item => item.productId === productId);

    if (productIndex > -1) {
      // Nếu sản phẩm đã có trong giỏ hàng, cập nhập số lượng
      this.cart[productIndex].quantity += quantity;
    } else {
      // Nếu sản phẩm chưa có, thêm vào giỏ hàng
      this.cart.push({ productId, price: +price, quantity });
    }

    // Lưu lại giỏ hàng vào cookie
    this.setCartCookie();

    const event = new Event('cartUpdated');
    document.dispatchEvent(event);
  }

  removeFromCart(productId) {
    // Tìm và xoá sản phẩm khỏi giỏ hàng
    this.cart = this.cart.filter(item => item.productId !== productId);

    // Lưu lại giỏ hàng vào cookie
    this.setCartCookie();

    const event = new Event('cartUpdated');
    document.dispatchEvent(event);
  }

  getCartItems() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    this.setCartCookie();
  }

  getCartFromCookie() {
    // Lấy giá trị của cookie 'cart'
    let cartCookie = document.cookie.split('; ').find(row => row.startsWith(this.cookieName + '='));

    if (cartCookie) {
      // Nếu cookie "cart" tồn tại, parse giá trị JSON
      return JSON.parse(decodeURIComponent(cartCookie.split('=')[1]));
    }
    // Nếu cookie "cart" không tồn tại, trả về mảng rỗng
    return [];
  }

  setCartCookie() {
    // Lưu giá trị giỏ hàng vào cookie dưới dạng JSON string
    document.cookie =
      this.cookieName +
      '=' +
      encodeURIComponent(JSON.stringify(this.cart)) +
      '; path=/; max-age=' +
      60 * 60 * 24 * this.cookieExpiryDays; // Cookie sẽ hết hạn sau số ngày định trước
    // +'; secure';
  }
}

export default ShoppingCart;
