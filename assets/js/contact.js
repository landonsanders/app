ContactManager.module('Data', function (Data, ContactManager, Backbone, Marionette, $, _) {

	Data.Contact = Backbone.Model.extend({
		defaults: {
			username: 'Joe Q. Doe',
			handle: '@joeqdoe'
		}
	});
	
	Data.Contacts = Backbone.Collection.extend({
		model: Data.Contact
	});
});
