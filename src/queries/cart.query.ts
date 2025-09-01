export const CART_QUERY_KEY = 'cart';

export const cartQuery = {
  queryKey: [CART_QUERY_KEY],
  queryFn: () => getItems(),
};

export const getItems = () => {
  const stored = localStorage.getItem(CART_QUERY_KEY);
  return stored ? JSON.parse(stored) : {};
};

export const setItem = (id: number, price: number, count: number) => {
  const currentCart = getItems();
  if (count < 1) {
    const {[id]: _, ...cart} = currentCart;
    localStorage.setItem(CART_QUERY_KEY, JSON.stringify(cart));
  } else {
    const updatedCart = {
      ...currentCart,
      [id]: {price: price, count: count},
    };
    localStorage.setItem(CART_QUERY_KEY, JSON.stringify(updatedCart));
  }
  return getItems();
};

export const clearCart = () => {
  localStorage.removeItem(CART_QUERY_KEY);
};
