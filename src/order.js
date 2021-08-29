function takeOrder(newOrder, currentOrders) {
  if (currentOrders.length < 3) {
    return currentOrders.push(newOrder);
  };
};

function refundOrder(orderNum, currentOrders) {
  for (var i = 0; i < currentOrders.length; i++) {
    if (currentOrders[i].orderNumber == orderNum) {
      currentOrders.splice(i, 1);
    };
  };
    return currentOrders;
  };

// function listItems(orders) {
//   var orderNames = [];
//   for (var i = 0; i < orders.length; i++) {
//     orderNames.push(orders[i].item);
//   };
//   return orderNames;
// };
function listItems(orders) {
  var itemNames = "";
  for (var i = 0; i < orders.length; i++) {
    if (i == 0) {itemNames = orders[i].item;
    } else {
    itemNames = `${itemNames}, ${orders[i].item}`;
  };
};
return itemNames;
};

function searchOrder(orders, itemName) {
  var isInList = false;
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].item === itemName) {
      isInList = true; };
  };
  return isInList;
};









module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
