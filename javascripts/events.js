// Filter fish that are "on sale"
const filterFish = () => {
  $('#available .fish').not('.on-sale').toggle();
};

const changeButtonText = () => {
  $('#show-sale').text((i, text) => {
    let returnText = '';
    if (text === 'Show Sale Fish') {
      returnText = 'Show All Fish';
    } else {
      returnText = 'Show Sale Fish';
    }
    return returnText;
  });
};

// Add fish to "Basket"

const moveToCart = (e) => {
  const fishCard = $(e.target).closest('.fish');
  // finding the closest parent fish card based on the (e.target = the button I click) the button I click
  $('#snagged').append(fishCard);
  $(e.target).text('Remove From Cart').removeClass('add btn-danger').addClass('remove btn-info');
};

const removeFromCart = (e) => {
  const fishCard = $(e.target).closest('.fish');
  // finding the closest parent fish card based on the (e.target = the button I click) the button I click
  $('#available').append(fishCard);
  $(e.target).text('Add to Cart').removeClass('remove btn-info').addClass('add btn-danger');
};

// add to cart and remove from cart are adding the button text when one is done so the opposite text is placed onthe function that applies

const bindEvents = () => {
  $('body').on('click', '.remove', removeFromCart);
  $('body').on('click', '.add', moveToCart);
  // on click it's looking to remove via the removeFromCart function (put on body because it is listening all the time instead of only if it's already there)
  // on click it's looking to add via the moveToCart function
  $('#show-sale').click(() => {
    changeButtonText();
    filterFish();
  });
};

module.exports = bindEvents;
