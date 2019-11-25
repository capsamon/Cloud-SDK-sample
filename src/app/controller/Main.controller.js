sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"com/alliander/klic/model/formatter",
	"com/alliander/klic/service/KLIC.service"
], function (Controller, JSONModel, formatter, timeSheetService) {
	"use strict";

	return Controller.extend("com.alliander.klic.controller.Main", {
		formatter: formatter,

		onInit: function () {
			var that = this;
			this.initModels();
		},

		initModels: function () {
			var model = new JSONModel({
				startDate: new Date(),
				people: []
			});

			model.setSizeLimit(10000);

			this.getView().setModel(model);
		}
	});
});
