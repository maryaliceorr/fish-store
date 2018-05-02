const discount = 0.2;

const applySale = () => {
  $('.on-sale').each((i, fishCard) => {
    // looping through the indexes (each index represents a fish card) with the class of on-sale
    const basePriceElement = $(fishCard).find('.price');
    const basePrice = basePriceElement.html() * 1;
    // this will come back as text so have to add * 1
    const newPrice = (basePrice * (1 - discount)).toFixed(2);
    // creating the discounted price - the toFixed sets the decimal places and the 2 is how many decimals
    basePriceElement.html(newPrice);
    // want this to take the place of the old price
  });
};

module.exports = applySale;
