'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
    beforeEach(module('myApp.controllers'));



    it('Cpick controller should exist.', inject(function($controller) {
        //spec body
        var Cpick = $controller('Cpick', { $scope: {} });
        expect(Cpick).toBeDefined();
    }));
    it('$scope.adjustbg should be set to false.', inject(function($controller, $rootScope) {

        var scope = $rootScope.$new();
        var Cpick = $controller('Cpick', { $scope: scope});
        scope.$digest();
        expect(scope.adjustbg === false);
        expect(scope.prevlang === 'ruby');
        expect(scope.faces.deffacefg === "#303030");
    }));
    it('darkBg function should return true if supplied color is dark',
       inject(function($controller, $rootScope) {
           var scope = $rootScope.$new();
           var Cpick = $controller('Cpick', {$scope: scope});
           scope.$digest();
           var darkfaces = ["#000000","#002b36","#586e75",
                            "#932ad7"];
           var lightfaces = ["#ffffff","#fdf6e3","#d2d2d2",
                             "#d7cf47","#87e37e"];
           for (var i = 0;i<darkfaces.length;i++) {
               expect(scope.darkBg(darkfaces[i])).toEqual(true);
           }
           for (i = 0;i<lightfaces.length;i++) {
               expect(scope.darkBg(lightfaces[i])).toEqual(false);
           }
       }));
    it('setRandomFaces should assign to $scope.faces the supplied data.',
       inject(function($controller, $rootScope) {
           var scope = $rootScope.$new();
           var Cpick = $controller('Cpick', {$scope: scope});
           scope.$digest();
           var data = {"randkey": "#333333","randbuiltin":"#444444",
                       "randstring":"#555555","randfuncname":"#666666"};
           scope.setRandomFaces(data);
           expect(scope.faces.keywordface).toEqual("#333333");
           expect(scope.faces.builtinface).toEqual("#444444");

       }));





});
