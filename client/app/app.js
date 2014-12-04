angular.module('waffle', [
  'waffle.services',
  'waffle.post',
  // 'waffle.main',
  'waffle.edit',
  'waffle.dashboard',
  'waffle.auth',
  'ui.router'
])

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('post', {
      templateUrl: 'app/post/post.html',
      controller: 'PostController',
      url: '/post'
    })
    // .state('main', {
    //   templateUrl: 'app/main/main.html',
    //   controller: 'MainController',
    //   url: '/main'
    // })
    .state('edit', {
      templateUrl: 'app/edit/edit.html',
      controller: 'EditController',
      url: '/edit'
    })
    .state('dashboard', {
    	templateUrl: 'app/dashboard/dashboard.html',
    	controller: 'DashboardController',
    	url: '/dashboard'
    })

})