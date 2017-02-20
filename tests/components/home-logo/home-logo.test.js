import test from 'tape';
import React from 'react';
import createComponent from 'react-unit';

import HomeLogo from '../../../src/components/home-logo/home-logo';

test('HomeLogo component ', nest => {
    nest.test('shows home logo', assert => {
        const el = <HomeLogo/>;
        const $ = createComponent(el);

        const actual = $.findByQuery('.home-logo');

        assert.ok(actual.length > 0, 'should not be empty');
        assert.end();
    });

});
