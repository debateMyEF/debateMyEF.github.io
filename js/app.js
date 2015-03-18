'use strict';

angular
.module('debateMyEF', ['ngCountdown', 'ngAnimate'])
.controller('CountdownCtrl', function($scope, $ngCountdown, $timeout){

    var now = new Date();

    var final = new Date('Tue Mar 17 2015 20:45:00 GMT-0500 (COT)');

    var times = $ngCountdown.units.hours | $ngCountdown.units.minutes
    | $ngCountdown.units.seconds | $ngCountdown.units.days;

    function repaint(){
        $(document.body).css('background-color', '#eee');
        $('footer a').css('color', 'black');
        $('#youtube').css('color', 'black');
        $('section').css('color', 'black');
    };

    function initCountdown(){

        now = new Date();

        $scope.date = $ngCountdown.init(now, final, times)

        if(now < final) $timeout(initCountdown, 1000);
        else {
            $scope.validateDate = false;
            repaint();
        }
    };

    if(now < final){
        $scope.validateDate = true;
        initCountdown();
    }
    else{
        repaint();
    }


});
