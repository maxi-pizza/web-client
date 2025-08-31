export type Product = {
  id: number;
  slug: string;
  name: string;
  image: string;
  description: string | null;
  weight: string;
  price: string;
  unit: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  products: Product[] | null;
};

export enum PaymentMethodEnum {
  Card = 1,
  Cash = 2,
}

export enum DeliveryMethodEnum {
  Takeaway = 1,
  Delivery = 2,
}
