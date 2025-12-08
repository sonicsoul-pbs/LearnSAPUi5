sap.ui.define([
    "../localService/mockserver"
], function(mockserver){
    "use strict"

    //initialise the mock server
    mockserver.init();

    //inititalise the embedded componentn on the html page
    sap.ui.require(["sap/ui/core/ComponentSupport"])
})