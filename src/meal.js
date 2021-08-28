function nameMenuItem(foodName) {
return `Delicious ${foodName}`;
};

function createMenuItem(newItemName, itemPrice, itemType) {
  var newItem = {
    name: newItemName,
    price: itemPrice,
    type: itemType
  };
  return newItem;
};

function addIngredients(newIngredient, ingredients) {
  if (ingredients.indexOf(newIngredient) === -1) {ingredients.push(newIngredient);
};
  return ingredients;
};

function formatPrice(itemPrice) {
  return "$" + itemPrice;
};

function decreasePrice(itemPrice) {
  return itemPrice * .9;
};

function createRecipe(title, ingredients, itemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: itemType
  };
  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
