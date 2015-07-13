ContactManager.module('Router', function (Router, ContactManager, Backbone, Marionette, $, _) {

	Router.Pages = Marionette.AppRouter.extend({
		appRoutes: {
			'contacts': 'list'
		}
	});
});
