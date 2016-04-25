var app = angular.module('portfolio', 
     [
        'ngMaterial',
        'nvd3',
        'duScroll'

    ]
);

app.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('blue');
});

app.service('MainService', function(){
    var vm = this;
    
});

app.controller('MainCtrl', function(MainService, $scope, $mdDialog){
    var vm = this;
    var _name = 'Nick';
    vm.visitor = {
        name: function(newName) {
         // Note that newName can be undefined for two reasons:
         // 1. Because it is called as a getter and thus called with no arguments
         // 2. Because the property should actually be set to undefined. This happens e.g. if the
         //    input is invalid
         return arguments.length ? (_name = newName) : _name;
        }
      };
    vm.learnMore1 = function(){ 
        var options = {};
        options.template = 
            '<md-dialog style="min-width: 200px;">'+
            '   <md-toolbar layout layout-align="center center" class="md-padding"><div flex>Project Info</div></md-toolbar>' +
            '       <md-content class="md-padding">' +
            '           <h1>Lorem</h1>'+
            '               <p>Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma and Parvati Sorting Hat Minister of Magic blue turban remember my last. </p>'+
            '        </ md-content>'+
            ' <div layout><md-button class="md-raised" ng-click="">Got it!</md-button></div>'+
            '</md-dialog>';
        options.clickOutsideToClose = true;
        $mdDialog.show(options); 
    };
    
    vm.featuredWork = [
        { title : 'Project 1', image : 'static/images/city-cars-traffic-lights.jpg'},
        { title : 'Project 2', image : 'static/images/person-apple-laptop-notebook.jpg'},
        { title : 'Project 3', image : 'static/images/header-bg.jpg'},
        
    ];
});

