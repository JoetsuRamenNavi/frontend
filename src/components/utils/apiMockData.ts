export type User = {
  id: number;
  name: string;
  password: string;
  age: number;
  favorite_store: number;
};

type store = {
  id: number;
  store_name: string;
  description: string;
  soup: string;
  men: string;
  comment: string;
  star_up: number;
  ranking: number;
  user_id: number;
};

type article = {
  id: number;
  title: string;
  date: string;
  post: string;
  store_id: number;
};

type userPage = {
  user_id: number;
  age: number;
  favorite_store: number;
};
