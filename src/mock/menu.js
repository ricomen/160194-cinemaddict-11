const generateMenu = () => {
  return [
    {
      url: `#all`,
      count: null,
      type: `item`,
      isActive: true,
    },
    {
      url: `#watchlist`,
      count: 13,
      type: `item`,
      isActive: false,
    },
    {
      url: `#history`,
      count: 4,
      type: `item`,
      isActive: false
    },
    {
      url: `#favorites`,
      count: 4,
      type: `item`,
      isActive: false,
    },
  ];
};

export {generateMenu};
