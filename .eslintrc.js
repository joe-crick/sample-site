module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true,
	},

	"extends": ["eslint:recommended", "plugin:react/recommended"],

	"parser": "babel-eslint",
	"parserOptions": {
		"sourceType": "module",
		"allowImportExportEverywhere": true,

		// Enable JSX
		"ecmaFeatures": {
			"jsx": true,
		},

	},

	"plugins": [
		"react",
	],

	"rules": {
		"indent": ["error", 2],
		"linebreak-style": ["error", "unix"],
		"quotes": ["error", "single"],
		"semi": ["error", "always"],
		"no-unused-vars": ["warn"],
		"no-console": 0,
    "react/no-unknown-property": [2, {"ignore": ["tabindex", "class", "for"]}]
	},
};