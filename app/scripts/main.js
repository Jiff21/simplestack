if (Meteor.isClient) {
	console.log('Starting Routing.');
	// Router.route('/', function () {
	// 	this.render('Home');
	// });

	Router.route('home', {
		path: '/',
			layoutTemplate: 'ApplicationLayout',
		yieldTemplates: {
			'topNav': {to: 'menu'},
			'home': {to: 'article'},
			'footer': {to: 'footer'}
	  	}
	});
	Router.route('login', {
		path: '/login',
			layoutTemplate: 'ApplicationLayout',
		yieldTemplates: {
			'topNav': {to: 'menu'},
			'login': {to: 'article'},
			'footer': {to: 'footer'}
	  	}
	});	

	Router.route('/ApplicationLayout');

	console.log('Routing Finished Sucessfully.');

	// // counter starts at 0
	// Session.setDefault('counter', 0);

	// Template.hello.helpers({
	// 	counter: function () {
	// 		return Session.get('counter');
	// 	}
	// });


	// Template.hello.events({
	// 	'click button': function () {
	// 		// increment the counter when button is clicked
	// 		Session.set('counter', Session.get('counter') + 1);
	// 	}
	// });
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}

