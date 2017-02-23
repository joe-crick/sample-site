import React from 'react';
import ReactDom from 'react-dom';
import Home from './pages/home';

import chatStore from './stores/chat-session';

ReactDom.render(<Home store={chatStore}/>, document.getElementById('app-root'));

