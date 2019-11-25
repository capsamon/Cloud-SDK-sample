sap.ui.define([
  "com/alliander/klic/service/http"
], function (http) {
  "use strict";

  // var host = "https://klic.cf.alliander.com";
  var host = "";
  var servicePath = "/odata/v2/KLICService";
  var baseUrl = host + servicePath;

  return {
    getMeldingen: function () {
      return http.get(baseUrl + "/Melding").then(function (response) {
        return response.hasOwnProperty("d") ? response.d.results : response;
      });
    }
  };
});
