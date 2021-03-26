module.exports = {
  Query: {
    books: (_, { offset = 0, limit = 3 }) => {
      const newArray = [];
      let count = 0;
      books.forEach((item, index) => {
        if (index >= offset && count < limit) {
          newArray.push(item);
          count++;
        }
      });

      return newArray;
    },
  },
};

const books = [
  {
    id: 1,
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    id: 2,
    title: "City of Glass",
    author: "Paul Auster",
  },
  {
    id: 3,
    title: "The Awakening 2",
    author: "Kate Chopin 2",
  },
  {
    id: 4,
    title: "City of Glass 2",
    author: "Paul Auster 2",
  },
  {
    id: 5,
    title: "The Awakening 3",
    author: "Kate Chopin 3",
  },
  {
    id: 6,
    title: "City of Glass 3",
    author: "Paul Auster 3",
  },
  {
    id: 7,
    title: "The Awakening 4",
    author: "Kate Chopin 4",
  },
  {
    id: 8,
    title: "City of Glass 4",
    author: "Paul Auster 4",
  },
  {
    id: 9,
    title: "The Awakening 5",
    author: "Kate Chopin 5",
  },
  {
    id: 10,
    title: "City of Glass 5",
    author: "Paul Auster 5",
  },
  {
    id: 11,
    title: "The Awakening 6",
    author: "Kate Chopin 6",
  },
  {
    id: 12,
    title: "City of Glass 6",
    author: "Paul Auster 6",
  },
];
