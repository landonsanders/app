ContactManager.module('List', function (List, ContactManager, Backbone, Marionette, $, _) {

	List.ItemView = Marionette.ItemView.extend({
		tagName: 'ul',
		template: 'person-template',
		events: {
			'click': 'handler'
		},
		handler: function () {
	
			console.log('(view.js) The Model Type:' + typeof this.model);

			this.trigger('click:itemview', this.model);
		}
	});	

	List.CollectionView = Marionette.CollectionView.extend({
		tagName: 'ul',
		childView: List.ItemView
	});
});
