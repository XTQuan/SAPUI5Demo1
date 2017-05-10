sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";


////tttttttt
	return UIComponent.extend("opensap.myapp.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// additional initialization can be done here
		}

	});
});