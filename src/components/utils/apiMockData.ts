type user = {
  id: number;
  name: string;
  mail: string;
  password: string;
  age: number;
};

type store = {
  id: number;
  name: string;
  entry: {
    name: string;
    price: number;
    img: string;
  };
  main: {
    soup: string[];
    style: string[];
    men: string[];
    address: string[];
    pay: string[];
    seat: {
      table: number;
      counter: number;
    };
    tel: string;
    budgetLunch: number;
    budgetNight: number;
    holiday: string[];
    images: string[];
  };
  menu: {
    image: string[];
    name: string[];
    battle: boolean[];
    price: number[];
  };
  reputation: {
    star: number[];
    storeTime: boolean[];
    title: string[];
    body: string[];
  };
};

// type store = {
//   id: number;
//   store_name: string;
//   description: string;
//   soup: string;
//   men: string;
//   comment: string;
//   star_up: number;
//   ranking: number;
//   user_id: number;
// };

// type article = {
//   id: number;
//   title: string;
//   date: string;
//   post: string;
//   store_id: number;
// };

// type userPage = {
//   user_id: number;
//   age: number;
//   favorite_store: number;
// };
