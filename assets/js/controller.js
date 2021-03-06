ContactManager.module('Controller', function (Controller, ContactManager, Backbone, Marionette, $, _) {

		Controller.fns = {
			listContacts: function () { 
				var person = new ContactManager.Data.Contact;
				var items = new ContactManager.List.ItemView({template: '#static-template', model: person});
				ContactManager.main.show(items);

				items.on('click:itemview', function (model) {

					ContactManager.Show.Controller.showItem(model);
				});		
			
				ContactManager.main.show(items);	
			}
		};

	
});
