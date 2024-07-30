export interface GetAll {
  page: number;
  limit: number;
  name: string | null | undefined;
}

export interface Product {
  age_max: number;
  age_min: number;
  category_id: string;
  color: [string];
  cost: number;
  count: number;
  description: string;
  discount: number;
  for_gender: string;
  image_url: [string];
  made_in: string;
  product_id: string;
  product_name: string;
  size: [string];
}
