sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"com/alliander/klic/model/formatter",
	"com/alliander/klic/service/KLIC.service"
], function (Controller, JSONModel, formatter, KLICService) {
	"use strict";

	return Controller.extend("com.alliander.klic.controller.Main", {
		formatter: formatter,

		onInit: function () {
			var that = this;
			this.initModels();
		},

		initModels: function () {
			var localModel = new JSONModel({
				startDate: new Date(),
				meldingen: []
			});

			KLICService.getMeldingen().then((odata) => {
				localModel.setProperty("/meldingen", odata);
			});

			localModel.setSizeLimit(10000);

			this.getView().setModel(localModel);
		}
	});
});
