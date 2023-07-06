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
  first: rankingEntryStore;
  second: rankingEntryStore;
  third: rankingEntryStore;
};

type rankingEntryStore = {
  store: string;
  name: string;
  price: number;
  image: string;
};

type entryStore = {
  store: string;
  name: string;
  price: number;
  image: string;
  votes: number;
};
