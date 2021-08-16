sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("zodata-projzodata_proj.controller.View1", {
		
		onInit : function(){
		
		var data = "/sap/opu/odata/iwbep/GWSAMPLE_BASIC/";
		var odatamodel1 = new sap.ui.model.odata.ODataModel(data);
		var jsonmodel1 = new sap.ui.model.json.JSONModel();
		sap.ui.core.BusyIndicator.show(0);
		odatamodel1.read("/ProductSet",{
		success : function(req,resp){
			sap.ui.core.BusyIndicator.hide();
			jsonmodel1.setSizeLimit(1000);//to show more records in output
			jsonmodel1.setData(req.results);
			this.getView().byId("table1").setModel(jsonmodel1,"sapprod");
		}.bind(this),
		error : function(msg){
			sap.ui.core.BusyIndicator.hide();
			sap.m.MessageToast("Failed to reload" + msg);
		}
		});
		}

	});
});