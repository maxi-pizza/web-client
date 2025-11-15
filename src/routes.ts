const baseUrl = import.meta.env.BASE_URL || '';

const basePath = baseUrl.endsWith('/')
  ? baseUrl.slice(0, baseUrl.length - 1)
  : baseUrl;

console.log('basePath', basePath);
export const rootRoute = `${basePath}/`;
export const categoryRoute = `${basePath}/category/:slug`;
export const deliveryAndPaymentRoute = `${basePath}/delivery-and-payment`;
export const favoriteRoute = `${basePath}/favorite`;
export const thankYouRoute = `${basePath}/thank-you`;
export const checkoutRoute = `${basePath}/checkout`;
