module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 16,
      propList: ["*"], // Перетворювати всі властивості
      selectorBlackList: [], // Селектори, які потрібно виключити з перетворення
      replace: true, // Замінювати px на rem
      mediaQuery: true, // Перетворювати px всередині media-запитів
      minPixelValue: 0, // Мінімальне значення px для перетворення
    },
  },
};
