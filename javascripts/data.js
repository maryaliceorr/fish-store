const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');
const bindEvents = require('./events');
const applySale = require('./discount');
// require this here because this is where our sucess function lives

const whenFishesLoad = (data) => {
  console.log('data', data);
  $('#available').append(writeFishes(data.fishes));
  bindEvents();
  applySale();
  // can call this before or afrer bindEvents
};

const whenFishesDontLoad = (error) => {
  console.error('error!', error);
};

const initializer = () => {
  loadFishes(whenFishesLoad, whenFishesDontLoad);
};

module.exports = initializer;
