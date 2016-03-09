exports.addToCart = function() {
  return {
    controller: 'AddToCartController',
    templateUrl: '/frontend/templates/add_to_cart.html'
  };
};

exports.categoryProducts = function() {
  return {
    controller: 'CategoryProductsController',
    templateUrl: '/frontend/templates/category_products.html'
  };
};

exports.categoryTree = function() {
  return {
    controller: 'CategoryTreeController',
    templateUrl: '/frontend/templates/category_tree.html'
  };
};

exports.checkout = function() {
  return {
    controller: 'CheckoutController',
    templateUrl: '/frontend/templates/checkout.html'
  };
};

exports.navBar = function() {
  return {
    controller: 'NavBarController',
    templateUrl: '/frontend/templates/nav_bar.html'
  };
};

exports.productDetails = function() {
  return {
    controller: 'ProductDetailsController',
    templateUrl: '/frontend/templates/product_details.html'
  };
};

exports.searchBar = function() {
  return {
    controller: 'SearchBarController',
    templateUrl: '/frontend/templates/search_bar.html'
  };
};
