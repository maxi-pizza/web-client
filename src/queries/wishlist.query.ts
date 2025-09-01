export const WISHLIST_QUERY_KEY = 'wishlist';

export const wishlistQuery = {
  queryKey: [WISHLIST_QUERY_KEY],
  queryFn: () => getWishlist(),
};

export const getWishlist = () => {
  const stored = localStorage.getItem(WISHLIST_QUERY_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const setItemToWishlist = id => {
  const currentWishlist = getWishlist();
  if (currentWishlist.includes(id)) {
    const updatedWishlist = currentWishlist.filter(inId => inId !== id);
    localStorage.setItem(WISHLIST_QUERY_KEY, JSON.stringify(updatedWishlist));
  } else {
    const updatedWishlist = [...currentWishlist, id];
    localStorage.setItem(WISHLIST_QUERY_KEY, JSON.stringify(updatedWishlist));
  }
  return getWishlist();
};

export const removeAllItemsFromWishlist = () => {
  const wishlist = [];
  localStorage.setItem(WISHLIST_QUERY_KEY, JSON.stringify(wishlist));
  return getWishlist();
};
