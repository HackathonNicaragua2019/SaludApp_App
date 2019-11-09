// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        document.addEventListener("deviceready", initializeControls, false);
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();

function initializeControls() {

    $("#buttonObtenerNota").click(function() {
        obtenerNotaIngreso();        
    });
}

function obtenerNotaIngreso() {

    $("#tableNotaIngreso1era").empty();

    $.ajax({

        type: "POST",
        url: "http://192.168.1.100/Saludapp/BackendFolder/consultarNotaIngreso1era.php",
        data: {},
        cache: false,
        success: function (data) {
            $("#tableNotaIngreso1era").replaceWith(data);
        },
        error: function (data) {
            alert("No hay conexion con la base de datos");
        }

    });

    $.ajax({

        type: "POST",
        url: "http://192.168.1.100/Saludapp/BackendFolder/consultarNotaIngreso2da.php",
        data: {},
        cache: false,
        success: function (data) {
            $("#tableNotaIngreso2da").replaceWith(data);
        },
        error: function (data) {
            alert("No hay conexion con la base de datos");
        }

    });

    $.ajax({

        type: "POST",
        url: "http://192.168.1.100/Saludapp/BackendFolder/consultarNotaIngreso3era.php",
        data: {},
        cache: false,
        success: function (data) {
            $("#tableNotaIngreso3era").replaceWith(data);
        },
        error: function (data) {
            alert("No hay conexion con la base de datos");
        }

    });

}