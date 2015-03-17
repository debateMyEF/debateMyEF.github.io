angular
.module('debateMyEF', ['ngCountdown'])
.controller('CountdownCtrl', function($scope, $ngCountdown, $timeout){

    var now = new Date();

    //var final = new Date(2015, 02, 17, 18, 0);
    var final = new Date(2015, 02, 16, 23, 59);

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


})
.filter('timestamp', function() {
  return function(input, type) {

    var labels = {
        day: function(days){
            if(days == 1) return '{0} día'.format(days);
            else return '{0} días'.format(days);
        },
        hour: function(hours){
            if(hours == 1) return '{0} hora'.format(hours);
            else return '{0} horas'.format(hours);
        },
        minute: function(minutes){
            if(minutes == 1) return '{0} minuto'.format(minutes);
            else return '{0} minutos'.format(minutes);
        },
        second: function(seconds){
            if(seconds == 1) return '{0} segundo'.format(seconds);
            else return '{0} segundos'.format(seconds);
        }
    };

    return labels[type](input);
  };
});
