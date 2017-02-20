import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors/safe';

/*eslint-disable no-console */

fs.readFile('index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(colors.red(err));
  }

  console.log(colors.blue('Processing index.html...'));

  const $ = cheerio.load(markup);
  $('head').prepend('');
  $('#app-js').attr('src', 'bundle.js');
  $('#app-css').attr('href', 'main.css');

  fs.writeFile('public/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(colors.red(err));
    }
    console.log(colors.green('index.html written to /public'));
  });
});