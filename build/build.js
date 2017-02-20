const webpack = require('webpack');
const webpackConfig =  require('../webpack.config.prod');
const colors = require('colors/safe');

/*eslint-disable no-console */

process.env.NODE_ENV = 'production';

console.log(colors.blue('Generating minified bundle...'));

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    // A fatal error occurred. Stop.
    console.log(colors.red(err.bold));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(colors.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(colors.bold.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(colors.yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);
  console.log(colors.green('Your app has been compiled in production mode and written to /public.'));

  return 0;
});