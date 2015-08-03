if (Meteor.isClient) {
	console.log('Starting Routing.');

	Router.route('home', {
		path: '/',
			layoutTemplate: 'ApplicationLayout',
		yieldTemplates: {
			'topNav': {to: 'menu'},
			'home': {to: 'article'},
			'footer': {to: 'footer'}
	  	}
	});

	Router.route('about', {
		path: '/about',
			layoutTemplate: 'ApplicationLayout',
		yieldTemplates: {
			'topNav': {to: 'menu'},
			'about': {to: 'article'},
			'footer': {to: 'footer'}
	  	}
	});

	Router.route('projects', {
		path: '/projects',
			layoutTemplate: 'ApplicationLayout',
		yieldTemplates: {
			'topNav': {to: 'menu'},
			'projects': {to: 'article'},
			'footer': {to: 'footer'}
	  	}
	});

	Router.route('notes', {
		path: '/notes',
			layoutTemplate: 'ApplicationLayout',
		yieldTemplates: {
			'topNav': {to: 'menu'},
			'notes': {to: 'article'},
			'footer': {to: 'footer'}
	  	}
	});

	Router.route('tt', {
		path: '/tt',
			layoutTemplate: 'ApplicationLayout',
		yieldTemplates: {
			'topNav': {to: 'menu'},
			'tt': {to: 'article'},
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

	console.log('Routing Finished.');

}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}