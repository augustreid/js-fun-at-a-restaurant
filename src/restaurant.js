function createRestaurant(restaurantName) {
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
  return restaurant;
};

function addMenuItem(restaurantName, newItem) {
  var mealType = newItem.type;
    if (restaurantName.menus[mealType].includes(newItem) === false) {
      restaurantName.menus[mealType].push(newItem);
  return newItem;
  };
};

// I was able to get the first three tests to pass but not the last, and then eventually was able to get the first and last but not the middle two. This version is what passes the last part but not the second and third. I have left the remnants of earlier versions commented out.
function removeMenuItem(restaurantName, targetItem, meal) {
// for (var i = 0; i < restaurantName.menus[meal].length; i++) {
//   if (restaurantName.menus[meal][i].name === targetItem) {
  if (restaurantName.menus[meal].includes(targetItem) === false) {
    var menuResponse = `Sorry, we don't sell ${targetItem}, try adding a new recipe!`;
} else {
    for (var i = 0; i < restaurantName.menus[meal].length; i++) {
      if (restaurantName.menus[meal][i].name === targetItem) {
        restaurantName.menus[meal].splice(i, 1);
        var menuResponse = `No one is eating our ${targetItem} - it has been removed from the ${meal} menu!`
      };
    };
  };
  return menuResponse; 
};
  // } else {
  //   return restaurantName.menus
  //     };
  //   };
  //   } else {
  //   return `Sorry, we don't sell ${targetItem}, try adding a new recipe!`;
  //   };
  // };














module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
