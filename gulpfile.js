// Gulp Tasks
process.env.DISABLE_NOTIFIER = true;

var elixir = require('laravel-elixir');
// Extensions

// Variables
elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';

elixir(function(mix) {

	mix.scripts('*.js', 'dist/dialogs.min.js');
	mix.scripts('*.js', 'demo/dialogs.min.js');
	// mix.styles('*.css', 'dist/dialogs.min.css');
	mix.stylus('*.styl', 'dist/dialogs.min.css');
	mix.stylus('*.styl', 'demo/dialogs.min.css');
});
