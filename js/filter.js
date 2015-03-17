'use strict';

angular
.module('debateMyEF')
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
