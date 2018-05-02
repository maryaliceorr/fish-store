const loadFishes = require('./fishes');

const whenFishesLoad = (data) => {
  console.log('data', data);
};

const whenFishesDontLoad = (error) => {
  console.error('error!', error);
};

const initializer = () => {
  loadFishes(whenFishesLoad, whenFishesDontLoad);
};

module.exports = initializer;
