const basePath = import.meta.env.BASE_URL || '';

console.log('basePath', basePath);
export const rootRoute = `${basePath}/`.replace('//', '/');
export const categoryRoute = `${basePath}/category/:slug`;
export const deliveryAndPaymentRoute = `${basePath}/delivery-and-payment`;
export const favoriteRoute = `${basePath}/favorite`;
export const thankYouRoute = `${basePath}/thank-you`;
export const checkoutRoute = `${basePath}/checkout`;
