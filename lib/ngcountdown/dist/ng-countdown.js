(function(){
    'use strict';

    /**
    * $ngCountown.init export a countdownd global method [iug!]
    * $ngCountown.units export a units for configure the countdown
    *
    */

    angular
    .module('ngCountdown', [])
    .service('$ngCountdown', $ngCountdown);

    function $ngCountdown(){

        this.init = countdown;

        this.resetLabels = countdown.resetLabels;

        this.setLabels = countdown.setLabels;

        this.units = {
            all: countdown.ALL,
            millennia: countdown.MILLENNIA,
            centuries: countdown.CENTURIES,
            decades: countdown.DECADES,
            years: countdown.YEARS,
            months: countdown.MONTHS,
            weeks: countdown.WEEKS,
            days: countdown.DAYS,
            hours: countdown.HOURS,
            minutes: countdown.MINUTES,
            seconds: countdown.SECONDS,
            milliseconds: countdown.MILLISECONDS,
            defaults: countdown.DEFAULTS
        };

    }

})();
