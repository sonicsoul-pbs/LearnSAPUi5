sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";
    return Controller.extend("learnsapui5.controller.HelloPanel", {
      onShowHello: function () {
        //read msg from i18n Model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
   
        var sMsg = oBundle.getText("helloMsg", [sRecipient,"Lauch"]);
        MessageToast.show(sMsg, {});
      },
      onOpenHelloDialog: function () {
        this.getOwnerComponent().openHelloDialog();
      },
    });
  }
);
