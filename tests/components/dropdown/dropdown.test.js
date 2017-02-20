import test from 'tape';
import React from 'react';
import createComponent from 'cheerio-react';

import Dropdown from '../../../src/components/dropdown/dropdown';

test('Dropdown component ', nest => {
  nest.test('dropdown renders', assert => {
    const el = <Dropdown/>;
    const dropdown = createComponent(el);

    assert.ok(dropdown.length > 0, 'should not be empty');
    assert.end();
  });

  nest.test('dropdown renders children', assert => {
    const el = (<Dropdown>
      <li>Test</li>
    </Dropdown>);
    const dropdown = createComponent(el);
    const children = dropdown.find('li');

    assert.ok(children.length > 0, 'should not be empty');
    assert.end();
  });
});
