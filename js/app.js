angular
.module('debateMyEF', ['ngCountdown'])
.controller('CountdownCtrl', function($scope, $ngCountdown, $timeout){

    function init(){

        var now = new Date();

        var final = new Date(2015, 02, 18, 6, 0);

        var times = $ngCountdown.units.hours | $ngCountdown.units.minutes
        | $ngCountdown.units.seconds | $ngCountdown.units.days;

        $ngCountdown.setLabels(
            ' milisegundo| segundo| minuto| hora| día| semana| mes| año| década| século| milenio',
            ' milisegundos| segundos| minutos| horas| días| semanas| meses| años| décadas| séculos| milenios',
            ' y ',
            ' ',
            'ahora');

            $scope.timestamp = $ngCountdown.init(now, final, times).toString();

            $timeout(init, 1000);
        };

        init();
    });
