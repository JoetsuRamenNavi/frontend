type battleProps = {
  The1st: battleChildren;
};

type battleChildren = {
  theme: string;
  start: string;
  end: string;
  ranking: ranking;
};

type ranking = {
  first: rankingStore;
  second: rankingStore;
  third: rankingStore;
};

type rankingStore = {
  store: string;
  name: string;
  price: number;
  image: string;
};
