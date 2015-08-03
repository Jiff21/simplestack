if (Meteor.isClient) {
	// // counter starts at 0
	// Session.setDefault('counter', 0);

	// Template.hello.helpers({
	// 	counter: function () {
	// 		return Session.get('counter');
	// 	}
	// });


	Router.route('/', function () {
  		this.render('Home');
	});

	Router.route('/login');

	console.log('testing.')

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

