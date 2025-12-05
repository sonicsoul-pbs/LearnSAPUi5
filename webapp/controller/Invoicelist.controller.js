sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"
], (Controller,JSONModel,formatter)=>{
    "use strict"

    return Controller.extend("learnsapui5.controller.InvoiceList", {
        formatter: formatter,
        onInit: function(){
            var oViewModel = new JSONModel({
                currency: "EUR"
            })
            this.getView().setModel(oViewModel, "view")
        }
    })

})