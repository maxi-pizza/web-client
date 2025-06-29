const basePath = import.meta.env.VITE_APP_BASE_PATH || '';

export const rootRoute =  `${basePath}/`;
export const categoryRoute = `${basePath}/category/:slug`;
export const deliveryAndPaymentRoute = `${basePath}/delivery-and-payment`;
export const favoriteRoute = `${basePath}/favorite`;
export const thankYouRoute = `${basePath}/thank-you`;
export const checkoutRoute = `${basePath}/checkout`;
