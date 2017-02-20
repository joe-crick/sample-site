import test from 'tape';
import React from 'react';
import createComponent from 'cheerio-react';

import ChatMessage from '../../../../src/pages/chat/chat-message/chat-message';

test('ChatMessage component ', nest => {
  nest.test('chat message renders', assert => {
    const el = <ChatMessage/>;
    const chatMessage = createComponent(el);

    assert.ok(chatMessage.length > 0, 'should not be empty');
    assert.end();
  });

});
