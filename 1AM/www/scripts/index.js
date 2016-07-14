var urlParam = null;

(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);

        $('#get-weather-btn').click(getWeatherWithZipCode);

        if (!urlParam) {
            getWeatherWithGeoLocation();
        }
    };

    function onPause() {
    };

    function onResume() {
    };

})();

function handleOpenURL(url) {
    var arrparams = url.match("meteo://(.*)$");
    urlParam = arrparams[1]

    if (urlParam) {
        $('#zip-code-input').val(urlParam);
        getWeatherWithZipCode();
    }
}
