ContactManager.module('Show',  function (Show, ContactManager, Backbone, Marionette, $, _) {

	Show.Controller = {
		showItem: function (model) {

				var view = new ContactManager.List.ItemView({template: '#item-template', model: model});

				ContactManager.main.show(view);
			
		}
	}
});
