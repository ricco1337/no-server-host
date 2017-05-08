angular.module('app', ['ui.router'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
  $stateProvider

.state('home',{
  url:'/home',
  templateUrl:'pages/home/home.html',
  controller:'mainController',
})

.state('about',{
  url:'/about',
  templateUrl:'pages/about/about.html',
  controller:'aboutController',
})

.state('shop',{
  url:'/shop',
  templateUrl:'pages/shop/shop.html',
  controller:'shopController',
})
.state('portfolio',{
  url:'/portfolio',
  templateUrl:'pages/portfolio/portfolio.html',
  controller:'portfolioController'

})
.state('contact',{
  url:'/contact',
  templateUrl:'pages/contact/contact.html',
  controller:'contactController'
});
$urlRouterProvider.otherwise('/home');

}]);

angular.module('app').controller('contactController', ["$scope", function($scope){
  
}])

angular.module('app').controller('aboutController', ["$scope", function($scope){
  
}])

angular.module('app').controller('mainController', ["$scope", function($scope){
  
}])

angular.module('app').controller('portfolioController', ["$scope", function($scope){

  let imgSlide = document.getElementsByClassName('img-slide');

  [].forEach.call(imgSlide, function(c) {
  let next = c.getElementsByClassName('next')[0],
      prev = c.getElementsByClassName('prev')[0],
      bubblesContainer = c.getElementsByClassName('bubbles')[0],
      inner = c.getElementsByClassName('inner')[0],
      imgs = c.getElementsByTagName('img'),
      currentImageIndex = 0,
      width = 100;
    bubbles = [];
    for (let i = 0; i < imgs.length; i++) {
      let b = document.createElement('span');
      b.classList.add('bubble');
      bubblesContainer.appendChild(b);
      bubbles.push(b);

      b.addEventListener('click', function() {
        currentImageIndex = i;
        switchImg();
      })

    }

    function switchImg() {
      inner.style.left = -width * currentImageIndex + 'vw';

      bubbles.forEach(function(b, i) {
        if (i === currentImageIndex) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });

    }
    next.addEventListener('click', function() {
      currentImageIndex++;
      if (currentImageIndex >= imgs.length) {
        currentImageIndex = 0;
      }
      switchImg();

    });
    prev.addEventListener('click', function() {
      currentImageIndex--;
      if (currentImageIndex < 0) {
        currentImageIndex = imgs.length - 1;
      }
      switchImg();
    });
    switchImg();
  });
}]);

angular.module('app').controller('shopController', ["$scope", function($scope){

}])
